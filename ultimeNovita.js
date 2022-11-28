const notizie = document.getElementById("nav-notizie-tab");

notizie.addEventListener("click", myFn);

function myFn(){
    let notiziePar = notizie.firstElementChild;
        notiziePar.style.borderBottom = "2px solid red";
}

