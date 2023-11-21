//Matriz com a palavra e o tema
var sPerguntas = [["CARAMBOLA",  "FRUTA"],
                  ["JABUTICABA", "FRUTA"],
                  ["JAMBO",      "FRUTA"],
                  ["CUPUAÇU",    "FRUTA"],
                  ["PITOMBA",    "FRUTA"],
                  ["LARANJA",    "FRUTA"],
                  ["MELANCIA",   "FRUTA"],
                  ["JACA",       "FRUTA"],
                  ["COCO",       "FRUTA"],
                  ["ABACAXI",    "FRUTA"],
                  ["ACEROLA",    "FRUTA"],
                  ["ABACATE",    "FRUTA"],
                  ["AMORA",      "FRUTA"],
                  ["BANANA",     "FRUTA"],
                  ["CAQUI",      "FRUTA"],
                  ["CARAMBOLA",  "FRUTA"],
                  ["CEREJA",     "FRUTA"],
                  ["MANGA",      "FRUTA"],
                  ["UVA",        "FRUTA"],
                  ["GOIABA",     "FRUTA"],
                  ["MAÇA",       "FRUTA"],
                  ["MELÃO",      "FRUTA"],
                  ["FIGO",       "FRUTA"],
                  ["FRAMBOESA",  "FRUTA"],
                  ["GROSELHA",   "FRUTA"],
                  ["LIMÃO",      "FRUTA"],
                  ["TOMATE",     "FRUTA"],
                  ["KIWI",       "FRUTA"],
                  ["MAMÃO",      "FRUTA"],
                  ["MEXIRICA",   "FRUTA"],
                  ["MARACUJÁ",   "FRUTA"],
                  ["TANGERINA",  "FRUTA"],
                  ["TAMARINDO",  "FRUTA"],
                  ["MORANGO",    "FRUTA"],
                  ["PERA",       "FRUTA"],
                  ["PÊSSEGO",    "FRUTA"],
                  ["PITANGA",    "FRUTA"],
                  ["PITAYA",     "FRUTA"],
                  ["ROMÃ",       "FRUTA"],
                  ["CACAU",      "FRUTA"],
                  ["AÇAÍ",       "FRUTA"],
                  ["SIRIGUELA",  "FRUTA"],
                  ["T MARA",     "FRUTA"],
                  ["AFEGANISTÃO",    "PAÍS"],
                  ["ÁFRICA DO SUL",  "PAÍS"],
                  ["ALEMANHA",       "PAÍS"],
                  ["ANGOLA",         "PAÍS"],
                  ["ARÁBIA SAUDITA", "PAÍS"],
                  ["ARGENTINA",      "PAÍS"],
                  ["AUSTRÁLIA",      "PAÍS"],
                  ["ÁUSTRIA",        "PAÍS"],
                  ["BAHAMAS",        "PAÍS"],
                  ["BARBADOS",       "PAÍS"],
                  ["BÉLGICA",        "PAÍS"],
                  ["BOLÍVIA",        "PAÍS"],
                  ["BRASIL",         "PAÍS"],
                  ["CABO VERDE",     "PAÍS"],
                  ["CAMARÕES",       "PAÍS"],
                  ["CANADÁ",         "PAÍS"],
                  ["CAZAQUISTÃO",    "PAÍS"],
                  ["CHILE",          "PAÍS"],
                  ["CHINA",          "PAÍS"],
                  ["COLÔMBIA",       "PAÍS"],
                  ["CONGO",          "PAÍS"],
                  ["COREIA DO NORTE","PAÍS"],
                  ["COREIA DO SUL",  "PAÍS"],
                  ["COSTA DO MARFIM","PAÍS"],
                  ["COSTA RICA",     "PAÍS"],
                  ["CROÁCIA",        "PAÍS"],
                  ["CUBA",           "PAÍS"],
                  ["DINAMARCA",      "PAÍS"],
                  ["DOMINICA",       "PAÍS"],
                  ["EGITO",          "PAÍS"],
                  ["EL SALVADOR",    "PAÍS"],
                  ["EQUADOR",        "PAÍS"],
                  ["ESCÓCIA",        "PAÍS"],
                  ["ESLOVÁQUIA",     "PAÍS"],
                  ["ESLOVÊNIA",      "PAÍS"],
                  ["ESPANHA",        "PAÍS"],
                  ["ESTADOS UNIDOS", "PAÍS"],
                  ["ESTÔNIA",        "PAÍS"],
                  ["ETIÓPIA",        "PAÍS"],
                  ["FILIPINAS",      "PAÍS"],
                  ["FINLÂNDIA",      "PAÍS"],
                  ["FRANÇA",         "PAÍS"],
                  ["GABÃO",          "PAÍS"],
                  ["GÂMBIA",         "PAÍS"],
                  ["GANA",           "PAÍS"],
                  ["GEÓRGIA",        "PAÍS"],
                  ["GRANADA",        "PAÍS"],
                  ["GRÉCIA",         "PAÍS"],
                  ["GUATEMALA",      "PAÍS"],
                  ["GUINÉ",          "PAÍS"],
                  ["GUIANA",         "PAÍS"],
                  ["HAITI",          "PAÍS"],
                  ["HOLANDA",        "PAÍS"],
                  ["HONDURAS",       "PAÍS"],
                  ["HUNGRIA",        "PAÍS"],
                  ["ÍNDIA",          "PAÍS"],
                  ["INDONÉSIA",      "PAÍS"],
                  ["INGLATERRA",     "PAÍS"],
                  ["IRÃ",            "PAÍS"],
                  ["IRAQUE",         "PAÍS"],
                  ["IRLANDA",        "PAÍS"],
                  ["ISLÂNDIA",       "PAÍS"],
                  ["ISRAEL",         "PAÍS"],
                  ["ITÁLIA",         "PAÍS"],
                  ["JAMAICA",        "PAÍS"],
                  ["JAPÃO",          "PAÍS"],
                  ["JORDÂNIA",       "PAÍS"],
                  ["LÍBANO",         "PAÍS"],
                  ["LIBÉRIA",        "PAÍS"],
                  ["LÍBIA",          "PAÍS"],
                  ["LUXEMBURGO",     "PAÍS"],
                  ["MADAGASCAR",     "PAÍS"],
                  ["MALÁSIA",        "PAÍS"],
                  ["MALDIVAS",       "PAÍS"],
                  ["MALI",           "PAÍS"],
                  ["MALTA",          "PAÍS"],
                  ["MACAU",          "PAÍS"],
                  ["MARROCOS",       "PAÍS"],
                  ["MÉXICO",         "PAÍS"],
                  ["MOÇAMBIQUE",     "PAÍS"],
                  ["MONTENEGRO",     "PAÍS"],
                  ["MÔNACO",         "PAÍS"],
                  ["MOLDÁVIA",       "PAÍS"],
                  ["MONGÓLIA",       "PAÍS"],
                  ["NIGÉRIA",        "PAÍS"],
                  ["NORUEGA",        "PAÍS"],
                  ["NOVA ZELÂNDIA",  "PAÍS"],
                  ["NEPAL",          "PAÍS"],
                  ["PAÍS DE GALES",  "PAÍS"],
                  ["PALESTINA",      "PAÍS"],
                  ["PANAMÁ",         "PAÍS"],
                  ["PAQUISTÃO",      "PAÍS"],
                  ["PARAGUAI",       "PAÍS"],
                  ["PERU",           "PAÍS"],
                  ["POLÔNIA",        "PAÍS"],
                  ["PORTO RICO",     "PAÍS"],
                  ["PORTUGAL",       "PAÍS"],
                  ["QATAR",          "PAÍS"],
                  ["QUÊNIA",         "PAÍS"],
                  ["REINO UNIDO",    "PAÍS"],
                  ["ROMÊNIA",        "PAÍS"],
                  ["RUANDA",         "PAÍS"],
                  ["RÚSSIA",         "PAÍS"],
                  ["REPÚBLICA TCHECA",  "PAÍS"],
                  ["REPÚBLICA DOMINICA","PAÍS"],
                  ["REPÚBLICA DO CONGO","PAÍS"],
                  ["SENEGAL",           "PAÍS"],
                  ["SÉRVIA",            "PAÍS"],
                  ["SINGAPURA",         "PAÍS"],
                  ["SUÉCIA",            "PAÍS"],
                  ["SUÍÇA",             "PAÍS"],
                  ["SÍRIA",             "PAÍS"],
                  ["SUDÃO",             "PAÍS"],
                  ["SUDÃO DO SUL",      "PAÍS"],
                  ["SERRA LEOA",        "PAÍS"],
                  ["TAILANDIA",         "PAÍS"],
                  ["TAIWAN",            "PAÍS"],
                  ["TUNÍSIA",           "PAÍS"],
                  ["TURQUIA",           "PAÍS"],
                  ["TUVALU",            "PAÍS"],
                  ["UCRÂNIA",           "PAÍS"],
                  ["URUGUAI",           "PAÍS"],
                  ["VATICANO",          "PAÍS"],
                  ["VENEZUELA",         "PAÍS"],
                  ["VIETNÃ",            "PAÍS"],
                  ["ZÂMBIA",            "PAÍS"],
                  ["RIO BRANCO",        "CIDADE"],
                  ["MACEIÓ",            "CIDADE"],
                  ["MACAPÁ",            "CIDADE"],
                  ["MANAUS",            "CIDADE"],
                  ["SALVADOR",          "CIDADE"],
                  ["FORTALEZA",         "CIDADE"],
                  ["BRASÍLIA",          "CIDADE"],
                  ["VITÓRIA",           "CIDADE"],
                  ["GOIÂNIA",           "CIDADE"],
                  ["SÃO LUÍS",          "CIDADE"],
                  ["CUIABÁ",            "CIDADE"],
                  ["CAMPO GRANDE",      "CIDADE"],
                  ["BELO HORIZONTE",    "CIDADE"],
                  ["BELÉM",             "CIDADE"],
                  ["JOÃO PESSOA",       "CIDADE"],
                  ["CURITIBA",          "CIDADE"],
                  ["RECIFE",            "CIDADE"],
                  ["RIO DE JANEIRO",    "CIDADE"],
                  ["NATAL",             "CIDADE"],
                  ["PORTO ALEGRE",      "CIDADE"],
                  ["PORTO VELHO",       "CIDADE"],
                  ["BOA VISTA",         "CIDADE"],
                  ["FLORIANÓPOLIS",     "CIDADE"],
                  ["SÃO PAULO",         "CIDADE"],
                  ["ARACAJU",           "CIDADE"],
                  ["PALMAS",            "CIDADE"],
                  ["GUARULHOS",         "CIDADE"],
                  ["CAMPINAS",          "CIDADE"],
                  ["OSASCO",            "CIDADE"],
                  ["REBEIRÃO PRETO",    "CIDADE"],
                  ["SOROCABA",          "CIDADE"],
                  ["SANTOS",            "CIDADE"],
                  ["MAUÁ",              "CIDADE"],
                  ["CARAPICUÍBA",       "CIDADE"],
                  ["DIADEMA",           "CIDADE"],
                  ["JUNDIAÍ",           "CIDADE"],
                  ["MOGI DAS CRUZES",   "CIDADE"],
                  ["SUZANO",            "CIDADE"],
                  ["POÁ",               "CIDADE"],
                  ["ARUJÁ",             "CIDADE"],
                  ["ITAQUAQUECETUBA",   "CIDADE"],
                  ["SANTA ISABEL",      "CIDADE"],
                  ["BIRITIBA MIRIM",    "CIDADE"],
                  ["SALESÓPOLIS",       "CIDADE"],
                  ["ITAQUERA",          "CIDADE"],
                  ["BARRA FUNDA",       "CIDADE"],
                  ["TATUAPÉ",           "CIDADE"],
                  ["MOOCA",             "CIDADE"],
                  ["LUZ",               "CIDADE"],
                  ["BRÁS",              "CIDADE"],
                  ["LONDRINA",          "CIDADE"],
                  ["FOZ DO IGUAÇU",     "CIDADE"],
                  ["MARINGÁ",           "CIDADE"],
                  ["BALNEÁRIO CAMBORIÚ","CIDADE"],
                  ["DUQUE DE CAXIAS",   "CIDADE"],
                  ["NITERÓI",           "CIDADE"],
                  ["PETRÓPOLIS",        "CIDADE"],
                  ["CABO FRIO",         "CIDADE"],
                  ["ANGRA DOS REIS",    "CIDADE"],
                  ["OURO PRETO",        "CIDADE"],
                  ["PARATY",            "CIDADE"],
                  ["ILHA BELA",         "CIDADE"],
                  ["UBATUBA",           "CIDADE"],
                  ["CARAGUATATUBA",     "CIDADE"],
                  ["ITANHAÉM",          "CIDADE"],
                  ["PERUÍBE",           "CIDADE"],
                  ["GUARUJÁ",           "CIDADE"],
                  ["BERTIOGA",          "CIDADE"],
                  ["LONDRES",           "CIDADE"],
                  ["DUBAI",             "CIDADE"],
                  ["PARIS",             "CIDADE"],
                  ["NOVA YORK",         "CIDADE"],
                  ["ROMA",              "CIDADE"],
                  ["TÓQUIO",            "CIDADE"],
                  ["ISTAMBUL",          "CIDADE"],
                  ["MIAMI",             "CIDADE"],
                  ["BARCELONA",         "CIDADE"],
                  ["LAS VEGAS",         "CIDADE"],
                  ["MILÃO",             "CIDADE"],
                  ["AMSTERDAM",         "CIDADE"],
                  ["LOS ANGELES",       "CIDADE"],
                  ["CANCUN",            "CIDADE"],
                  ["ATENAS",            "CIDADE"],
                  ["VENEZA",            "CIDADE"],
                  ["MADRI",             "CIDADE"],
                  ["ORLANDO",           "CIDADE"],
                  ["PEQUIM",            "CIDADE"],
                  ["TORONTO",           "CIDADE"],
                  ["SYDNEY",            "CIDADE"],
                  ["SÃO FRANCISCO",     "CIDADE"],
                  ["MUNIQUE",           "CIDADE"],
                  ["CAIRO",             "CIDADE"],
                  ["JERUSALÉM",         "CIDADE"],
                  ["BUENOS AIRES",      "CIDADE"],
                  ["WASHINGTON",        "CIDADE"],
                  ["LISBOA",            "CIDADE"],
                  ["BERLIM",            "CIDADE"],
                  ["NAIRÓBI",           "CIDADE"],
                  ["DENVER",            "CIDADE"],
                  ["ESTOCOLMO",         "CIDADE"],
                  ["OSLO",              "CIDADE"],
                  ["MOSCOU",            "CIDADE"],
                  ["FERNANDO DE NORONHA","CIDADE"],
                  ["AMARELO",   "COR"],
                  ["AZUL",      "COR"],
                  ["BEGE",      "COR"],
                  ["BORDÔ",     "COR"],
                  ["BRANCO",    "COR"],
                  ["BRONZE",    "COR"],
                  ["CARAMELO",  "COR"],
                  ["CASTANHO",  "COR"],
                  ["CIANO",     "COR"],
                  ["CINZA",     "COR"],
                  ["CORAL",     "COR"],
                  ["CREME",     "COR"],
                  ["DOURADO",   "COR"],
                  ["FERRUGEM",  "COR"],
                  ["GELO",      "COR"],
                  ["ESMERALDA", "COR"],
                  ["JADE",      "COR"],
                  ["JAMBO",     "COR"],
                  ["LARANJA",   "COR"],
                  ["LILÁS",     "COR"],
                  ["LAVANDA",   "COR"],
                  ["MAGENTA",   "COR"],
                  ["MARFIM",    "COR"],
                  ["MARROM",    "COR"],
                  ["MOSTARDA",  "COR"],
                  ["PRATA",     "COR"],
                  ["PRETO",     "COR"],
                  ["ROSA",      "COR"],
                  ["ROXO",      "COR"],
                  ["SALMÃO",    "COR"],
                  ["TERRACOTA", "COR"],
                  ["TURQUESA",  "COR"],
                  ["VERDE",     "COR"],
                  ["VERMELHO",  "COR"],
                  ["VINHO",     "COR"],
                  ["VIOLETA",   "COR"],
                  ["SALMÃO",    "COR"],
                  ["FUTEBOL",           "ESPORTE"],
                  ["BASQUETE",          "ESPORTE"],
                  ["VOLEI",             "ESPORTE"],
                  ["HANDBALL",          "ESPORTE"],
                  ["QUEIMADA",          "ESPORTE"],
                  ["PIQUE-BANDEIRA",    "ESPORTE"],
                  ["POLO",              "ESPORTE"],
                  ["HOCKEY",            "ESPORTE"],
                  ["BOLICHE",           "ESPORTE"],
                  ["PING-PONG",         "ESPORTE"],
                  ["DARDO",             "ESPORTE"],
                  ["TÊNIS",             "ESPORTE"],
                  ["GOLF",              "ESPORTE"],
                  ["ESQUI",             "ESPORTE"],
                  ["NATAÇÃO",           "ESPORTE"],
                  ["SALTO A DISTÂNCIA", "ESPORTE"],
                  ["ARREMESSO DE PESO", "ESPORTE"],
                  ["ARCO E FLECHA",     "ESPORTE"],
                  ["TIRO ESPORTIVO",    "ESPORTE"],
                  ["ABAJUR",            "OBJETO"],
                  ["AGULHA",            "OBJETO"],
                  ["ALGEMA",            "OBJETO"],
                  ["ALMOFADA",          "OBJETO"],
                  ["AMPULHETA",         "OBJETO"],
                  ["AENL",              "OBJETO"],
                  ["ANTENA",            "OBJETO"],
                  ["ARCO",              "OBJETO"],
                  ["APITO",             "OBJETO"],
                  ["BACIA",             "OBJETO"],
                  ["BAMBOLÊ",           "OBJETO"],
                  ["BANCO",             "OBJETO"],
                  ["BANDEIRA",          "OBJETO"],
                  ["BENGALA",           "OBJETO"],
                  ["BICICLETA",         "OBJETO"],
                  ["BIGORNA",           "OBJETO"],
                  ["BOIA",              "OBJETO"],
                  ["BONECA",            "OBJETO"],
                  ["BORRACHA",          "OBJETO"],
                  ["BOTÃO",             "OBJETO"],
                  ["BRINCO",            "OBJETO"],
                  ["BUMERANGUE",        "OBJETO"],
                  ["CABIDE",            "OBJETO"],
                  ["CADEADO",           "OBJETO"],
                  ["CADEIRA",           "OBJETO"],
                  ["CADERNO",           "OBJETO"],
                  ["CALCULADORA",       "OBJETO"],
                  ["CANECA",            "OBJETO"],
                  ["CANETA",            "OBJETO"],
                  ["CANIVETE",          "OBJETO"],
                  ["CAPACETE",          "OBJETO"],
                  ["CELULAR",           "OBJETO"],
                  ["CHICOTE",           "OBJETO"],
                  ["CHINELO",           "OBJETO"],
                  ["CHUPETA",           "OBJETO"],
                  ["COLCHÃO",           "OBJETO"],
                  ["COLHER",            "OBJETO"],
                  ["COMPUTADOR",        "OBJETO"],
                  ["COPO",              "OBJETO"],
                  ["DADO",              "OBJETO"],
                  ["DARDO",             "OBJETO"],
                  ["DENTADURA",         "OBJETO"],
                  ["DESODORANTE",       "OBJETO"],
                  ["DICIONÁRIO",        "OBJETO"],
                  ["DOMINO",            "OBJETO"],
                  ["EDREDOM",           "OBJETO"],
                  ["ELÁSTICO",          "OBJETO"],
                  ["ENVELOPE",          "OBJETO"],
                  ["ESCADA",            "OBJETO"],
                  ["ESCUDO",            "OBJETO"],
                  ["ESMALTE",           "OBJETO"],
                  ["ESPELHO",           "OBJETO"],
                  ["ESPONJA",           "OBJETO"],
                  ["ESTÁTUA",           "OBJETO"],
                  ["ESTEIRA",           "OBJETO"],
                  ["ESTOJO",            "OBJETO"],
                  ["ETIQUETA",          "OBJETO"],
                  ["ESTINTOR",          "OBJETO"],
                  ["FACA",              "OBJETO"],
                  ["FERRO",             "OBJETO"],
                  ["FICHÁRIO",          "OBJETO"],
                  ["FILTRO",            "OBJETO"],
                  ["FITA",              "OBJETO"],
                  ["FLAUTA",            "OBJETO"],
                  ["FLECHA",            "OBJETO"],
                  ["FOGÃO",             "OBJETO"],
                  ["FOGUETE",           "OBJETO"],
                  ["FOICE",             "OBJETO"],
                  ["FOLHA",             "OBJETO"],
                  ["FRASCO",            "OBJETO"],
                  ["FRIGIDEIRA",        "OBJETO"],
                  ["FRIGOBAR",          "OBJETO"],
                  ["FRITADEIRA",        "OBJETO"],
                  ["FURADEIRA",         "OBJETO"],
                  ["GAIOLA",            "OBJETO"],
                  ["GAITA",             "OBJETO"],
                  ["GANGORRA",          "OBJETO"],
                  ["GARFO",             "OBJETO"],
                  ["GARRAFA",           "OBJETO"],
                  ["GAVETA",            "OBJETO"],
                  ["GIZ DE CERA",       "OBJETO"],
                  ["GRAMPEADOR",        "OBJETO"],
                  ["GUARDA-CHUVA",      "OBJETO"],
                  ["GUARDA-ROUPA",      "OBJETO"],
                  ["GUARDA-SOL",        "OBJETO"],
                  ["GUARDANAPO",        "OBJETO"],
                  ["GUITARRA",          "OBJETO"],
                  ["HASTE",             "OBJETO"],
                  ["HÉLICE",            "OBJETO"],
                  ["HIDRANTE",          "OBJETO"],
                  ["HOLOFOTE",          "OBJETO"],
                  ["IATE",              "OBJETO"],
                  ["IMPRESSORA",        "OBJETO"],
                  ["INALADOR",          "OBJETO"],
                  ["INCENSO",           "OBJETO"],
                  ["INGRESSO",          "OBJETO"],
                  ["INTERFONE",         "OBJETO"],
                  ["INTERFONE",         "OBJETO"],
                  ["ISQUEIRO",          "OBJETO"],
                  ["JALECO",            "OBJETO"],
                  ["JANELA",            "OBJETO"],
                  ["JAQUETA",           "OBJETO"],
                  ["JARRA",             "OBJETO"],
                  ["JOELHEIRA",         "OBJETO"],
                  ["JOGO",              "OBJETO"],
                  ["JOIA",              "OBJETO"],
                  ["JORNAL",            "OBJETO"],
                  ["KETCHUP",           "OBJETO"],
                  ["LAÇO",              "OBJETO"],
                  ["LACRE",             "OBJETO"],
                  ["LÂMINA",            "OBJETO"],
                  ["LANCHEIRA",         "OBJETO"],
                  ["LANTEJOULA",        "OBJETO"],
                  ["LANTERNA",          "OBJETO"],
                  ["LÁPIS",             "OBJETO"],
                  ["LAPISEIRA",         "OBJETO"],
                  ["LENÇO",             "OBJETO"],
                  ["LENÇOL",            "OBJETO"],
                  ["LEQUE",             "OBJETO"],
                  ["LIQUIDIFICADOR",    "OBJETO"],
                  ["LIVRO",             "OBJETO"],
                  ["LIXA",              "OBJETO"],
                  ["LIXEIRA",           "OBJETO"],
                  ["LOUSA",             "OBJETO"],
                  ["LUVA",              "OBJETO"],
                  ["MAÇANETA",          "OBJETO"],
                  ["MACHADO",           "OBJETO"],
                  ["MALA",              "OBJETO"],
                  ["MAMADEIRA",         "OBJETO"],
                  ["MANEQUIM",          "OBJETO"],
                  ["MANGUEIRA",         "OBJETO"],
                  ["MANIVELA",          "OBJETO"],
                  ["MAQUETE",           "OBJETO"],
                  ["MÁQUINA",           "OBJETO"],
                  ["MARRETA",           "OBJETO"],
                  ["MARTELO",           "OBJETO"],
                  ["MÁSCARA",           "OBJETO"],
                  ["MEDALHA",           "OBJETO"],
                  ["MEGAFONE",          "OBJETO"],
                  ["MEIA",              "OBJETO"],
                  ["MICROFONE",         "OBJETO"],
                  ["MICROSCÓPIO",       "OBJETO"],
                  ["MOCHILA",           "OBJETO"],
                  ["MOLA",              "OBJETO"],
                  ["MONITOR",           "OBJETO"],
                  ["MONÓCULO",          "OBJETO"],
                  ["MOTOR",             "OBJETO"],
                  ["MOUSE",             "OBJETO"],
                  ["NAVALHA",           "OBJETO"],
                  ["NAVE",              "OBJETO"],
                  ["NAVIO",             "OBJETO"],
                  ["NOTEBOOK",          "OBJETO"],
                  ["ÓCULOS",            "OBJETO"],
                  ["OLHO MÁGICO",       "OBJETO"],
                  ["ORELHÃO",           "OBJETO"],
                  ["OURO",              "OBJETO"],
                  ["OVINI",             "OBJETO"],
                  ["PALITEIRO",         "OBJETO"],
                  ["PANELA",            "OBJETO"],
                  ["PARAFUSO",          "OBJETO"],
                  ["PARAQUEDAS",        "OBJETO"],
                  ["PERUCA",            "OBJETO"],
                  ["PETECA",            "OBJETO"],
                  ["PIANO",             "OBJETO"],
                  ["PICARETA",          "OBJETO"],
                  ["PIERCING",          "OBJETO"],
                  ["PINCEL",            "OBJETO"],
                  ["PINGENTE",          "OBJETO"],
                  ["PISTOLA",           "OBJETO"],
                  ["PLACA",             "OBJETO"],
                  ["PONTEIRO",          "OBJETO"],
                  ["PRANCHA",           "OBJETO"],
                  ["PRATELEIRA",        "OBJETO"],
                  ["PRATO",             "OBJETO"],
                  ["PULSEIRA",          "OBJETO"],
                  ["QUADRICICLO",       "OBJETO"],
                  ["QUADRO",            "OBJETO"],
                  ["QUEBRA-CABEÇA",     "OBJETO"],
                  ["RADAR",             "OBJETO"],
                  ["RÁDIO",             "OBJETO"],
                  ["RAMPA",             "OBJETO"],
                  ["RAQUETE",           "OBJETO"],
                  ["RATOEIRA",          "OBJETO"],
                  ["REPELENTE",         "OBJETO"],
                  ["RETROVISOR",        "OBJETO"],
                  ["REVISTA",           "OBJETO"],
                  ["ROLAMENTO",         "OBJETO"],
                  ["ROLETA",            "OBJETO"],
                  ["ROLHA",             "OBJETO"],
                  ["SABÃO",             "OBJETO"],
                  ["SABONETE",          "OBJETO"],
                  ["SABRE",             "OBJETO"],
                  ["SACOLA",            "OBJETO"],
                  ["SALEIRO",           "OBJETO"],
                  ["SANDÁLIA",          "OBJETO"],
                  ["SANFONA",           "OBJETO"],
                  ["SAPATEIRA",         "OBJETO"],
                  ["SAPATO",            "OBJETO"],
                  ["SCANNER",           "OBJETO"],
                  ["SECADOR",           "OBJETO"],
                  ["SERINGA",           "OBJETO"],
                  ["SERROTE",           "OBJETO"],
                  ["SHORT",             "OBJETO"],
                  ["SIRENE",            "OBJETO"],
                  ["SKATE",             "OBJETO"],
                  ["SOFÁ",              "OBJETO"],
                  ["SOMBRINHA",         "OBJETO"],
                  ["SPRAY",             "OBJETO"],
                  ["SUNGA",             "OBJETO"],
                  ["TÁBUA",             "OBJETO"],
                  ["TABULEIRO",         "OBJETO"],
                  ["TAMBOR",            "OBJETO"],
                  ["TAMPA",             "OBJETO"],
                  ["TAPETE",            "OBJETO"],
                  ["TECLADO",           "OBJETO"],
                  ["TELEFONE",          "OBJETO"],
                  ["TELESCÓPIO",        "OBJETO"],
                  ["TELEVISÃO",         "OBJETO"],
                  ["TELHA",             "OBJETO"],
                  ["TÊNIS",             "OBJETO"],
                  ["TERMOMETRO",        "OBJETO"],
                  ["TESOURA",           "OBJETO"],
                  ["TIJELA",            "OBJETO"],
                  ["TIJOLO",            "OBJETO"],
                  ["TORNEIRA",          "OBJETO"],
                  ["TRAMPOLIM",         "OBJETO"],
                  ["TRAVESSEIRO",       "OBJETO"],
                  ["TROMPETE",          "OBJETO"],
                  ["TURBANTE",          "OBJETO"],
                  ["UMIDIFICADOR",      "OBJETO"],
                  ["UNHA POSTIÇA",      "OBJETO"],
                  ["UNIFORME",          "OBJETO"],
                  ["URNA",              "OBJETO"],
                  ["URSO DE PELÚCIA",   "OBJETO"],
                  ["VAPORIZADOR",       "OBJETO"],
                  ["VARETA",            "OBJETO"],
                  ["VARINHA",           "OBJETO"],
                  ["VELA",              "OBJETO"],
                  ["VELEIRO",           "OBJETO"],
                  ["VELOCÍMETRO",       "OBJETO"],
                  ["VENTILADOR",        "OBJETO"],
                  ["VENTOINHA",         "OBJETO"],
                  ["VESTIDO",           "OBJETO"],
                  ["VÍDEO",             "OBJETO"],
                  ["VIDRO",             "OBJETO"],
                  ["VIOLA",             "OBJETO"],
                  ["VIOLÃO",            "OBJETO"],
                  ["VIOLINO",           "OBJETO"],
                  ["VITROLA",           "OBJETO"],
                  ["VOLANTE",           "OBJETO"],
                  ["VUVUZELA",          "OBJETO"],
                  ["WALKMAN",           "OBJETO"],
                  ["WEB CAM",           "OBJETO"],
                  ["XADREZ",            "OBJETO"],
                  ["XAMPU",             "OBJETO"],
                  ["XAROPE",            "OBJETO"],
                  ["XÍCARA",            "OBJETO"],
                  ["ZÍPER",             "OBJETO"],
                  ["ABÓBORA",     "LEGUMES"],
                  ["ABÓBOBRINHA", "LEGUMES"],
                  ["AZEITONA",    "LEGUMES"],
                  ["BATATA",      "LEGUMES"],
                  ["BATATA-DOCE", "LEGUMES"],
                  ["BERINJELA",   "LEGUMES"],
                  ["BETERRABA",   "LEGUMES"],
                  ["CEBOLA",      "LEGUMES"],
                  ["CENPOURA",    "LEGUMES"],
                  ["CHUCHU",      "LEGUMES"],
                  ["GENGIBRE",    "LEGUMES"],
                  ["JILÓ",        "LEGUMES"],
                  ["MADIOCA",     "LEGUMES"],
                  ["MILHO",       "LEGUMES"],
                  ["NABO",        "LEGUMES"],
                  ["PALMITO",     "LEGUMES"],
                  ["PEPINO",      "LEGUMES"],
                  ["PIMENTA",     "LEGUMES"],
                  ["PIMENTÃO",    "LEGUMES"],
                  ["QUIABO",      "LEGUMES"],
                  ["RABANETE",    "LEGUMES"],
                  ["VAGEM",       "LEGUMES"],
                  ["ACELGA",       "VERDURA"],
                  ["AGRIÃO",       "VERDURA"],
                  ["ALECRIM",      "VERDURA"],
                  ["ALFACE",       "VERDURA"],
                  ["BRÓCOLIS",     "VERDURA"],
                  ["CEBOLINHA",    "VERDURA"],
                  ["COUVE",        "VERDURA"],
                  ["COUVE-FLOR",   "VERDURA"],
                  ["ERVA-DOCE",    "VERDURA"],
                  ["ESCAROLA",     "VERDURA"],
                  ["ESPINAFRE",    "VERDURA"],
                  ["HORTELÃ",      "VERDURA"],
                  ["MOSTARDA",     "VERDURA"],
                  ["REPOLHO",      "VERDURA"],
                  ["REPOLHO ROXO", "VERDURA"],
                  ["SALSA",        "VERDURA"],
                  ["MACARRONADA",     "COMIDA"],
                  ["STROGONOFF",      "COMIDA"],
                  ["FEIJOADA",        "COMIDA"],
                  ["RISOTO",          "COMIDA"],
                  ["OMELETE",         "COMIDA"],
                  ["OVO COZIDO",      "COMIDA"],
                  ["HAMBURGUER",      "COMIDA"],
                  ["PIZZA",           "COMIDA"],
                  ["SUSHI",           "COMIDA"],
                  ["TEMAKI",          "COMIDA"],
                  ["HOT DOG",         "COMIDA"],
                  ["CACHORRO QUENTE", "COMIDA"],
                  ["CHURRASCO",       "COMIDA"],
                  ["PASTEL",          "COMIDA"],
                  ["TAPIOCA",         "COMIDA"],
                  ["PANQUECA",        "COMIDA"],
                  ["SANDUICHE",       "COMIDA"],
                  ["BATATA FRITA",    "COMIDA"],
                  ["NUGGETS",         "COMIDA"],
                  ["BATATA RECHEADA", "COMIDA"],
                  ["YAKISSOBA",       "COMIDA"],
                  ["PIPOCA",          "COMIDA"],
                  ["LASANHA",         "COMIDA"],
                  ["RONDELLI",        "COMIDA"],
                  ["CHEEZECAKE",          "SOBREMESA"],
                  ["SORVETE",             "SOBREMESA"],
                  ["GELATINA",            "SOBREMESA"],
                  ["PUDIM",               "SOBREMESA"],
                  ["PICOLÉ",              "SOBREMESA"],
                  ["AÇAÍ",                "SOBREMESA"],
                  ["BRIGADEIRO",          "SOBREMESA"],
                  ["BOLO",                "SOBREMESA"],
                  ["BEIJINHO",            "SOBREMESA"],
                  ["BOM-BOM",             "SOBREMESA"],
                  ["CHOCOLATE",           "SOBREMESA"],
                  ["CANJICA",             "SOBREMESA"],
                  ["ARROZ DOCE",          "SOBREMESA"],
                  ["TORTA DE LIMÃO",      "SOBREMESA"],
                  ["TORTA DE MORANGO",    "SOBREMESA"],
                  ["MOUSSE DE LIMÃO",     "SOBREMESA"],
                  ["MOUSSE DE MARACUJÁ",  "SOBREMESA"],
                  ["MOUSSE DE MORANGO",   "SOBREMESA"],
                  ["MOUSSE DE CHOCOLATE", "SOBREMESA"],
                  ["PAVÊ DE CHOCOLATE",   "SOBREMESA"],
                  ["PAVÊ",                "SOBREMESA"],
                  ["FORTNITE",              "JOGO"],
                  ["VALORANT",              "JOGO"],
                  ["ROCKET LEAGUE",         "JOGO"],
                  ["GRAND THEFT AUTO",      "JOGO"],
                  ["MORTAL KOMBAT",         "JOGO"],
                  ["AMONG US",              "JOGO"],
                  ["FREE FIRE",             "JOGO"],
                  ["DETROIT",               "JOGO"],
                  ["ANGRY BIRDS",           "JOGO"],
                  ["BRAWL STARS",           "JOGO"],
                  ["FIFA",                  "JOGO"],
                  ["E FOOTBALL",            "JOGO"],
                  ["FARLIGHT",              "JOGO"],
                  ["JUST DANCE",            "JOGO"],
                  ["FORZA HORIZON",         "JOGO"],
                  ["LEAGUE OF LEGENDS",     "JOGO"],
                  ["LOL WILD RIFT",         "JOGO"],
                  ["ROBLOX",                "JOGO"],
                  ["MINECRAFT",             "JOGO"],
                  ["GENSHIN IMPACT",        "JOGO"],
                  ["HONKAI IMPACT",         "JOGO"],
                  ["OVERCOOKED",            "JOGO"],
                  ["OVERWATCH",             "JOGO"],
                  ["RAIBOW SIX",            "JOGO"],
                  ["STARFIELD",             "JOGO"],
                  ["HALO",                  "JOGO"],
                  ["ASSASSINS CREED",       "JOGO"],
                  ["CELESTE",               "JOGO"],
                  ["THE SIMS",              "JOGO"],
                  ["GEARS OF WARS",         "JOGO"],
                  ["GOD OF WARS",           "JOGO"],
                  ["STARDEW VALLEY",        "JOGO"],
                  ["POPPY PLAY TIME",       "JOGO"],
                  ["FIVE NIGHTS AT FREDDY", "JOGO"],
                  ["STREET FIGHTER",        "JOGO"],
                  ["FORZA MOTORSPORT",      "JOGO"],
                  ["PAC-MAN",               "JOGO"],
                  ["SUPER MARIO BROS",      "JOGO"],
                  ["DONKEY KONG",           "JOGO"],
                  ["FLAPPY BIRD",           "JOGO"],
                  ["SONIC THE HEDGEHOG",    "JOGO"]
                ]

//Para saber o resultado após derrota
var sorteado = "";
//Matriz para fazer o shuffle
var iSorteados = [];
//Conta a quantidade de jogadas feitas para buscar no vetor de sorteados
var iJogada=0;
//Armazena a palavra da vez
var sPalavraSorteada;
//Conta as letras certas
var iAcertos=0;
//Conta as letras erradas
var iErro=0;
//Guarda a letra clicada para poder desabilitá-la
var cLetraClicada="";
//Vetor com as letras do teclado para facilitar a busca do id
var sLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-']
//Variáveis que contam os acertos e erros
var iCertas = 0, iErradas = 0;

//Função para criar os espaços das letras
function criaLetras(sPalavra){
    //Busca o formulário
    var formula = document.getElementById("tenta");
    var j = 0;
    sorteado = sPalavra

    //for do tamanho da palavra
    for(var i = 0; i < sPalavra.length; i++){
        //Se for diferente de espaço (32)
        if(sPalavra[i].charCodeAt(0)!=32){
            //Cria um input
            var letra = document.createElement("input");
            //Define os atributos para o INPUT

            //Tipo
            letra.setAttribute("type","text");
            //Name
            letra.setAttribute("name","tenta"+j);
            //id
            letra.setAttribute("id","tenta"+j);
            //Tamanho máximo
            letra.setAttribute("maxlength",1);
            //Tamanho de exibição
            letra.setAttribute("size",1);
            //Desabilita a edição
            letra.setAttribute("disabled",true);
            //Adiciona o INPUT no formulário
            formula.appendChild(letra);
            j++;
        }else{
            //Quando for espaço, ele separa 20px a esquerda
            //e 1px a direita do input anterior
            document.getElementById("tenta"+(j-1)).style.margin = "0px 20px 0px 1px"
        }
    }
    //Remove todos os espaços e acentos
    sPalavraSorteada=limpa(sPalavra);
    //Exibe o tema e a quantidade de letras
    document.getElementById("tema").innerHTML = sPerguntas[iSorteados[iJogada]][1]+
    " - " + sPalavraSorteada.length + " letras";
}

//Função que confere a letra clicada
function sorteia() {
    //Insere os números dentro do vetor conforme a quantidade de itens da matriz
    for (var m = 0; m < sPerguntas.length; m++) {
        iSorteados.push(m);
    }
    //Faz a mistura

    iSorteados = shuffleArray(iSorteados);
    //Chama a função que separa as letras das palavras
    criaLetras(sPerguntas[iSorteados[iJogada]][0]);
}

//Function que confere a letra clicada
function Confere(cLetra){
    //Atribui a letra a uma variável global
    cLetraClicada = cLetra;
    //Cria a variável que definirá se a letra foi encontrada na palavra
    var lAchou = false;
    //Percorre as letras da palavra sorteada
    for(var i = 0; i < sPalavraSorteada.length; i++){
        //Se a letra clicada existir na palavra
        if(cLetra==sPalavraSorteada.charAt(i)){
            //Insere a exibição da letra
            document.getElementById("tenta"+i).value=cLetra;
            //Conta acertos
            iAcertos++
            //Exibe Acertos
            document.getElementById("acerto").innerHTML = "ACERTOS: " + iAcertos;
            //Indica que achou a letra na palavra
            lAchou = true;
        }
    }

    //Se não achou a letra
    if(lAchou == false){
        //Conta o erro
        iErro++;
        //Insere a imagem conforme a quantidade de erro
        document.getElementById("imagem").src="imagens/jogoDaForca/forca"+(iErro+1)+".png"
        //Deixa a letra com a cor errada
        document.getElementById(cLetraClicada).style.background = "#b53535"
        document.getElementById(cLetraClicada).style.color = "white"
    }
}

//Função que verifica se o jogo acabou
function acabou(){
    //Cria a variável que indicará se o jogo acabou
    var lAcabou = false;
    //Se a quantidade de acertos for igual ao tamanho da palavra
    if(iAcertos == sPalavraSorteada.length){
        //O jogo acabou
        lAcabou = true;
        //Exibe a Mensagem
        Vitoria();
        iCertas++;
    }else if(iErro == 7){
        //O jogo acabou
        lAcabou=true;
        //Exibe a mensagem
        Derrota();
        iErradas++;
    }
    //Desabilita a letra clicada
    document.getElementById(cLetraClicada).disabled = true;
    //Se o jogo acabou
    if(lAcabou){
        sLetras2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-'];

        //Remove todos os INPUTS
        for(var i = 0; i < sPalavraSorteada.length; i++){
            document.getElementById("tenta"+i).remove();
        }
        //Incrementa Jogadas para ir para próxima plavara
        iJogada++
        //Exibe quantidade de palavras jogadas CERTAS e Erradas
        document.getElementById("palcerta").innerHTML= "PALAVRAS CERTAS: "+iCertas+" <br>PALAVRAS ERRADAS: "+iErradas
        //Chama a função que criará novo jogo
        criaLetras(sPerguntas[iSorteados[iJogada]][0]);
        //Inicializa variáveis
        iAcertos = 0;
        iErro = 0;
        document.getElementById("acerto").innerHTML = "ACERTOS: " + iAcertos;
        //Volta imagem da forca
        document.getElementById("imagem").src = "imagens/jogoDaForca/forca1.png";
        //Habilita todas as letras
        for(var i = 0; i < sLetras.length; i++){
            document.getElementById(sLetras[i]).disabled = false;
            //Arruma as letras erradas
            document.getElementById(sLetras[i]).style.background = ""
            document.getElementById(sLetras[i]).style.color = "#014412"
        }
    }
}

//Função que mistura os valores do Array
function shuffleArray(d) {
    for (var c = d.length - 1; c > 0; c--) {
        var b = Math.floor(Math.random() * (c + 1));
        var a = d[c];
        d[c] = d[b];
        d[b] = a;
    }
    return d;
}

//Função para tirar espaços e acentos
function limpa(sItem){
    var sResultado=sItem;
    //Retira todos os espaços
    sResultado = replaceAll(sResultado," ", "");
    //Retira todos os acéntos e cedilhas
    //o método normalize do JavaScript, serve para converter uma string
    //em seu formato Unicode normalizado. Neste caso utilizamos o parâmetro
    //NFD que é capaz de separar os acentos das letras e retornar seus códigos Unicode.
    //Em seguida o método replace substitui todas as ocorrências de 
    //caracteres diacríticos, combinando-os na sequência Unicode \u0300 - \u036F.
    sResultado = sResultado.normalize('NFD').replace(/[\u0300-\u035f]/g, "");
    return sResultado
}

//Função para substituir todas as ocorrências
function replaceAll(str, de, para){
    //Procura a ocorência
    var pos = str.indexOf(de);
    //Se achou
    while(pos > -1){
        //substitui
        str = str.replace(de, para);
        //e procura novamente a ocorrência
        pos = str.indexOf(de);
    }

    //retorna a string sem acentos e espaços
    return(str);
}

function shake(e, oncomplete, distance, time){
    var time = 500;
    var distance = 5;

    var start = (new Date()).getTime();
    animate();

    function animate(){
        var now = (new Date()).getTime();
        //Get current time
        var elapsed = now - start
        //How long since we started
        var fraction = elapsed / time;
        //What fraction of total time?
        if(fraction < 1){
            var x = distance * Math.sin(fraction * 4 * Math.PI);
            e.style.left = x + "px";
            //We're aiming for a smooth 40 frames/second animation.
            setTimeout(animate, Math.min(25, time - elapsed));
        }else{
            //Otherwise, the animation is complete
            if(oncomplete) oncomplete(e);
            //Invoke completion callback
        }
    }
}

function shakeme(event1){
    shake(event1.target);
}

function Vitoria(){
    Swal.fire({
        title: "🏆PARABÉNS, VOCÊ CONSEGUIU!🏆",
        text: "A PALAVRA ESCOLHIDA ERA “" + sorteado + "”",
        imageUrl: "./imagens/jogoDaForca/mario.gif",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image"
    });
}
function Derrota(){
    Swal.fire({
        title: "😔QUE PENA! TENTE NOVAMENTE😔",
        text: "A PALAVRA ESCOLHIDA ERA “" + sorteado + "”",
        icon: "error"
      });
}

sLetras2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-'];
//Funções para usar teclado no jogo
function keyPressed(evt){
    evt = evt || window.event;
    var key = evt.key
    return key
}
document.onkeypress = function(evt) {
    var tecla = keyPressed(evt);
    key = tecla.toUpperCase()

    for(i = 0; i < sLetras.length -1; i++){
        if(key == sLetras2[i]){
            Confere(tecla.toUpperCase())
            acabou();
            sLetras2[i] = " "
        }
    }
};