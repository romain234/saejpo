function choixStatut(event) {
    let statut = event.srcElement.value
    let elementParent = document.getElementById("parent_form");
    let elementsNiveau = document.getElementsByClassName("niveau");
    let elementsArrayNiveau = Array.from(elementsNiveau);
    switch (statut) {
        case "eleve":
            elementParent.classList.add("invisible");
            elementsArrayNiveau.forEach(element => {
                element.classList.remove("invisible");
            });
            break;
        case "parent":
            elementParent.classList.remove("invisible");
            elementsArrayNiveau.forEach(element => {
                element.classList.remove("invisible");
            });
            break;
        case "prof":
            elementParent.classList.add("invisible");
            elementsArrayNiveau.forEach(element => {
                element.classList.add("invisible");
            });
            break;
        case "autre":
            elementParent.classList.add("invisible");
            elementsArrayNiveau.forEach(element => {
                element.classList.add("invisible");
            });
            
            break;
    }
    choixNiveau(event, statut);
}

function choixNiveau(event, statut) {
    let niveau = event.srcElement.value;
    let elementsBac = document.getElementsByClassName("bac");
    let elementsArrayBac = Array.from(elementsBac);
    let elementsFormation = document.getElementsByClassName("formation");
    let elementsArrayFormation = Array.from(elementsFormation);
    let elementsPasBac = document.getElementsByClassName("pas_bac");
    let elementsArrayPasBac = Array.from(elementsPasBac);
    if (statut === "autre" || statut === "prof") {
        niveau="autre";
    }
    if (statut === "eleve" || statut === "parent"){
        niveau="seconde"
        document.getElementById('seconde').checked = true;
    }
    switch (niveau) {
        case "seconde":
            document.getElementById('general').checked = true;
            elementsArrayBac.forEach(element => {
                element.classList.add("invisible");
            });
            elementsArrayFormation.forEach(element => {
                element.classList.add("invisible");
            });
            break;
        case "premiere":
            if(document.getElementById('pas_bac').checked == true){
                document.getElementById('general').checked = true;
            }
            elementsArrayBac.forEach(element => {
                element.classList.remove("invisible");
            });
            elementsArrayFormation.forEach(element => {
                element.classList.add("invisible");
            });
            elementsArrayPasBac.forEach(element => {
                element.classList.add("invisible");
            });
            break;
        case "terminal":
            if(document.getElementById('pas_bac').checked == true){
                document.getElementById('general').checked = true;
            }
            document.getElementById('general').checked = true;
            elementsArrayBac.forEach(element => {
                element.classList.remove("invisible");
            });
            elementsArrayFormation.forEach(element => {
                element.classList.add("invisible");
            });
            elementsArrayPasBac.forEach(element => {
                element.classList.add("invisible");
            });
            break;
        case "etudiant":
            elementsArrayBac.forEach(element => {
                element.classList.remove("invisible");
            });
            elementsArrayFormation.forEach(element => {
                element.classList.remove("invisible");
            });
            elementsArrayPasBac.forEach(element => {
                element.classList.remove("invisible");
            });
            break;
        case "autre":
            elementsArrayBac.forEach(element => {
                element.classList.remove("invisible");
            });
            elementsArrayFormation.forEach(element => {
                element.classList.remove("invisible");
            });
            elementsArrayPasBac.forEach(element => {
                element.classList.remove("invisible");
            });
            break;
    }
}
function validateTel(input) {
    input.value = input.value.replace(/[^0-9.]/g, '');
}


function verifyInscription(){
    id = document.getElementById("idInsc");
    mdp = document.getElementById("mdpInsc");
    verifyMdp = document.getElementById("verifymdpInsc");

    idValue = id.value;
    mdpValue = mdp.value;
    verifyMdpValue = verifyMdp.value;
    if (idValue.length < 4) {
        id.value="";
        id.placeholder='Identifiant trop court !';        
    }else if(mdpValue != verifyMdpValue){
        mdp.value="";
        verifyMdp.value="";
        mdp.placeholder='Mots de passe non identique !';        
    }else if(mdpValue.length < 4){
        mdp.value="";
        verifyMdp.value="";
        mdp.placeholder='Mot de passe trop court !'; 
    }
}

function verifyConnexion(){
    id = document.getElementById("idCon");
    mdp = document.getElementById("mdpCon");

    idValue = id.value;
    mdpValue = mdp.value;
    if (idValue.length < 4) {
        id.value="";
        id.placeholder='Identifiant trop court !';        
    }else if(mdpValue.length < 4){
        mdp.value="";
        mdp.placeholder='Mot de passe trop court !'; 
    }
}