const cardArray1 = document.getElementById("card_clone_array1");//cards for EA Play

const cardContent2 = [
    {
        id: 0,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/ea-play-dec-content-drop-featured-image.jpg.adapt.crop16x9.431p.jpg",
        redTitle: "Electronic Arts Inc.",
        date: "14-mag-2021",
        title: "Gioca a Mass Effect<sup>TM</sup> Legendary Edition con EA Play* Pro",
        text:"Vivi la saga cinematografica ora rimasterizzata e ottimizzata per il 4K Ultra HD",
    },
    {
        id: 1,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/eaplay-socialpost-spotlight-fifa21-16x9.png.adapt.crop16x9.431p.png",
        redTitle: "FIFA",
        date: "3-mag-2021",
        title: "Ottieni di più da FIFA21 con EA Play - Sito ufficiale EA SPORTS",
        text:"FIFA 21 è ora disponibile in The Play List con EA Play",
    },
    {
        id: 2,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/ea-play-dec-content-drop-featured-image.jpg.adapt.crop16x9.431p.jpg",
        redTitle: "It Takes Two",
        date: "4 Nov 2022",
        title: "It Takes Two è ora disponibile su Nintendo Switch<sup>TM</sup>",
        text:"Immergiti subito nella più pazza avventura cooperativa di SWITCH<sup>TM</sup>",
    },
    {
        id: 3,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/ea-image-210316-game-pass-article-eaonlycore-16x9.jpg.adapt.crop16x9.431p.jpg",
        redTitle: "It Takes Two",
        date: "4 Nov 2022",
        title: "It Takes Two è ora disponibile su Nintendo Switch<sup>TM</sup>",
        text:"Immergiti subito nella più pazza avventura cooperativa di SWITCH<sup>TM</sup>",
    },
    {
        id: 4,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/ea-play-dec-content-drop-featured-image.jpg.adapt.crop16x9.431p.jpg",
        redTitle: "It Takes Two",
        date: "4 Nov 2022",
        title: "It Takes Two è ora disponibile su Nintendo Switch<sup>TM</sup>",
        text:"Immergiti subito nella più pazza avventura cooperativa di SWITCH<sup>TM</sup>",
    },
    {
        id: 5,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/ea-play-dec-content-drop-featured-image.jpg.adapt.crop16x9.431p.jpg",
        redTitle: "It Takes Two",
        date: "4 Nov 2022",
        title: "It Takes Two è ora disponibile su Nintendo Switch<sup>TM</sup>",
        text:"Immergiti subito nella più pazza avventura cooperativa di SWITCH<sup>TM</sup>",
    },
]

function newCard(group, item, content) {
    for(let i = 0; i < content.length; i++) {
        group.innerHTML += item(content[i].linkToPage, content[i].cardImg, content[i].redTitle, content[i].date, content[i].title, content[i].text)
    }
}

function cardS(linkToPage, cardImg, redTitle, date, title, text) {
    const card1 =  `<a href=${linkToPage} class="card">
    <img src=${cardImg} class="card-img-top" alt="${title}">
        <div class="card-body p-4">
            <div class="d-flex flex-column align-items-center flex-md-row align-items-md-start mb-2">
              <span class="me-md-3"; style="color:#ff4747;font-weight:bold; font-size:.8rem">${redTitle}</span>
              <span style="color:#161616;font-size:.8rem">${date}</span>
            </div>
            <h3 class="h5 title text-center text-md-start mb-2 style="font-weight:bold;" ">${title}</h3>
            <p class="card-text text-dark">${text}</p>
        </div>
</a>`;
return card1;
}

newCard(cardArray1, cardS, cardContent2)