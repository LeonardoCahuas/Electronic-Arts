const tabsTrack = document.querySelector(".nav-tab-id");
//console.log(navTrack)
const nextTabButton = document.querySelector(".button-move-to-right");
//console.log(nextTabButton); //--> bottone che serve a scorrere in avanti con le tabs successive
const prevTabButton = document.querySelector(".button-move-to-left");
//console.log(prevTabButton); //--> bottone che serve a scorrere indietro con le tabs precedenti
const trackTabs = Array.from(tabsTrack.children); //--> array composto da tutti i button (children di #nav-tab div)
//console.log(trackTabs);

const tabWidth = Math.round(trackTabs[0].getBoundingClientRect().width);
//console.log(tabWidth);

nextTabButton.addEventListener("click", (e) => {
  tabsTrack.scrollLeft += tabWidth * 2;
  prevTabButton.style.visibility = "visible";
});

prevTabButton.addEventListener("click", (e) => {
  tabsTrack.scrollLeft -= tabWidth * 2;

  if (tabsTrack.scrollLeft == 0) {
    prevTabButton.style.visibility = "hidden";
  }
});
