//create variables for all cards I need
const cardArray = document.getElementById("card_clone_array");
const cardArray1 = document.getElementById("card_clone_array1");

//create an array of a full card, who switch with the id
const cardContent = [
    {
      id: 0,
      href: "#",
      cardImg: "/card_components/itt-hero-large-keyart-16x9-xl.jpg.adapt.crop16x9.431p.jpg",
      redTitle: "It Takes Two",
      date: "4-nov-2022",
      title: "It Takes Two è ora disponibile su Nintendo Switch<sup>tm</sup>",
      text:"Immergiti subito nella più pazza avventura cooperativa di SWITCH<sup>tm</sup>",
    },
    {
        id: 1,
        href: "#",
        cardImg: "/card_components/marvel-x-ea-featured-image-16x9.jpg.adapt.crop16x9.431p.jpg",
        redTitle: "It Takes Two",
        date: "4-nov-2022",
        title: "It Takes Two è ora disponibile su Nintendo Switch<sup>tm</sup>",
        text:"Immergiti subito nella più pazza avventura cooperativa di SWITCH<sup>tm</sup>",
      }]

    function newCards(row, item, content) {
        for (let i = 0; i < content.length; i++) {
          row.innerHTML += item(content[i].href, content[i].cardImg, content[i].redTitle, content[i].date, content[i].title, content[i].text);
        }
      }
      
      function card(href, cardImg, redTitle, date, title, text) {
        const card = `
          <a href=${href} class="card">
                  <img src=${cardImg} class="card-img-top" alt="${title}">
                  <div class="card-body p-4">
                    <div class="d-flex flex-column align-items-center flex-md-row align-items-md-start mb-2">
                      <span class="me-md-3"; style="color:#ff4747;font-weight:bold;">${redTitle}</span>
                      <span style="color:#161616;">${date}</span>
                    </div>
                    <h3 class="h5 title text-center text-md-start mb-2">${title}</h3>
                    <p class="card-text text-dark">${text}</p>
                  </div>
          </a>
        `;
        return card;
      }
      
newCards(cardArray, card, cardContent);
newCards(cardArray1, card, cardContent);