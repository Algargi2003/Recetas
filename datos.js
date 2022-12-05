//tipos: dulce, japones, chino, shushi, etc...

let listaRecetas = [
    {
        "id": 1,
        "nombreBuscar": "galletas",
        "nombre": "Galletas",
        "descripcion": "Buenas",
        "tipo": "dulce",
        "tiempoPreparacion": 60,
        "tiempoCocina": 20,
        "personas": 4,
        "ingredientes": [
            {
                "cantidad": "250",
                "medida":"gr",
                "nombre": "Mantequilla temp. ambiente"
            },
            {
                "cantidad": "250",
                "medida":"gr",
                "nombre": "Azúcar"
            },
            {
                "cantidad": "1",
                "medida":"M",
                "nombre": "Huevo"
            },
            {
                "cantidad": "650",
                "medida":"gr",
                "nombre": "Harina"
            },
            {
                "cantidad": "1",
                "medida":"cdta",
                "nombre": "Aroma de vainilla"
            },
            {
                "cantidad": "1",
                "medida":"chorrito",
                "nombre": "Leche"
            },
            {
                "cantidad": "10",
                "medida":"gr",
                "nombre": "Canela"
            }
        ],
        "instrucciones": [
            {
                "id": 1,
                "info": "En un bol batimos la mantequilla con el azúcar"
            },
            {
                "id": 2,
                "info": "Añadimos el aroma de vainilla, la canela y el huevo"
            },
            {
                "id": 3,
                "info": "Incorporamos la harina cucharada a cucharada, y si se desmiga echamos un chorrito de leche"
            },
            {
                "id": 4,
                "info": "Dejamos reposar la masa estirada en la nevera 3 horas"
            },
            {
                "id": 5,
                "info": "Hacemos las formitas y hornear a 180º"
            }
        ]
    },
    {
        "id": 2,
        "nombreBuscar": "tortitas",
        "nombre": "Tortitas",
        "descripcion": "Buena",
        "tipo": "dulce",
        "tiempoPreparacion": 20,
        "tiempoCocina": 10,
        "personas": 4,
        "ingredientes": [
            {
                "cantidad": "200",
                "medida":"gr",
                "nombre": "Harina"
            },
            {
                "cantidad": "3",
                "medida":"cdas.",
                "nombre": "Azúcar"
            },
            {
                "cantidad": "4",
                "medida":"M",
                "nombre": "Huevo"
            },
            {
                "cantidad": "250",
                "medida":"ml",
                "nombre": "Leche"
            },
            {
                "cantidad": "30",
                "medida":"gr",
                "nombre": "Mantequilla"
            },
            {
                "cantidad": "1",
                "medida":"pizca",
                "nombre": "Sal"
            },
            {
                "cantidad": "30",
                "medida":"gr",
                "nombre": "Mantequilla engrasar"
            }
        ],
        "instrucciones": [
            {
                "id": 1,
                "info": "Ponemos a calentar una sartén grande y antiadherente a fuego medio."
            },
            {
                "id": 2,
                "info": "Separamos las yemas y las claras de los huevos."
            },
            {
                "id": 3,
                "info": "En un bol grande tamizamos la harina, la sal y el azúcar. Hacemos un hueco en el centro y echamos las yemas, la mantequilla o margarina derretida junto con la leche."
            },
            {
                "id": 4,
                "info": "Mezclamos con unas varillas, poco a poco, hasta conseguir una masa lisa y densa."
            },
            {
                "id": 5,
                "info": "Batimos las claras a punto de nieve y se lo incorporamos a la preparación anterior."
            },
            {
                "id": 6,
                "info": "Cuando la sartén este caliente, pero no en exceso, la engrasamos con un pincel y un poco de margarina."
            },
            {
                "id": 7,
                "info": "Con una cuchara echamos la masa para hacer las tortitas. Dejamos de 1 a 2 minutos hasta que la masa esté dorada, volteamos con una espátula y dejamos que se dore otro minuto."
            }
        ]
    },
    {
        "id": 3,
        "nombreBuscar": "tartaDeQuesoFria",
        "nombre": "Tarta de queso",
        "descripcion": "Buena",
        "tipo": "tartas sin horno",
        "tiempoPreparacion": 30,
        "tiempoCocina": 360,
        "personas": 4,
        "ingredientes": [
            {
                "cantidad": "300",
                "medida":"gr",
                "nombre": "Queso de untar"
            },
            {
                "cantidad": "400",
                "medida":"ml",
                "nombre": "Nata líquida para montar"
            },
            {
                "cantidad": "24",
                "medida":"gr",
                "nombre": "Cuajada (2 sobres)"
            },
            {
                "cantidad": "1",
                "medida":"paquete",
                "nombre": "Galletas maria"
            },
            {
                "cantidad": "1",
                "medida":"vaso",
                "nombre": "Azúcar (200 gr?)"
            },
            {
                "cantidad": "1",
                "medida":"vaso",
                "nombre": "Leche"
            }
        ],
        "instrucciones": [
            {
                "id": 1,
                "info": "Preparamos un molde con las galletas trituradas mezcladas con mantequilla o en su defecto con las soletillas (mojadas en un poco de leche)"
            },
            {
                "id": 2,
                "info": "Batimos en un bol el queso, la nata, el azúcar y la leche (reservando un poco para disolver la cuajada)"
            },
            {
                "id": 3,
                "info": "Una vez esté bien batido, lo pondremos al fuego dándole vueltas durante 2 ó 3 minutos."
            },
            {
                "id": 4,
                "info": "Cuando empiece a hervir añadimos la cuajada, anteriormente disuelta en un poco de leche. Continuamos dando unas vueltas durante un minuto más o menos. Y lo vertemos en el molde donde tenemos preparadas las galletas."
            },
            {
                "id": 5,
                "info": "Lo dejamos enfriar y la ponemos en la nevera tapada con papel film durante un mínimo de 6 horas."
            },
            {
                "id": 6,
                "info": "La sacamos y podemos decorarla por encima con mermelada al gusto."
            }
        ]
    }/*,
    {
        "id": 4,
        "nombreBuscar": "helicesConVinagreta",
        "nombre": "Hélices con Vinagreta",
        "descripcion": "",
        "tipo": "",
        "tiempoPreparacion": 20,
        "tiempoCocina": 10,
        "personas": 4,
        "ingredientes": [
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            }
        ],
        "instrucciones": [
            {
                "id": 1,
                "info": ""
            },
            {
                "id": 2,
                "info": ""
            },
            {
                "id": 3,
                "info": ""
            },
            {
                "id": 4,
                "info": ""
            },
            {
                "id": 5,
                "info": ""
            }

            
        ]
    },
    {
        "id": 4,
        "nombreBuscar": "",
        "nombre": "",
        "descripcion": "",
        "tipo": "",
        "tiempoPreparacion": 20,
        "tiempoCocina": 10,
        "personas": 4,
        "ingredientes": [
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            }
        ],
        "instrucciones": [
            {
                "id": 1,
                "info": ""
            },
            {
                "id": 2,
                "info": ""
            },
            {
                "id": 3,
                "info": ""
            },
            {
                "id": 4,
                "info": ""
            },
            {
                "id": 5,
                "info": ""
            }

            
        ]
    },
    {
        "id": 4,
        "nombreBuscar": "",
        "nombre": "",
        "descripcion": "",
        "tipo": "",
        "tiempoPreparacion": 20,
        "tiempoCocina": 10,
        "personas": 4,
        "ingredientes": [
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            }
        ],
        "instrucciones": [
            {
                "id": 1,
                "info": ""
            },
            {
                "id": 2,
                "info": ""
            },
            {
                "id": 3,
                "info": ""
            },
            {
                "id": 4,
                "info": ""
            },
            {
                "id": 5,
                "info": ""
            }

            
        ]
    },
    {
        "id": 4,
        "nombreBuscar": "",
        "nombre": "",
        "descripcion": "",
        "tipo": "",
        "tiempoPreparacion": 20,
        "tiempoCocina": 10,
        "personas": 4,
        "ingredientes": [
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            }
        ],
        "instrucciones": [
            {
                "id": 1,
                "info": ""
            },
            {
                "id": 2,
                "info": ""
            },
            {
                "id": 3,
                "info": ""
            },
            {
                "id": 4,
                "info": ""
            },
            {
                "id": 5,
                "info": ""
            }

            
        ]
    },
    {
        "id": 4,
        "nombreBuscar": "",
        "nombre": "",
        "descripcion": "",
        "tipo": "",
        "tiempoPreparacion": 20,
        "tiempoCocina": 10,
        "personas": 4,
        "ingredientes": [
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            }
        ],
        "instrucciones": [
            {
                "id": 1,
                "info": ""
            },
            {
                "id": 2,
                "info": ""
            },
            {
                "id": 3,
                "info": ""
            },
            {
                "id": 4,
                "info": ""
            },
            {
                "id": 5,
                "info": ""
            }

            
        ]
    },
    {
        "id": 4,
        "nombreBuscar": "",
        "nombre": "",
        "descripcion": "",
        "tipo": "",
        "tiempoPreparacion": 20,
        "tiempoCocina": 10,
        "personas": 4,
        "ingredientes": [
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            }
        ],
        "instrucciones": [
            {
                "id": 1,
                "info": ""
            },
            {
                "id": 2,
                "info": ""
            },
            {
                "id": 3,
                "info": ""
            },
            {
                "id": 4,
                "info": ""
            },
            {
                "id": 5,
                "info": ""
            }

            
        ]
    },
    {
        "id": 4,
        "nombreBuscar": "",
        "nombre": "",
        "descripcion": "",
        "tipo": "",
        "tiempoPreparacion": 20,
        "tiempoCocina": 10,
        "personas": 4,
        "ingredientes": [
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            }
        ],
        "instrucciones": [
            {
                "id": 1,
                "info": ""
            },
            {
                "id": 2,
                "info": ""
            },
            {
                "id": 3,
                "info": ""
            },
            {
                "id": 4,
                "info": ""
            },
            {
                "id": 5,
                "info": ""
            }

            
        ]
    },
    {
        "id": 4,
        "nombreBuscar": "",
        "nombre": "",
        "descripcion": "",
        "tipo": "",
        "tiempoPreparacion": 20,
        "tiempoCocina": 10,
        "personas": 4,
        "ingredientes": [
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            },
            {
                "cantidad": "",
                "medida":"",
                "nombre": ""
            }
        ],
        "instrucciones": [
            {
                "id": 1,
                "info": ""
            },
            {
                "id": 2,
                "info": ""
            },
            {
                "id": 3,
                "info": ""
            },
            {
                "id": 4,
                "info": ""
            },
            {
                "id": 5,
                "info": ""
            }

            
        ]
    }*/
]