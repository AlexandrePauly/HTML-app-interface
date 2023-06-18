/* Récupération des éléments HTML correspondant aux onglets */
const onglet = document.getElementsByClassName("onglet");

/* Fonction pour afficher/désafficher les différents onglets */
function undisabled(numElt) {
    for(var i = 1 ; i <= onglet.length ; i++){
        if(i == numElt){
            onglet[i-1].style.display = "block";
        }
        else{
            onglet[i-1].style.display = "none";
        }
    }
}

/* Récupération des éléments HTML correspondant au menu et à ses items */
const body = document.getElementById("screen");
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
let activeItem = menu.querySelector(".active");

/* Fonction pour gérer le clic sur un item du menu */
function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");
    
    /* Si l'item cliqué est déjà actif, on ne fait rien */
    if (activeItem == item) return;
    
    /* Si un item était déjà actif, on le désactive */
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    /* On active l'item cliqué */
    item.classList.add("active");
    activeItem = item;
    
    
}

/* Fonction pour ajuster la position de la bordure du menu */
menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

/* On ajoute un événement de redimensionnement de la fenêtre pour ajuster la position de la bordure du menu */
window.addEventListener("resize", () => {
    menu.style.setProperty("--timeOut", "none");
});
