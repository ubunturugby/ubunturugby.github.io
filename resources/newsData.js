// Array to store the news items data
const newsItems = [
    {
        id: 51,
        title: "Iniciação ao Rugby na Casa Seis",
        date: "19/09/2024",
        description: "A AUR realizou no pátio da Casa Seis uma sessão de sensibilização para crianças e jovens, um fim de tarde muito animado e divertido, com um excelente ambiente entre todos!",
        images: 1
    },
    {
        id: 50,
        title: "Escolinha de Mira Sintra",
        date: "17/09/2024",
        description: "Iniciámos uma nova etapa, começámos um segundo polo de treinos em Mira Sintra, para os escalões entre sub6 e sub14!",
        images: 1
    },
    {
        id: 49,
        title: "Sintra + Ativa",
        date: "14/09/2024 - 15/09/2024",
        description: "A AUR esteve presente no evento Sintra + Ativa no Parque Urbano da Cavaleira, onde foi feita uma atividade de iniciação ao rugby para as crianças.",
        images: 1
    },
    {
        id: 48,
        title: "Festas da Nossa Senhora da Natividade",
        date: "05/09/2024 - 08/09/2024",
        description: "A AUR esteve presente nas Festas da Nossa Senhora da Natividade, em Mem Martins, com uma banca para divulgar o projeto e incentivar à prática de rugby.",
        images: 1
    },
    {
        id: 47,
        title: "Colónias de Férias JFAMM",
        date: "25/07/2024",
        description: "A AUR deu uma iniciação ao rugby nas Colónias de Férias da JFAMM, na escola Visconde de Juromenha.",
        images: 2
    },
    {
        id: 46,
        title: "Projeto \"Movimento Tag\"",
        date: "24/07/2024",
        description: "Este novo projeto criado pela AUR consiste em promover junto da faixa etária idosa o Tag Rugby adaptado e jogado a andar.",
        images: 1
    },
    {
        id: 45,
        title: "Desporto na Praia",
        date: "20/07/2024",
        description: "A AUR esteve na Praia das Maçãs, onde foi feito um treino para as pessoas que estavam a frequentar a praia se poderem juntar.",
        images: 1
    },
    {
        id: 44,
        title: "Colónias de Férias JFAMM",
        date: "18/07/2024",
        description: "A AUR deu uma iniciação ao rugby nas Colónias de Férias da JFAMM, nas escolas Mestre Domingos Saraiva e Visconde de Juromenha.",
        images: 1
    },
    {
        id: 43,
        title: "Férias Desportivas Praia das Maçãs",
        date: "17/07/2024",
        description: "A AUR esteve presente nas Férias Desportivas na Praia das Maçãs, onde foi feita uma atividade de iniciação ao rugby para os participantes.",
        images: 1
    },
    {
        id: 42,
        title: "Sintra + Ativa",
        date: "13/07/2024 - 14/07/2024",
        description: "A AUR esteve presente no evento Sintra + Ativa na Serra das Minas, onde foi feita uma atividade de iniciação ao rugby para as crianças.",
        images: 1
    },
    {
        id: 41,
        title: "IV Feira das Instituições",
        date: "05/07/2024 - 07/07/2024",
        description: "A AUR esteve presente na IV Feira das Instituições, em Rio de Mouro. Com a nossa banca, vendemos merch e outros produtos, dando a conhecer mais o projeto.",
        images: 1
    },
    {
        id: 40,
        title: "Colónias de Férias da JFAMM",
        date: "04/07/2024",
        description: "A AUR esteve presente nas Colónias de Férias da JFAMM, onde foi feita uma atividade de inicição ao rugby para as crianças.",
        images: 1
    },
    {
        id: 39,
        title: "Desporto na Praia",
        date: "03/07/2024",
        description: "A AUR iniciou uma atividade na Praia das Maçãs, onde foi feito um treino para as pessoas que estavam a frequentar a praia se poderem juntar.",
        images: 1
    },
    {
        id: 38,
        title: "Jantar Final de Época",
        date: "28/06/2024",
        description: "Assim chega mais um final de época, como todas, com vitórias, derrotas e muito progresso dentro e fora de campo! Como é costume, fizemos o jantar de final de época onde se realizou também a entrega de prémios.",
        images: 5
    },
    {
        id: 37,
        title: "Manhãs Desportivas",
        date: "22/06/2024",
        description: "A AUR esteve presente nas Manhãs Desportivas, no Campo de Futebol da Tapada. Foi um bom dia para se experimentar coisas novas e manter o corpo ativo.",
        images: 1
    },
    {
        id: 36,
        title: "Treino de Rugby em Cadeira de Rodas",
        date: "21/06/2024",
        description: "A AUR participou num treino diferente. Vários atletas de todos escalões tiveram a oportunidade de aprender e experimentar o rugby adaptado a cadeira de rodas!",
        images: 1
    },
    {
        id: 35,
        title: "Ericeira Beach Rugby",
        date: "15/06/2024 - 16/06/2024",
        description: "A AUR participou na 14° Edição do Ericeira Beach Rugby, representado pelos escalões Seniores Feminino e Masculino, Sub19, Sub16, Sub14, Sub12, Sub10 e Sub8.",
        images: 1
    },
    {
        id: 34,
        title: "Algarve 7s",
        date: "07/06/2024 - 10/06/2024",
        description: "Foram dias de rugby incríveis, que deram aos atletas a oportunidade de jogar com equipas internacionais e evoluir de jogo para jogo. Os seniores masculinos com a sua primeira participação, retiraram imensas aprendizagens. A equipa sénior feminina conseguiu conquistar o 3º lugar da sua categoria.",
        images: 1
    },
    {
        id: 33,
        title: "Dia da Criança",
        date: "01/06/2024",
        description: "A AUR celebrou o Dia da Criança com um convívio entre atletas. Estivémos presentes tanto no Parque Internacional Mem Martins, como no Complexo Desportivo Municipal de Fitares. Os sub8/10/12 tiveram o convívio do CDUL sponsors na Cidade Universitária.",
        images: 1
    },
    {
        id: 32,
        title: "Curso de Arbitragem Grau I",
        date: "25/05/2024",
        description: "Tivemos 7 pessoas da AUR, entre atletas e treinadores, presentes no Curso de Arbitragem Grau I, certificado pela federação portuguesa de rugby.",
        images: 1
    },
    {
        id: 31,
        title: "Feira da Doçaria",
        date: "17/05/2024 - 19/05/2024",
        description: "A AUR esteve presente na Feira da Doçaria, no Parque Urbano da Cavaleira. Com a nossa banca, vendemos merch e outros produtos, dando a conhecer mais o projeto. Além disso, incentivámos à prática de rugby com atividades, onde até o Sr. Presidente da JFAMM, Valter Januário, participou.",
        images: 3
    },
    {
        id: 30,
        title: "3° Etapa do Campeonato Nacional F 7's",
        date: "11/05/2024",
        description: "As nossas séniores femininas marcaram presença na 3° etapa do Campeonato Nacional de Sevens Feminino, os jogos decorreram no campo da Agrária, em Coimbra.",
        images: 1
    },
    {
        id: 29,
        title: "Ajuda no Crossrun em Rio de Mouro",
        date: "11/05/2024",
        description: "A AUR esteve presente no Crossrun em Rio de Mouro, onde ajudou na organização e na montagem do evento.",
        images: 1
    },
    {
        id: 28,
        title: "2° Etapa do Campeonato Nacional F 7's",
        date: "04/05/2024",
        description: "As nossas séniores femininas marcaram presença na 2° etapa do Campeonato Nacional de Sevens Feminino, os jogos decorreram no campo do São Miguel, onde contaram com o apoio dos séniores masculinos.",
        images: 1
    },
    {
        id: 27,
        title: "Convívio Carlos Nobre Sub-8/10/12",
        date: "01/05/2024",
        description: "Os nossos escalões de formação sub-8/10/12 participaram no convívio Carlos Nobre.",
        images: 1
    },
    {
        id: 26,
        title: "1° Etapa do Campeonato Nacional F 7's",
        date: "26/04/2024",
        description: "As nossas séniores femininas marcaram presença na 1° etapa do Campeonato Nacional de Sevens Feminino,os jogos decorreram no Estádio Universitário de Lisboa.",
        images: 1
    },
    {
        id: 25,
        title: "Jogo Séniores M vs. Galiza",
        date: "26/04/2024",
        description: "Os nossos séniores masculinos jogaram juntamente com os Dark Horses Rugby contra a Galiza. O jogo decorreu no campo da Agronomia.",
        images: 1
    },
    {
        id: 24,
        title: "Fim de semana de campeões",
        date: "21/04/2024",
        description: "Duas atletas seniores femininas da AUR, Ana Costa e Yara Fonseca, foram campeãs nacionais pelo Sporting da Taça de Portugal Feminina! Os nossos sub-14 participaram num torneio com o Benfica, os jogos decorreram nas Caldas da Rainha, onde integraram 2 equipas e uma delas ficou em 1º lugar.",
        images: 2
    },
    {
        id: 23,
        title: "11º Aniversário AUR",
        date: "14/04/2024",
        description: "A AUR celebrou o seu 11º aniversário com um convívio entre atletas, familiares e amigos. Houve jogos de rugby, um almoço partilhado e um bolo de aniversário.",
        images: 5
    },
    {
        id: 22,
        title: "Rugby Youth Festival 2024",
        date: "07/04/2024",
        description: "A AUR marcou presença no Portugal Rugby Youth Festival 2024 com 4 atletas a fazer parte da organização e com escalões sub-13/15/19 a competir contra equipas nacionais e internacionais, em diversos jogos. Tivémos 5 atletas femininas a jogar em representação da Seleção Regional Sul sub-15.",
        images: 5
    },
    {
        id: 21,
        title: "Ubuntu Fest 2024",
        date: "05/04/2024",
        description: "A AUR foi convidada a colaborar e participar no Ubuntu Fest, um convívio entre várias escolas a nível nacional da academia de Líderes Ubuntu, na Quinta da Ribafria.",
        images: 2
    },
    {
        id: 20,
        title: "Jogo Séniores M vs. GDA",
        date: "24/03/2024",
        description: "Naquele que foi o último jogo desta época em parceria com os Dark Horses Rugby, os nossos séniores masculinos jogaram contra o GDA Rugby.",
        images: 1
    },
    {
        id: 19,
        title: "Estágio Regional Sul Feminino U15",
        date: "24/03/2024",
        description: "Em modo de preparação para o Portugal Rugby Youth Festival 2024, as nossas atletas sub-15 marcaram presença no estágio regional sul.",
        images: 1
    },
    {
        id: 18,
        title: "Caça aos Ovos",
        date: "24/03/2024",
        description: "A AUR organizou uma caça aos ovos para os atletas e familiares como atividade de Páscoa no Parque Urbano da Cavaleira.",
        images: 1
    },
    {
        id: 17,
        title: "Convívio Direito Sub-6/8/10/12",
        date: "23/03/2024",
        description: "Os nossos escalões de formação marcaram presença no 7° Torneio Internacional do Direito.",
        images: 1
    },
    {
        id: 16,
        title: "Jogo Séniores M vs. Dark Horses",
        date: "18/03/2024",
        description: "Os nossos séniores masculinos honraram a camisola do Ubuntu Rugby num jogo amigável contra os Dark Horses Rugby.",
        images: 1
    },
    {
        id: 15,
        title: "Convívio de Apoio à Seleção Masculina",
        date: "03/03/2024",
        description: "Os nossos atletas marcaram presença no apoio às meias finais do Campeonato Europeu Masculino Portugal vs. Espanha. Os escalões sub8/10/12 participaram num torneio na Tapada da Ajuda.",
        images: 3
    },
    {
        id: 14,
        title: "Jogo Séniores M vs. Belas",
        date: "02/03/2024",
        description: "Os nossos séniores masculinos jogaram juntamente com os Dark Horses Rugby contra o Belas Rugby naquele que foi o último jogo do campeonato CN2.",
        images: 1
    },
    {
        id: 13,
        title: "Centro Social Paroquial do Algueirão",
        date: "01/03/2024",
        description: "A AUR esteve presente no Centro Social Paroquial do Algueirão a ajudar na contagem de produtos alimentares.",
        images: 1
    },
    {
        id: 11,
        title: "Convívio de Apoio à Seleção Feminina",
        date: "24/02/2024",
        description: "Os escalões sub8/10/12 participaram num convívio de apoio à Seleção Feminina e a equipa feminina da AUR participou numa jornada de Emergentes. Fez-se um piquenique com todos os presentes.",
        images: 4
    },
    {
        id: 10,
        title: "Jogo Séniores M vs. São Miguel",
        date: "17/02/2024",
        description: "Os nossos séniores masculinos jogaram juntamente com os Dark Horses Rugby contra o São Miguel Rugby.",
        images: 1
    },
    {
        id: 9,
        title: "Torneio 7's Emergentes Feminino",
        date: "17/02/2024",
        description: "As nossas séniores femininas participaram no torneio de sevens emergentes, os jogos decorreram no Campo de Rugby do Direito.",
        images: 1
    },
    {
        id: 8,
        title: "Estágio da Seleção sub14",
        date: "17/02/2024",
        description: "Os nossos atletas, Rodrigo Branco e Luanna Monteiro, marcaram presença no estágio da seleção sub14.",
        images: 1
    },
    {
        id: 7,
        title: "Jogo Séniores F vs. Agrária",
        date: "04/02/2024",
        description: "As nossas séniores femininas estiveram em campo juntamente com o Sporting Rugby a disputar os quartos de final da Taça de Portugal, um grande jogo das nossas leoas.",
        images: 1
    },
    {
        id: 6,
        title: "Torneio Sub-14 na Bairrada",
        date: "04/02/2024",
        description: "Os nossos escalões de formação marcaram presença juntamente com o Benfica Rugby no torneio na Bairrada.",
        images: 1
    },
    {
        id: 5,
        title: "Jogo Séniores M vs. Oeiras",
        date: "03/02/2024",
        description: "Os nossos séniores masculinos jogaram juntamente com os Dark Horses Rugby contra o Oeiras Rugby.",
        images: 1
    },
    {
        id: 4,
        title: "Semana de aulas - Escola Piloto",
        date: "29/01/2024 - 02/02/2024",
        description: "A Academia Ubuntu Rugby esteve a dar aulas de introdução ao Rugby na Escola Básica Piloto, em Mem-Martins, nos horários de Educação Física.",
        images: 1
    },
    {
        id: 3,
        title: "Final do Campeonato Feminino Nacional",
        date: "28/01/2024",
        description: "As nossas seniores femininas estiveram em campo juntamente com o Sporting Rugby a disputar a final do Campeonato Nacional de XV, um grande jogo das nossas leoas.",
        images: 3
    },
    {
        id: 2,
        title: "Jogo Séniores M vs. Sporting",
        date: "28/01/2024",
        description: "Os nossos seniores jogaram juntamente com os Dark Horses Rugby contra o Sporting Rugby.",
        images: 1
    },
    {
        id: 1,
        title: "Convívio Rugby Belenenses Sub-8/10/12",
        date: "27/01/2024",
        description: "Os nossos escalões de formação marcaram presença juntamente com o Benfica Rugby no convívio organizado pelo Belenenses Rugby.",
        images: 3
    }
];

// Export the newsItems array
export { newsItems };