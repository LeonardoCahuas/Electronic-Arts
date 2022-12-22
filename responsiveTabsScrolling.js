const trackTabsContainer = document.querySelector(".nav-tab-id");
//console.log(tabsTrack)
const nextTabButton = document.querySelector(".button-move-to-right");
//console.log(nextTabButton); //--> bottone che serve a scorrere in avanti con le tabs successive
const prevTabButton = document.querySelector(".button-move-to-left");
//console.log(prevTabButton); //--> bottone che serve a scorrere indietro con le tabs precedenti
const trackTabs = Array.from(trackTabsContainer.children); //--> array composto da tutti i button (children di #nav-tab div)
//console.log(trackTabs);

//const tabWidth = trackTabs[0].getBoundingClientRect().width;
//console.log(tabWidth);

nextTabButton.addEventListener("click", (e) => {
  trackTabsContainer.style.scrollBehavior = "smooth";
  trackTabsContainer.scrollLeft += 150;
  prevTabButton.style.visibility = "visible";
  if (trackTabsContainer.scrollLeft > 200) {
    nextTabButton.style.visibility = "hidden";
  }
});

prevTabButton.addEventListener("click", (e) => {
  trackTabsContainer.scrollLeft -= 150;

  if (trackTabsContainer.scrollLeft === 0) {
    prevTabButton.style.visibility = "hidden";
    nextTabButton.style.visibility = "visible";
  }
});
