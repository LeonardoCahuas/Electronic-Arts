const cardArray3 = document.getElementById("card_clone_array3");

const cardContent4 = [
    {
        id: 0,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/wc-predictor-trophy-image-16x9-carousel-1-1.png.adapt.crop16x9.431p.png",
        redTitle: "FIFA",
        date:"8-nov-2022",
        title: "Pronostico EA SPORTS FIFA World Cup 2022",
        text: "Il più importante torneo di calcio al mondo è tornato. Quattro anni fa è stata la Francia ad alzare l'iconico trofeo della FIFA World Cup™ , e ora 32 nazioni si preparano a mettersi ancora una volta alla prova sul palcoscenico mondiale.",
    },
    {
        id: 1,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/f23-worldcup-featureimg-16x9.jpg.adapt.crop16x9.431p.jpg",
        redTitle: "FIFA",
        date:"8-nov-2022",
        title: "Pronostico EA SPORTS FIFA World Cup 2022",
        text: "Il più importante torneo di calcio al mondo è tornato. Quattro anni fa è stata la Francia ad alzare l'iconico trofeo della FIFA World Cup™ , e ora 32 nazioni si preparano a mettersi ancora una volta alla prova sul palcoscenico mondiale.",
    },
    {
        id: 2,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/f23-featured-image-ea-play-trial.jpg.adapt.crop16x9.431p.jpg",
        redTitle: "FIFA",
        date:"8-nov-2022",
        title: "Pronostico EA SPORTS FIFA World Cup 2022",
        text: "Il più importante torneo di calcio al mondo è tornato. Quattro anni fa è stata la Francia ad alzare l'iconico trofeo della FIFA World Cup™ , e ora 32 nazioni si preparano a mettersi ancora una volta alla prova sul palcoscenico mondiale.",
    },
    {
        id: 3,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/wc-predictor-trophy-image-16x9-carousel-1-1.png.adapt.crop16x9.431p.png",
        redTitle: "FIFA",
        date:"8-nov-2022",
        title: "Pronostico EA SPORTS FIFA World Cup 2022",
        text: "Il più importante torneo di calcio al mondo è tornato. Quattro anni fa è stata la Francia ad alzare l'iconico trofeo della FIFA World Cup™ , e ora 32 nazioni si preparano a mettersi ancora una volta alla prova sul palcoscenico mondiale.",
    },
    {
        id: 4,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/pitch-notes-tile-update.png.adapt.crop16x9.431p.png",
        redTitle: "FIFA",
        date:"8-nov-2022",
        title: "Pronostico EA SPORTS FIFA World Cup 2022",
        text: "Il più importante torneo di calcio al mondo è tornato. Quattro anni fa è stata la Francia ad alzare l'iconico trofeo della FIFA World Cup™ , e ora 32 nazioni si preparano a mettersi ancora una volta alla prova sul palcoscenico mondiale.",
    },
    {
        id: 5,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/main.jpg.adapt.crop16x9.431p.jpg",
        redTitle: "FIFA",
        date:"8-nov-2022",
        title: "Pronostico EA SPORTS FIFA World Cup 2022",
        text: "Il più importante torneo di calcio al mondo è tornato. Quattro anni fa è stata la Francia ad alzare l'iconico trofeo della FIFA World Cup™ , e ora 32 nazioni si preparano a mettersi ancora una volta alla prova sul palcoscenico mondiale.",
    },
]

function newCardF1(group4, item4, content4) {
    for(let i = 0; i < content4.length; i++) {
        group4.innerHTML += item4(content4[i].linkToPage, content4[i].cardImg, content4[i].redTitle, content4[i].date, content4[i].title, content4[i].text)
    }
}

function cardF1(linkToPage, cardImg, redTitle, date, title, text) {
    const card4 =  `<a href=${linkToPage} class="card">
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
return card4;
}

newCardF1(cardArray3, cardF1, cardContent4)