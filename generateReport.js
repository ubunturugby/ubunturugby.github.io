// Import required libraries
const fs = require('fs');
const Papa = require('papaparse');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, TableOfContents, ImageRun } = require('docx');

// Read the CSV file
const csvFilePath = 'resources/news.csv';

// Define default metadata for the Word document to avoid the "creator" error
const defaultOptions = {
    creator: "AUR",
    title: "Relatório de Atividades 2024",
    description: "Relatório de atividades desportivas e sociais",
    sections: [],
};

// Function to generate a Word document
async function generateWordDocument(data) {
    // Create a new document with metadata options
    const doc = new Document({
        creator: defaultOptions.creator,
        title: defaultOptions.title,
        description: defaultOptions.description,
        sections: defaultOptions.sections,
        styles: {
            default: {
                document: {
                    run: {
                        font: "Calibri", // Set global font type
                        size: 24, // Set global font size (24 half-points = 12 points)
                    },
                },
            },
        },
    });

    // Add sections with content to the document
    for (const section of defaultOptions.sections) {
        doc.addSection(section); // Ensure sections are iterated over safely
    }

    // Add a title page
    doc.addSection({
        children: [
            new Paragraph({
                text: "ASSOCIAÇÃO EU SOU PORQUE TU ÉS",
                heading: HeadingLevel.HEADING_1,
                bold: true,
                spacing: {
                    after: 400,  // Increase space after title
                },
                alignment: "center"
            }),
            new Paragraph({
                text: "Relatório de Atividades",
                heading: HeadingLevel.HEADING_2,
                bold: true,
                spacing: {
                    after: 200,
                },
                alignment: "center"
            }),
            new Paragraph({
                text: "2024",
                heading: HeadingLevel.HEADING_2,
                spacing: {
                    after: 200,
                },
                alignment: "center"
            }),
        ],
    });

    // Add Table of Contents before the introduction
    doc.addSection({
        children: [
            new Paragraph({
                text: "Índice",
                heading: HeadingLevel.HEADING_1,
                bold: true,
                alignment: "center",
                spacing: { after: 300 }
            }),
            new TableOfContents("Sumário", {
                hyperlink: true,  // Enable hyperlinks in TOC
                headingStyleRange: "1-3",  // Include headings from levels 1 to 3
            }),
            new Paragraph({
                children: [new TextRun({ text: '', break: 2 })],  // Add space after TOC
            })
        ],
    });

    // Introduction section
    doc.addSection({
        children: [
            new Paragraph({
                text: "Introdução",
                heading: HeadingLevel.HEADING_2,
                bold: true,
                spacing: {
                    after: 300,
                }
            }),
            new Paragraph({
                text: "Este relatório apresenta as atividades desenvolvidas pela AESPTE durante o ano 2024...",
                spacing: {
                    after: 200,
                }
            }),
        ],
    });

    let children = [];
    // Iterate through the data and add it to the document
    data.forEach((row, index) => {
        const currentDate = new Date(row['Data'].replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));
        const previousDate = index > 0 ? new Date(data[index - 1]['Data'].replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")) : null;

        if (!previousDate || currentDate.getMonth() !== previousDate.getMonth()) {
            const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
            let monthParagraph = new Paragraph({
                children: [new TextRun({ text: '', break: 2 })],
            })
            monthParagraph.addChildElement(
                new Paragraph({
                    text: monthNames[currentDate.getMonth()],
                    heading: HeadingLevel.HEADING_3,
                    bold: true,
                    spacing: {
                        after: 200,
                    }
                })
            );
            children.push(monthParagraph);
        }
        children.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: `${row['Descrição']}`,
                        break: 1,
                    }),
                ],
            }),
        );
        let imageParagraph = new Paragraph({
            alignment: index % 2 === 0 ? AlignmentType.LEFT : AlignmentType.RIGHT,
            children: [],
        });
        let imageExists = false;

        for (let i = 1; i <= 5; i++) { // Assuming a maximum of 5 images per news item
            const fileLink = `news/not${index + 1}-${i}.jpg`;
            if (fs.existsSync(fileLink)) {
                imageExists = true;
                imageParagraph.addChildElement(
                    new ImageRun({
                        data: fs.readFileSync(fileLink),
                        transformation: {
                            width: 200,
                            height: 250
                        },
                    })
                );
                imageParagraph.addChildElement(
                    new TextRun({
                        text: '   ',
                    })
                );
            }
        }

        if (imageExists) {
            children.push(imageParagraph);
        }
    });

    doc.addSection({
        children: [
            new Paragraph({
                text: "Época 2024",
                heading: HeadingLevel.HEADING_2,
                bold: true,
                spacing: {
                    after: 300,
                }
            }),
            ...children,
        ],
    });

    // Add conclusion section
    doc.addSection({
        children: [
            new Paragraph({
                text: "Considerações Finais",
                heading: HeadingLevel.HEADING_2,
                bold: true,
                spacing: {
                    after: 300,
                }
            }),
            new Paragraph({
                text: "Este relatório reflete o trabalho desenvolvido pela Associação Eu Sou Porque Tu És...",
                spacing: {
                    after: 200,
                }
            }),
        ],
    });

    // Pack the document and write it to a file
    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync('resources/Relatório Execução 2024.docx', buffer);

    console.log('Word document created successfully!');
}

// Function to read and parse the CSV file
fs.readFile(csvFilePath, 'utf8', (err, csvData) => {
    if (err) {
        console.error("Error reading CSV file:", err);
        return;
    }

    // Parse the CSV data using PapaParse
    Papa.parse(csvData, {
        header: true,         // Treat the first row as headers
        skipEmptyLines: true, // Skip any empty lines
        delimiter: ";",       // Set the correct delimiter (semicolon)
        complete: function (results) {
            console.log("Parsed Data:", results.data);

            const data = results.data.sort((a, b) => {
                const dateA = new Date(a['Data'].replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));
                const dateB = new Date(b['Data'].replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));
                return dateA - dateB;
            });

            // Generate the Word document with the parsed data
            generateWordDocument(data);
        },
        error: function (error) {
            console.error("Error while parsing CSV:", error.message);
        }
    });
});
