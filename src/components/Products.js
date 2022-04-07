const products = [
    {id: 1,
        title: "Metro Last Night",
        description: "Desafía los horrores del apocalipsis ruso: equipa tu máscara de gas y un arsenal de armas caseras para enfrentarte a mutantes letales, enemigos humanos y el escalofriante entorno.",
        price: 1399,
        pictureURL: ["https://www.zona-leros.net/storage/games_tumbl/metro-last-light-complete-edition-cover-wuy.jpg"]
    },
    {id: 2,
        title: "Batman Arkham Knight",
        description: "En este explosivo final de la serie Arkham, Batman enfrenta el máximo peligro. El Espantapájaros regresa junto a súper villanos como El Pingüino, Dos Caras y Harley Quinn, para destruirlo de una vez por todas.",
        price: 1399,
        pictureURL: ["https://www.zona-leros.net/storage/games_tumbl/batman-arkham-knight-cover-eq3.jpg"]
    },
    {id: 3,
        title: "A Plague Tale - Innocence",
        description: "Sigue la aclamada historia de la joven Amicia y su hermano pequeño, Hugo, en un viaje desgarrador a través del peor momento de la historia. Perseguidos por la Inquisición y rodeados de imparables enjambres de ratas, Amicia y Hugo aprenderán a entenderse y a confiar el uno en el otro, y lucharán contra viento y marea por sobrevivir y encontrar un propósito en este mundo cruel y despiadado.",
        price: 1399,
        pictureURL: ["https://www.zona-leros.net/storage/games_tumbl/a-plague-tale-innocence-cover-e4s.jpg"]
    },   
    {id: 4,
        title: "The Witcher 3 - Wild Hunt",
        description: "En The Witcher encarnas a Geralt de Rivia, un cazador de monstruos profesional que tiene que encontrar a la muchacha protagonista de una profecía en un amplio mundo abierto y rebosante de ciudades comerciales, islas con piratas vikingos, peligrosos puertos de montaña y cuevas olvidadas.",
        price: 1399,
        pictureURL: ["https://www.zona-leros.net/storage/games_tumbl/the-witcher-3-wild-hunt-goty-cover-b1h.jpg"]
    },
    {id: 5,
        title: "Star Wars - Jedi Fallen Order",
        description: "Este juego narrativo para un solo jugador te pone en el papel de un Jedi Padawan que se escapó de la purga de la Orden 66 tras los sucesos de Star Wars™: Episodio III - Revenge of the Sith™. En una búsqueda para reconstruir la Orden de Jedi, debes recoger las piezas de tu pasado destrozado para completar tu entrenamiento, desarrollar nuevas y poderosas habilidades de la Fuerza y dominar el arte del icónico sable láser.",
        price: 1399,
        pictureURL: ["https://www.zona-leros.net/storage/games_tumbl/star-wars-jedi-fallen-order-cover-cjh.jpg"]
    },
    {id: 6,
        title: "Ghostwire Tokyo - Deluxe Edition",
        description: "Explora una visión única de Tokio distorsionada por una presencia sobrenatural. Descubre desde el paisaje urbano ultramoderno hasta los templos tradicionales y los callejones estrechos de una ciudad de una belleza inquietante",
        price: 1399,
        pictureURL: ["https://www.zona-leros.net/storage/games_tumbl/ghostwire-tokyo-deluxe-edition-cover-66j.jpg"]
    },
    {id: 7,
        title: "Lego Star Wars - The Skywalker Saga",
        description: "La galaxia será tuya con LEGO® Star Wars™: La Saga De Skywalker. Revive los momentos emblemáticos y la acción constante de las nueve películas de la saga de Skywalker, reinterpretadas con el humor característico de LEGO.",
        price: 1399,
        pictureURL: ["https://www.zona-leros.net/storage/games_tumbl/lego-star-wars-la-saga-skywalker-cover-r8c.jpg"]
    }, 
    {id: 8,
        title: "Dirt 5",
        description: "Ábrete camino a través de las rutas más emblemáticas del mundo. Maneja un sinfín de autos, desde iconos del rally hasta héroes de GT, y mucho más.",
        price: 1399,
        pictureURL: ["https://www.zona-leros.net/storage/games_tumbl/dirt-5-cover-ka8.jpg"]
    }
];

export const getProducts = () => {
    let datos;
    //console.log(datos);
    let p = new Promise((resolve, reject) => setTimeout(() => resolve(products), 2000));
    p.then(datos = products);
    //console.log(datos);
    return datos;
}
    // let datos = products;
    // return datos;

