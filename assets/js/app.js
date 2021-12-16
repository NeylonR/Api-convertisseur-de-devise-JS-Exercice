// déclaration de variable pour les éléments du DOM
const getButton = document.querySelector('button');
const getMainInput = document.getElementById('mainCurrencyValue');
const getSecondInput = document.getElementById('secondCurrencyValue');
const getMainSelect = document.getElementById('mainCurrency');
const getSecondSelect = document.getElementById('secondCurrency');

// fonction avec un fetch sur l'url pour effectuer la conversion de monnaie
function currencyComparator(firstCurrency, secondCurrency){
    // l'url cible, je remplace un morceau en y passant mon premier parametre
    fetch(`https://freecurrencyapi.net/api/v2/latest?apikey=f35ab720-5bfa-11ec-935a-1d08cd988587&base_currency=${firstCurrency}`)
    // renvoi le contenu de la réponse en json
    .then((response) => response.json())
    // je vais chercher le taux qui correspond à mon second paramètre puis j'effectue la conversion et l'envoi dans le champ de mon élément secondInput
    .then(function(data){
        let result = getMainInput.value * data.data[secondCurrency];
        getSecondInput.value = result;
    })
    // si erreur => ça le console.log
    .catch((err) => console.log("Erreur :"+ err));
}

// j'écoute mon event click sur le button
getButton.addEventListener("click", function(e){
    // j'annule le changement de page lié au button
    e.preventDefault();
    // si le mainInput à une length de plus de 0 et une valeur de plus de 0 j'éxécute ma fonction en passant en paramètres l'option de chaque select
    if(getMainInput.value.length > 0 && getMainInput.value > 0){
        currencyComparator(getMainSelect.value, getSecondSelect.value);
    }else{
        // sinon je vide le champ
        getMainInput.value = "";
    }
})

// framework : c'est une boite à outil, ces outils vont nous aider à faciliter le developpement de notre projet. Peut contenir plusieurs library. Permet de gagner du temps parce que des fonction on déjà été codé



// nodejs: plateforme logiciel qui sert a executer du javascript côté serveur. peut servir pour créer un serveur web, peut communiquer avec un bdd. interpreteur jsx

// npm : s'utilise en cmd, permet d'installer des modules et d'initier ses projets