const navTrack = document.querySelector('.navbarTabs-track');
//console.log(navTrack); --> composizione di ul, lista delle slide-tabs
const nextTabButton = document.querySelector('.button-move-to-right');
//console.log(nextTabButton); --> bottone che serve a scorrere in avanti con le tabs successive
const prevTabButton = document.querySelector('.button-move-to-left');
//console.log(prevTabButton);--> bottone che serve a scorrere indietro con le tabs precedenti
const trackTabs = Array.from(navTrack.children);
//console.log(trackTabs);//--> array composto da tutti i li (children di ul)
const tabWidth = trackTabs[0].getBoundingClientRect().width;
//console.log(tabWidth);

const setTabPosition = (tab, index) => {
    tab.style.left = (tabWidth * index) + "px";
}

trackTabs.forEach(setTabPosition);

const toMoveTabs = (track, currentTab, targetTab) => {
    track.style.transform = `translateX(-` + targetTab.style.left + `)`; 
    
    currentTab.classList.remove('current-tab');
    targetTab.classList.add('current-tab');

}

nextTabButton.addEventListener('click', e => {
    const currentTab = document.querySelector('.current-tab');
    const nextTab = currentTab.nextElementSibling;
    
    toMoveTabs(navTrack, currentTab, nextTab);
    
    //const amountToMove = nextTab.style.left;
    //console.log(currentTab);
    //console.log(nextTab);
    //navTrack.style.transform = `translateX(-` + amountToMove + `)`; 
    //currentTab.classList.remove('current-tab');
   //nextTab.classList.add('current-tab');
})


prevTabButton.addEventListener('click', e => {
    const currentTab = document.querySelector('.current-tab');
    const prevTab = currentTab.previousElementSibling;
    //console.log(prevTab);

    toMoveTabs(navTrack, currentTab, prevTab);

})