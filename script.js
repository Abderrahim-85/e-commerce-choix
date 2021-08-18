

$(document).ready(function(){

let quantite = $("#quantite");
let taille = $("#taille");
let nombre = $("#nombre");
let prix = $("#prix");

let quantiteValue = $("#quantite_value");
let tailleValue = $("#taille_value");
let nombreValue = $("#nombre_value");
let prixValue = $("#prix_value");
let totalValue = $("#total_value");




    quantite.on("change",function(){
        quantiteValue.text(quantite.val());
        totalValue.text(quantite.val() * prix.val());

    });
    taille.on("change",function(){
        tailleValue.text(taille.val());

    });
    nombre.on("change",function(){
        nombreValue.text(nombre.val());

    });
    prix.on("change",function(){
        prixValue.text(prix.val());
        totalValue.text(quantite.val() * prix.val());

    });
    // totale.on("change",function(){
    //     totalValue.text(quantite.val() * prix.val());

    // });
    quantiteValue.text(quantite.val());
    tailleValue.text(taille.val());
    nombreValue.text(nombre.val());
    prixValue.text(prix.val());
    totalValue.text(quantite.val() * prix.val());
    
    console.log(quantiteValue);
    console.log(totalValue);



})

