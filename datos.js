//tipos: dulce, japones, chino, shushi, etc...

let listaRecetas = [
    {
        "id": 1,
        "nombreBuscar": "galletas",
        "nombre": "Galletas de mantequilla",
        "descripcion": "Buenas",
        "tipo": "dulce",
        "tiempoPreparacion": 60,
        "personas": 4,
        "ingredientes": [
            {
                "info": "Mantequilla temp. ambiente: 250 gr"
            },
            {
                "info": "Azúcar: 250 gr"
            },
            {
                "info": "Huevos M: 1"
            },
            {
                "info": "Harina: 650 gr"
            },
            {
                "info": "Aroma de vainilla: 1 cdta"
            },
            {
                "info": "Leche: 1 chorrito"
            },
            {
                "info": "Canela: 10 gr"
            }
        ],
        "instrucciones": [
            {
                "info": "En un bol batimos la mantequilla con el azúcar"
            },
            {
                "info": "Añadimos el aroma de vainilla, la canela y el huevo"
            },
            {
                "info": "Incorporamos la harina cucharada a cucharada, y si se desmiga echamos un chorrito de leche"
            },
            {
                "info": "Dejamos reposar la masa estirada en la nevera 3 horas"
            },
            {
                "info": "Hacemos las formitas y hornear a 180º"
            }
        ]
    },
    {
        "id": 2,
        "nombreBuscar": "tortitas",
        "nombre": "Tortitas americanas",
        "descripcion": "Buena",
        "tipo": "dulce",
        "tiempoPreparacion": 20,
        "personas": 4,
        "ingredientes": [
            {
                "info": "Harina: 200 gr"
            },
            {
                "info": "Azúcar: 3 cdas"
            },
            {
                "info": "Huevos M: 4"
            },
            {
                "info": "Leche: 250 ml"
            },
            {
                "info": "Mantequilla: 30 gr"
            },
            {
                "info": "Sal: 1 pizca"
            },
            {
                "info": "Mantequilla para engrasar: 30 gr"
            }
        ],
        "instrucciones": [
            {
                "info": "Ponemos a calentar una sartén grande y antiadherente a fuego medio."
            },
            {
                "info": "Separamos las yemas y las claras de los huevos."
            },
            {
                "info": "En un bol grande tamizamos la harina, la sal y el azúcar. Hacemos un hueco en el centro y echamos las yemas, la mantequilla o margarina derretida junto con la leche."
            },
            {
                "info": "Mezclamos con unas varillas, poco a poco, hasta conseguir una masa lisa y densa."
            },
            {
                "info": "Batimos las claras a punto de nieve y se lo incorporamos a la preparación anterior."
            },
            {
                "info": "Cuando la sartén este caliente, pero no en exceso, la engrasamos con un pincel y un poco de margarina."
            },
            {
                "info": "Con una cuchara echamos la masa para hacer las tortitas. Dejamos de 1 a 2 minutos hasta que la masa esté dorada, volteamos con una espátula y dejamos que se dore otro minuto."
            }
        ]
    },
    {
        "id": 3,
        "nombreBuscar": "tartaDeQuesoFria",
        "nombre": "Tarta de queso fría",
        "descripcion": "Buena",
        "tipo": "tartas sin horno",
        "tiempoPreparacion": 30,
        "personas": 4,
        "ingredientes": [
            {
                "info": "Queso de untar: 300 gr"
            },
            {
                "info": "Nata líquida para montar: 400 ml"
            },
            {
                "info": "Cuajada (2 sobres): 24 gr"
            },
            {
                "info": "Galletas María: 1 paquete"
            },
            {
                "info": "Azúcar: 1 vaso"
            },
            {
                "info": "Leche: 1 vaso"
            }
        ],
        "instrucciones": [
            {
                "info": "Preparamos un molde con las galletas trituradas mezcladas con mantequilla o en su defecto con las soletillas (mojadas en un poco de leche)"
            },
            {
                "info": "Batimos en un bol el queso, la nata, el azúcar y la leche (reservando un poco para disolver la cuajada)"
            },
            {
                "info": "Una vez esté bien batido, lo pondremos al fuego dándole vueltas durante 2 ó 3 minutos."
            },
            {
                "info": "Cuando empiece a hervir añadimos la cuajada, anteriormente disuelta en un poco de leche. Continuamos dando unas vueltas durante un minuto más o menos. Y lo vertemos en el molde donde tenemos preparadas las galletas."
            },
            {
                "info": "Lo dejamos enfriar y la ponemos en la nevera tapada con papel film durante un mínimo de 6 horas."
            },
            {
                "info": "La sacamos y podemos decorarla por encima con mermelada al gusto."
            }
        ]
    },
    {
        "id": 4,
        "nombreBuscar": "helicesConVinagreta",
        "nombre": "Hélices con Vinagreta",
        "descripcion": "Ensalada pasta",
        "tipo": "pasta",
        "tiempoPreparacion": 10,
        "personas": 4,
        "ingredientes": [
            {
                "info": "Hélices: 400 gr"
            },
            {
                "info": "Maíz dulce: 1 lata"
            },
            {
                "info": "Guisantes: 1 lata"
            },
            {
                "info": "Olivas rellenas: 1 lata"
            },
            {
                "info": "Anchoas: 4 unidades"
            },
            {
                "info": "Huevos picados M: 2"
            },
            {
                "info": "Lechuga: 1 o más"
            },
            {
                "info": "Vinagre de manzana (para salsa): 3 cucharadas"
            },
            {
                "info": "Azúcar: 1 cda"
            },
            {
                "info": "Mostaza: 1 cda"
            },
            {
                "info": "Sal: 1 pizca"
            },
            {
                "info": "Aceite de oliva: 6 cdas"
            }
        ],
        "instrucciones": [
            {
                "info": "Hervimos las hélices durante los minutos que nos indique el fabricante, en agua hirviendo con sal. Mientras podemos cocer también los huevos ( para que estén en su punto exacto de cocción los cocemos 10 minutos )"
            },
            {
                "info": "Preparamos todos los ingredientes de la salsa en un bote con tapa y los movemos enérgicamente."
            },
            {
                "info": "En un bol vamos añadiendo todos los ingredientes, junto con las hélices, los huevos y la salsa. Lo removemos bien y ya está listo para servir."
            }
        ]
    },
    {
        "id": 5,
        "nombreBuscar": "tortelliniConQuesoYLonganizas",
        "nombre": "Tortellinis con longaniza",
        "descripcion": "Pasta buena",
        "tipo": "pasta",
        "tiempoPreparacion": 40,
        "personas": 4,
        "ingredientes": [
            {
                "info": "Tortellinis: 350 gr"
            },
            {
                "info": "Mantequilla: 50 gr"
            },
            {
                "info": "Longanizas: 500 gr"
            },
            {
                "info": "Cebolla: 1 entera"
            },
            {
                "info": "Manzana golden: 1 entera"
            },
            {
                "info": "Tomates maduros: 3 enteros"
            }
        ],
        "instrucciones": [
            {
                "info": "Hervir la pasta el tiempo indicado por el fabricante."
            },
            {
                "info": "En una sartén fundimos la mantequilla y añadimos las longanizas cortadas a trocitos no muy grandes. Una vez doradas las sacamos de la sartén y reservamos."
            },
            {
                "info": "En la misma sartén para aprovechar la grasita de las longanizas pochamos lentamente la cebolla para que caramelice."
            },
            {
                "info": "Cuando ya esté doradita la cebolla añadimos la manzana a trocitos y le damos una vueltecitas para que se dore un poquito."
            },
            {
                "info": "Una vez doradita le añadimos los tomates, salpimentamos y añadimos una cucharadita de azúcar para quitar la acidez de los tomates. Dejamos que se hagan a fuego lento durante unos 20 minutos."
            },
            {
                "info": "Cuando veamos que la salsa ya está hecha añadimos las longanizas y la pasta. Le damos unas vueltas y servimos. Podemos añadir por encima un poco de orégano, albahaca fresca o seca, esto ya queda al gusto del consumidor."
            }

            
        ]
    },
    {
        "id": 6,
        "nombreBuscar": "tartaTurron",
        "nombre": "Tarta de turrón fría",
        "descripcion": "La mejor tarta de turrón",
        "tipo": "tartas sin horno",
        "tiempoPreparacion": 30,
        "personas": 6,
        "ingredientes": [
            {
                "info": "Galletas María: 20 unidades"
            },
            {
                "info": "Mantequilla: 40 gr"
            },
            {
                "info": "Leche: 1 chorro"
            },
            {
                "info": "Turrón blando: 300 gr"
            },
            {
                "info": "Leche: 300 ml"
            },
            {
                "info": "Nata para montar: 300 ml"
            },
            {
                "info": "Azúcar: 60 gr"
            },
            {
                "info": "Gelatina neutra: 4 hojas"
            }
        ],
        "instrucciones": [
            {
                "info": "Derretimos la mantequilla, trituramos las galletas y lo mezclamos. Si está muy seco tirar un chorrito de leche."
            },
            {
                "info": "Ponemos en un molde papel vegetal por abajo y extendemos la galleta."
            },
            {
                "info": "En una olla ponemos la leche con el turrón y el azúcar. Y lo derretimos a fuego bajo."
            },
            {
                "info": "Ponemos a remojo la gelatina, y cuando el turron esté derretido añadimos la nata."
            },
            {
                "info": "Una vez mezclada la mata lo retiramos del fuego y añadimos la gelatina. Se mezcla todo."
            },
            {
                "info": "Lo vertemos en el molde, lo cubrimos con film y a la nevera unas 6 horas aprox."
            }
        ]
    }
]
