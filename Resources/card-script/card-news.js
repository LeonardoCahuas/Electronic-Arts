//create variables for all group of cards I need
const cardArray = document.getElementById("card_clone_array");//cards for News EA CREATED
// const cardArray1 = document.getElementById("card_clone_array1");//cards for EA Play CREATED
// const cardArray2 = document.getElementById("card_clone_array2");//cards for FIFA CREATED
// const cardArray3 = document.getElementById("card_clone_array3");//cards for F1 CREATED
// const cardArray4 = document.getElementById("card_clone_array4");//cards for Apex Legends PLUS NOT NECESSARY
// const cardArray5 = document.getElementById("card_clone_array5");//cards for The Sims CREATED
// const cardArray6 = document.getElementById("card_clone_array6");//cards for BattleField TO DO
// const cardArray7 = document.getElementById("card_clone_array7");//cards for Inside EA TO DO


//create an array of full cards, who switch with the id
const cardContentNews = [
    {
      id: 0,
      linkToPage: "#",
      cardImg: "/Electronic-Arts/card_components/itt-hero-large-keyart-16x9-xl.jpg.adapt.crop16x9.431p.jpg",
      redTitle: "It Takes Two",
      date: "4 Nov 2022",
      title: "It Takes Two è ora disponibile su Nintendo Switch<sup>TM</sup>",
      text:"Immergiti subito nella più pazza avventura cooperativa di SWITCH<sup>TM</sup>",
    },
    {
        id: 1,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/marvel-x-ea-featured-image-16x9.jpg.adapt.crop16x9.431p.jpg",
        redTitle: "Electronic Arts Inc.",
        date: "31 Ott 2022",
        title: "EA e MARVEL ENTERTAINMENT annunciano una collaborazione su più titoli",
        text:"EA e MARVEL ENTERTAINMENT annunciano una collaburazione su più titoli per lo sviluppo di giochi d'azione e avventura.",
      },
      {
        id: 2,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/ts4-play-sims-for-free-new-plumbob.png.adapt.crop16x9.431p.png",
        redTitle: "Electronic Arts Inc.",
        date: "18 Ott 2022",
        title: "Giocate a The Sims 4 gratis a partire dal 18 ottobre",
        text:"Ulteriori aggiornamenti a seguire durante uno streaming speciale: 'Behind The Sims Summit'",
      },
      {
        id: 3,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/eacom-brand-featured-image-16x9.png.adapt.crop16x9.431p.png",
        redTitle: "Electronic Arts Inc.",
        date: "6 Ott 2022",
        title: "Un aggiornamento per i nostri giocatori Mac sull'EA app per Windows",
        text:"Forse avrai letto qualche notizia sulla nuova EA app per Windows, che presto diventerà il principale punto di riferimento per i giochi PC di EA, andando a sostituire Origin.",
      },
      {
        id: 4,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/ts4-play-sims-for-free-new-plumbob.png.adapt.crop16x9.431p.png",
        redTitle: "Electronic Arts Inc.",
        date: "18 Ott 2022",
        title: "Tutto ciò che è stato annunciato durante l'evento 'Behind The Sims Summit",
        text:"Uno sguardo al passato, al presente e al radioso futuro di The Sims",
      },
      {
        id: 5,
        linkToPage: "#",
        cardImg: "/Electronic-Arts/card_components/ea-app-featured-image-16x9.jpg.adapt.crop16x9.431p.jpg",
        redTitle: "Electronic Arts Inc.",
        date: "18 Ott 2022",
        title: "Giocate a The Sims 4 gratis a partire dal 18 ottobre",
        text:"Siamo lieti di annunciare che l'EA app ha ufficialmente abbandonato la fase open beta e presto sostituirà Origin in qualità di piattaforma primaria per PC. L'EA app è il client PC più veloce e leggero di sempre.",
      },
      
    ]

    //loop function
function newCards(groupCards, item, content) {
        for (let i = 0; i < content.length; i++) {
          groupCards.innerHTML += item(content[i].linkToPage, content[i].cardImg, content[i].redTitle, content[i].date, content[i].title, content[i].text);
        }
      }

//the function create a card with the parameters of the object inside the array
function cardNews(linkToPage, cardImg, redTitle, date, title, text) {
        const card = 
        `<a href=${linkToPage} class="card">
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
        return card;
      }
      
newCards(cardArray, cardNews, cardContentNews);
