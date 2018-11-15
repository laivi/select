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
                                author:"Prof. Francisco Kelsen"
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
                                author:"Prof. Geugres de Carvalho"
                            },
                            {
                                type:presentation_type.WORKSHOP,
                                title:"Gerenciamento de salas digitais com Edmodo",
                                author:"Prof. Fernando França"
                            },
                            {
                                type:presentation_type.WORKSHOP,
                                title:"Layouts responsivos com Bootstrap",
                                author:"Prof. Sandro Marques"
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
                                author:"Prof. Geugres de Carvalho"
                            },
                            {
                                type:presentation_type.WORKSHOP,
                                title:"Gerenciamento de salas digitais com Edmodo",
                                author:"Prof. Fernando França"
                            },
                            {
                                type:presentation_type.WORKSHOP,
                                title:"Layouts responsivos com Bootstrap",
                                author:"Prof. Sandro Marques"
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
                                author:""
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
                                author:"Prof. Paulo de Oliveira"
                            },
                            {
                                type:presentation_type.WORKSHOP,
                                title:"Resolvendo problemas reais com Aprendizagem de Máquina",
                                author:"Prof. Ewerton Costa"
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
                                author:"Prof. Paulo de Oliveira"
                            },
                            {
                                type:presentation_type.WORKSHOP,
                                title:"Resolvendo problemas reais com Aprendizagem de Máquina",
                                author:"Prof. Ewerton Costa"
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
                                author:"Profº Claudete de Jesus"
                            }
                        ]
    
                    },
                    {
                        moment:"20:00",
                        presentations:[
                            {
                                type:presentation_type.GENERAL,
                                title:"Mesa Redonda",
                                author:""
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
            selected: "seminfo"
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
            }
        }
    })

});