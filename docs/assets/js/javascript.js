function showBUT(y){
    x = "BUT" + y;
    document.getElementById(x).classList.remove("hide")
    if (y==1) {
        document.getElementById("BUT2").classList.add("hide")
        document.getElementById("BUT3").classList.add("hide")
        document.getElementById("btn-titre1").classList.add("active")
        document.getElementById("btn-titre2").classList.remove("active")
        document.getElementById("btn-titre3").classList.remove("active")
    }else if(y==2){
        document.getElementById("BUT1").classList.add("hide")
        document.getElementById("BUT3").classList.add("hide")
        document.getElementById("btn-titre2").classList.add("active")
        document.getElementById("btn-titre1").classList.remove("active")
        document.getElementById("btn-titre3").classList.remove("active")
    }else{
        document.getElementById("BUT1").classList.add("hide")
        document.getElementById("BUT2").classList.add("hide")
        document.getElementById("btn-titre3").classList.add("active")
        document.getElementById("btn-titre1").classList.remove("active")
        document.getElementById("btn-titre2").classList.remove("active")
    }
}

setTimeout(() => {
    sDroite = document.getElementById('slide-droite');
    sDroite.addEventListener('click', slideDroite);

    sGauche = document.getElementById('slide-gauche');
    sGauche.addEventListener('click', slideGauche);
}, 1000);

function loadSlider(){
    setTimeout(() => {
        sDroite = document.getElementById('slide-droite');
        sDroite.addEventListener('click', slideDroite);
    
        sGauche = document.getElementById('slide-gauche');
        sGauche.addEventListener('click', slideGauche);
    }, 1000);
}

let nProjet = 1;
id="projet"+nProjet;

function slideDroite(){
    document.getElementById(id).classList.add("hide-projet");
    nProjet+=1;
    id="projet"+nProjet;
    if (document.getElementById(id)==null) {
        nProjet-=1;
        id="projet"+nProjet;
        document.getElementById(id).classList.remove("hide-projet");
    }else{
        document.getElementById(id).classList.remove("hide-projet");
    }
}

function slideGauche(){
    document.getElementById(id).classList.add("hide-projet");
    nProjet-=1;
    id="projet"+nProjet;
    if (document.getElementById(id)==null) {
        nProjet+=1;
        id="projet"+nProjet;
        document.getElementById(id).classList.remove("hide-projet");
    }else{
        document.getElementById(id).classList.remove("hide-projet");
    }

}