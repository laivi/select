var date = {
    DAY_1 : {
        id: 1, 
        description: "Dia 05/12" 
    },
    DAY_2 : {
        id: 2, 
        description: "Dia 06/12"
    },
    DAY_3 : {
        id: 3, 
        description: "Dia 07/12"
    },
    DAY_4 : {
        id: 4, 
        description: "Dia 08/12"
    }
}

var presentation_type = {
    GENERAL:  "",
    KEYNOTE:  "palestra",
    WORKSHOP: "minicurso"
};

$(function() {

    var seminfo = {
        days: [date.DAY_1, date.DAY_2, date.DAY_3],
        schedule: [
            {
                day:date.DAY_1,
                times:[
                    {
                        moment:"14:00",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Credenciamento",
                                author:""
                            }
                        ]
    
                    },
                    {
                        moment:"18:30",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Cerimonial de Abertura",
                                author:""
                            }
                        ]
    
                    },
                    {
                        moment:"19:00",
                        presentations:[
                            {
                                type:presentation_type.KEYNOTE,
                                title:"Ferramentas de Tecnologia Digital de Informação e Comunicação para suporte à Educação on-line e aberta",
                                author:"Prof. Francisco Kelsen",
                                img:"kelsen.png",
                                description:"A palestra buscará apresentar os aspectos e as ferramentas de Tecnologia Digital de Informação e Comunicação (TDIC) envolvidas para auxiliar aos docentes e aos discentes nos processos de Ensino e de Aprendizagem. Para isso, a palestra focará no uso de cursos abertos on-line e massivos (MOOC’s ).",
                                curriculum:"Doutor em Ciência da Computação (2017) pela Universidade Federal de Pernambuco (UFPE). Mestre em Computação Aplicada (2010), Especialista em Gestão de Projetos (2012) e graduação em Licenciatura em Matemática (2007) pela Universidade Estadual do Ceará (UECE). Especialista em Tutoria em Educação a Distância (2014) pela UCAM, Bacharel em Sistemas de Informação (2014) pela Universidade Estácio de Sá (UNESA) e Técnico em Informática (2012) pelo Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE). Atualmente é professor de Ensino Básico, Técnico e Tecnológico dos cursos de Ensino Médio Integrado (EMI) e subsequente em Técnico de Informática e curso de graduação de Tecnologia em Sistemas para Internet do Instituto Federal de Educação, Ciência e Tecnologia do Sertão Pernambucano (IF Sertão-PE). Atua também como editor chefe do periódico científico Semiárido De Visu e como coordenador do Mestrado Profissional em Educação Profissional e Tecnológica (ProfEPT) no IF Sertão-PE. Tem experiência na área de Ciência da Computação, com ênfase em Redes de Computadores, Sistemas Distribuídos, Engenharia de Software, Software Livre e Tecnologia Educacional, além de atuar nas áreas de Educação a Distância, Educação Matemática e Recursos Educacionais Abertos. É líder do Grupo de Estudos e Pesquisas em Práticas Educacionais Tecnológicas (GEPET), vice-líder do grupo de pesquisa em Ciências Cognitivas e Tecnologia Educacional (CCTE) e integrante do Grupo de Estudos Avançados em Informática (GEASI)."
                            }
                        ]
                    },
                    {
                        moment:"20:00",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Coffee Break",
                                author:""
                            }
                        ]
    
                    }
                ]
            },
            {
                day:date.DAY_2,
                times:[
                    {
                        moment:"07:00",
                        presentations:[
                            {
                                type:presentation_type.WORKSHOP,
                                title:"Planilhas Eletrônicas",
                                author:"Prof. Geugres de Carvalho",
                                img:"geugres.png",
                                description:"Nesse curso vamos abordar desde a parte básica (entendimento da ferramenta, formatações, fórmulas básicas) até os conhecimentos avançados que te permitirão resolver qualquer problema com planilhas, aprendendo fórmulas, tabelas e gráficos. Além disso, vamos montar nossa própria planilha do zero e você será capaz de aplicar seus conhecimentos em software de planilhas em qualquer projeto que queira.",
                                curriculum:"Técnico em Informática pelo IFPI - Campus PAULISTANA, Bacharel em Sistema de Informação pela UFPI, cursando Pós-graduação em Tecnologia da Educação no Instituto Dom Alberto e Licenciatura Plena em Educação Física pela UESPI. Atua em Paulistana-PI como professor na rede privada e estadual de educação e Operador de Sistemas na Secretaria Municipal de Educação - SEME"
                            },
                            {
                                type:presentation_type.WORKSHOP,
                                title:"Gerenciamento de salas digitais com Edmodo",
                                author:"Prof. Fernando França",
                                img:"fernando.png",
                                description: "Com recursos intuitivos e armazenamento ilimitado, crie grupos rapidamente, atribua lições de casa, agende testes, gerencie progressos e mais. Com tudo em uma única plataforma, o Edmodo é desenvolvido para dar ao educador controle total sobre sua sala de aula digital.",
                                curriculum: "Professor do IFPI Campus Paulistana desde 2012, é bacharel em Ciência da Computação pela UERN (Universidade do Estado do Rio Grande do Norte) e possui mestrado em Ciência da Computação pelo programa MCC UERN/UFERSA."
                            },
                            {
                                type:presentation_type.WORKSHOP,
                                title:"Layouts responsivos com Bootstrap",
                                author:"Prof. Sandro Marques",
                                img:"sandro.png",
                                description: "O minicurso em Bootstrap tem como objetivo dar aos alunos a noção de como criar páginas bonitas e responsivas para qualquer site, através de uma das principais linguagens front-end, de maneira simples, inteligente e divertida, utilizando o sistema de grades e muito mais. No curso será abordado de maneira prática a criação de um Web Site para todas as plataformas, mobile, desktop e TV.",
                                curriculum: "Mestre em Ciência da Computação pela Universidade Federal de Pernambuco - UFPE (2017). Bacharel em Ciência da Computação pela Faculdade de Ciências Aplicadas e Sociais de Petrolina - FACAPE (2014) e Técnico em Informática pelo Instituto Federal de Educação, Ciência e Tecnologia do Sertão Pernambucano - IF SERTÃO-PE - campus Petrolina (2009). Atualmente, Coordenador de Gestão e Desenvolvimento de Sistemas da Informação do IF SERTÃO-PE - Reitoria."
                            }
                        ]
                    },
                    {
                        moment:"09:30",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Coffee Break",
                                author:""
                            }
                        ]
    
                    },
                    {
                        moment:"14:00",
                        presentations:[
                            {
                                type:presentation_type.WORKSHOP,
                                title:"Planilhas Eletrônicas",
                                author:"Prof. Geugres de Carvalho",
                                img:"geugres.png",
                                description:"Nesse curso vamos abordar desde a parte básica (entendimento da ferramenta, formatações, fórmulas básicas) até os conhecimentos avançados que te permitirão resolver qualquer problema com planilhas, aprendendo fórmulas, tabelas e gráficos. Além disso, vamos montar nossa própria planilha do zero e você será capaz de aplicar seus conhecimentos em software de planilhas em qualquer projeto que queira.",
                                curriculum:"Técnico em Informática pelo IFPI - Campus PAULISTANA, Bacharel em Sistema de Informação pela UFPI, cursando Pós-graduação em Tecnologia da Educação no Instituto Dom Alberto e Licenciatura Plena em Educação Física pela UESPI. Atua em Paulistana-PI como professor na rede privada e estadual de educação e Operador de Sistemas na Secretaria Municipal de Educação - SEME"
                            },
                            {
                                type:presentation_type.WORKSHOP,
                                title:"Gerenciamento de salas digitais com Edmodo",
                                author:"Prof. Fernando França",
                                img:"fernando.png",
                                description: "Com recursos intuitivos e armazenamento ilimitado, crie grupos rapidamente, atribua lições de casa, agende testes, gerencie progressos e mais. Com tudo em uma única plataforma, o Edmodo é desenvolvido para dar ao educador controle total sobre sua sala de aula digital.",
                                curriculum: "Professor do IFPI Campus Paulistana desde 2012, é bacharel em Ciência da Computação pela UERN (Universidade do Estado do Rio Grande do Norte) e possui mestrado em Ciência da Computação pelo programa MCC UERN/UFERSA."
                            },
                            {
                                type:presentation_type.WORKSHOP,
                                title:"Layouts responsivos com Bootstrap",
                                author:"Prof. Sandro Marques",
                                img:"sandro.png",
                                description: "O minicurso em Bootstrap tem como objetivo dar aos alunos a noção de como criar páginas bonitas e responsivas para qualquer site, através de uma das principais linguagens front-end, de maneira simples, inteligente e divertida, utilizando o sistema de grades e muito mais. No curso será abordado de maneira prática a criação de um Web Site para todas as plataformas, mobile, desktop e TV.",
                                curriculum: "Mestre em Ciência da Computação pela Universidade Federal de Pernambuco - UFPE (2017). Bacharel em Ciência da Computação pela Faculdade de Ciências Aplicadas e Sociais de Petrolina - FACAPE (2014) e Técnico em Informática pelo Instituto Federal de Educação, Ciência e Tecnologia do Sertão Pernambucano - IF SERTÃO-PE - campus Petrolina (2009). Atualmente, Coordenador de Gestão e Desenvolvimento de Sistemas da Informação do IF SERTÃO-PE - Reitoria."
                            }
                        ]
                    },
                    {
                        moment:"17:00",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Coffee Break",
                                author:""
                            }
                        ]
                    },
                    {
                        moment:"18:00",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"SpaceGamer",
                                author:"",
                                img:"spacegamer.jpeg",
                                img_type:"full",
                                url:"http://twixar.me/KNw3"
                            }
                        ]
    
                    }
                ]
            },
            {
                day:date.DAY_3,
                times:[
                    {
                        moment:"07:00",
                        presentations:[
                            {
                                type:presentation_type.WORKSHOP,
                                title:"Introdução a Arduino",
                                author:"Prof. Paulo de Oliveira",
                                img:"paulo.png",
                                description:"Conceito; Em que pode ser usado; Projetos de sucesso com Arduino; Conceitos fundamentais de Arduino; Conhecendo as partes do Arduino (hardware e software); Conhecendo as funções específicas do Arduíno; Relação com a Eletrônica; Desenvolvendo projeto com Arduíno",
                                curriculum:"Mestrando em Ciências da educação, especialista em docência do ensino superior, graduado em física e sistemas de informação."
                            },
                            {
                                type:presentation_type.WORKSHOP,
                                title:"Resolvendo problemas reais com Aprendizagem de Máquina",
                                author:"Prof. Ewerton Costa",
                                img:"ewerton.png",
                                description:"Aprenda os principais conceitos sobre Aprendizado de Máquina e tenha uma experiência prática aplicando técnicas de aprendizagem de máquina em um problema real.",
                                curriculum:"Professor no IFPI - Campus PAULISTANA e programador nas madrugadas."
                            }
                        ]
                    },
                    {
                        moment:"09:30",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Coffee Break",
                                author:""
                            }
                        ]
    
                    },
                    {
                        moment:"14:00",
                        presentations:[
                            {
                                type:presentation_type.WORKSHOP,
                                title:"Introdução a Arduino",
                                author:"Prof. Paulo de Oliveira",
                                img:"paulo.png",
                                description:"Conceito; Em que pode ser usado; Projetos de sucesso com Arduino; Conceitos fundamentais de Arduino; Conhecendo as partes do Arduino (hardware e software); Conhecendo as funções específicas do Arduíno; Relação com a Eletrônica; Desenvolvendo projeto com Arduíno",
                                curriculum:"Mestrando em Ciências da educação, especialista em docência do ensino superior, graduado em física e sistemas de informação."
                            },
                            {
                                type:presentation_type.WORKSHOP,
                                title:"Resolvendo problemas reais com Aprendizagem de Máquina",
                                author:"Prof. Ewerton Costa",
                                img:"ewerton.png",
                                description:"Aprenda os principais conceitos sobre Aprendizado de Máquina e tenha uma experiência prática aplicando técnicas de aprendizagem de máquina em um problema real.",
                                curriculum:"Professor no IFPI - Campus PAULISTANA e programador nas madrugadas."
                            }
                        ]
                    },
                    {
                        moment:"17:00",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Coffee Break",
                                author:""
                            }
                        ]
                    },
                    {
                        moment:"18:30",
                        presentations:[
                            {
                                type:presentation_type.KEYNOTE,
                                title:"Recursos digitais aplicáveis na educação",
                                author:"Profº Claudete de Jesus",
                                img:"claudete.png",
                                description:"Recursos digitais aplicáveis na educação",
                                curriculum:"Possui graduação em Tecnólogo em Processamento de Dados pela Universidade Estadual do Piauí, Especialização em Análise de Sistemas pela Universidade Estadual do Piauí e Especialização em Banco de Dados pelo Instituto Federal de Educação Ciência e Tecnologia do Piauí - IFPI. Mestrado profissional em andamento em Tecnologia e Gestão em Educação a Distância pela Universidade Federal Rural de Pernambuco-UFRPE. Tem experiência na área de Educação, Educação à Distância, Desenvolvimento para WEB, Análise de Sistemas e Banco de Dados. Atualmente é professora IFPI - Campus Teresina Zona Sul e Professora Pesquisadora do Programa E-TEC Brasil"
                            }
                        ]
    
                    },
                    {
                        moment:"20:00",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Papo tech: mesa-redonda sobre aplicação de TI na educação e seus Impactos. ",
                                author:"Prof. Claudete de Jesus, Raqueline Castro e Daniela Cavalcante"
                            }
                        ]
    
                    },
                    {
                        moment:"21:00",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Coffee Break",
                                author:""
                            }
                        ]
    
                    }
                ]
            }
        ]
    }

    var cafe = {
        days: [date.DAY_2],
        schedule: [
            {
                day:date.DAY_2,
                times:[
                    {
                        moment:"08:00",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Bate papo literário. TEMA: Escritoras Negras na literatura brasileira",
                                author:"Profª Iraneide Soares da Silva (UESPI)"
                            }
                        ]
                    },
                    {
                        moment:"10:40",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Intervalo",
                                author:""
                            }
                        ]
    
                    },
                    {
                        moment:"11:00",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Exposição dos alunos do IFPI",
                                author:""
                            }
                        ]
                    },
                    {
                        moment:"14:00",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Bate papo literário. TEMA: Carlos Drummond de Andrade",
                                author:"Profs José Carlos Justino e Bruna Karina Nelson Mesquita"
                            }
                        ]
                    },
                    {
                        moment:"15:35",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Intervalo",
                                author:""
                            }
                        ]
    
                    },
                    {
                        moment:"15:50",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Premiação do I concurso literário (eixo: Carlos Drummond de Andrade)",
                                author:""
                            }
                        ]
                    },
                    {
                        moment:"18:30",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Coletivo de artes do Campus Paulistana",
                                author:""
                            }
                        ]
                    },
                    {
                        moment:"20:10",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Premiação do I concurso literário (eixo: Carlos Drummond de Andrade)",
                                author:""
                            }
                        ]
                    },
                    {
                        moment:"20:30",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Premiação para os vencedores do temas do III Café literário",
                                author:""
                            }
                        ]
                    }
                ]
            }        
        ]
    }

    var jornada = {
        days: [date.DAY_4],
        schedule: [
            {
                day:date.DAY_4,
                times:[
                    {
                        moment:"08:00",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Exposição Cultural de Países de Língua Inglesa, Espanhola e Portuguesa.",
                                author:""
                            }
                        ]
                    }
                ]
            }
        ]
    }

    var app = new Vue({
        el: '#app',
        data: {
            schedule: seminfo,
            selected: "seminfo",
            selected_img: "",
            selected_presentation: ""
        },
        methods: {
            filter: function(filter_by) {
                switch(filter_by) {
                    case "seminfo":
                        this.schedule = seminfo;
                        this.selected = "seminfo";
                        break;
                    
                    case "cafe":
                        this.schedule = cafe;
                        this.selected = "cafe";
                        break;    

                    case "jornada":
                        this.schedule = jornada;
                        this.selected = "jornada";
                        break;                            
                    
                    default:
                        break;
                }
            },
            isActive: function(text) {
                return text == this.selected;
            },
            show_image: function(img) {
                this.selected_img = img;
                $("#myModal").modal('show');
            },
            show_details: function(presentation) {
                this.selected_presentation = presentation;
                if (presentation.img_type && presentation.img_type == "full") {
                    $("#fullModal").modal('show');
                } else {
                    $("#myModal").modal('show');
                }    
            }
        }
    })

});