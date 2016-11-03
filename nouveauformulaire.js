/**Créer un formulaire de Création de produit avec les validations suivantes:

+ Titre du produit (uniquement caractères alpha avec tiret minimum 5 caractères)
+ Code Barre: 11 caractères numérque au format XXXXX XXXXX X
+ Description: 10 mots avec des caractres alpha numérique avec espace et baslises HTML <b>
+ Prix: AU format: XX.XX€ avec X un nombre
+ Disponibilité: date au format dd/mm/YYYY . Verifier que cette date est dans le future avec la fonction Date()
+ Image: image que de type jpg ou jpeg provenant de Amazon S3. L'image apparait en miniature juste en dessous quand je quitte mon champs
+ Quantité minimum: nombre < 10000
+ Quantité maximum: nombre < 10000 et inférieur au maximum
+ Mot clefs: textarea avec la saisie de mot séparé par des virgule (on mettra un petit compteur de mot a coté)
+ Couleur: forma text au format hexadecimal #FFEE88 ou rgba(255,255,255,0.8)
+ Type de vente: liste déroulante avec pour items "Neuf" , "Occasion", "Dematerielisé", "Autre". Quand je selection Autre (change())
cela me fait apparaitre un champs en dessous
+ Boutons "Créer cette fiche produit"


Bonus: Utiliser le plugin Summernote en Jquery pour la description du Produit
Bonus 2: Intégrer le plugin Bootstrap Slider pour le prix https://github.com/seiyria/bootstrap-slider
Bonus 3: Intégrer le plugin Jquery Mask piur le codebarre https://igorescobar.github.io/jQuery-Mask-Plugin/
Bonus 3 : Intégrer le plugin Jquery Datepicker https://eonasdan.github.io/bootstrap-datetimepicker/
Bonus 4: Intégrer le COlor picker http://www.eyecon.ro/colorpicker/

*/


 $(document).ready(function() {  // premiere ligne de jQuery

// Titre produit

   $("input#titreproduit").blur(function(){

   // Regex pour input
   var titreProduitInput = $("input#titreproduit").val();
   var patttitreProduit = /([a-z\-]){5,}/igm;
   var restitreProduit = patttitreProduit.test(titreProduitInput);

   // Vérification
   if(restitreProduit == false) {
     $("input#titreproduit").css("border", "1px solid orange");
   }
   else {
     $("input#titreproduit").css("border", "1px solid grey");
   }
   })

   // Code barre

   $("input#codebarre").blur(function(){

   // Regex pour input
   var codeBarreInput = $("input#codebarre").val();
   var pattcodeBarre = /((\d){5}[ ]){2}\d/igm;
   var rescodeBarre = pattcodeBarre.test(codeBarreInput);

   // Vérification
   if(rescodeBarre == false) {
     $("input#codebarre").css("border", "1px solid orange");
   }
   else {
     $("input#codebarre").css("border", "1px solid grey");
   }
   })

   // Description

   $("input#description").blur(function(){

     // Regex pour input
     var descriptionInput = $("input#description").val();
     var pattdescriptionInput = /(([a-z])+ ){9}([a-z])+/igm;
     var resdescriptionInput = pattdescriptionInput.test(descriptionInput);

     // Vérification
     if(resdescriptionInput == false) {
       $("input#description").css("border", "1px solid orange");
     }
     else {
       $("input#description").css("border", "1px solid grey");
       $("input#description").wrap("<b></b>");
     }
   })

   // Prix

   $("input#prix").blur(function(){

   // Regex pour input
   var prixInput = $("input#prix").val();
   var pattprix = /(\d){2}[\.](\d){2}\€/igm;
   var resprix = pattprix.test(prixInput);

   // Vérification
   if(resprix == false) {
     $("input#prix").css("border", "1px solid orange");
   }
   else {
     $("input#prix").css("border", "1px solid grey");
   }
   })


   // Disponibilité

   $("input#disponibilite").blur(function(){

   // Regex pour input
   var disponibiliteInput = $("input#disponibilite").val();
   var pattdisponibilite = /[1-3][0-9][\/][0-1][0-9][\/](\d){4}/igm;
   var resdisponibilite = pattdisponibilite.test(disponibiliteInput);

   //COMPARING DATES ????
   //var d = new Date();

   // Vérification
   if(resdisponibilite == false ) {
     $("input#disponibilite").css("border", "1px solid orange");
   }
   else {
     $("input#disponibilite").css("border", "1px solid grey");
   }
 })


 // Image

 $("input#image").blur(function(){

 // Regex pour input
 var imageInput = $("input#image").val();
 var pattimage = /^(?:http:\/\/)?(?:www.)?(amazon\.com\/s3)[\/a-z]+(.jpg|.jpeg)$/igm;
 var resimage = pattimage.test(imageInput);


 // Vérification
 if(resimage == false ) {
   $("input#image").css("border", "1px solid orange");
 }
 else {
   $("input#image").css("border", "1px solid grey");
   $("img#userimg").css("display", "block");
   //trouver le moyen de changer le src de l'image pour la faire apparaitre après
 }
 })


 // Quantité minimum

 $("input#quantiteminimum").blur(function(){

 // Regex pour input
 var quantiteminimumInput = $("input#quantiteminimum").val();
 var pattquantiteminimum = /(\d){1,5}/igm;
 var resquantiteminimum = pattquantiteminimum.test(quantiteminimumInput);


 // Vérification
 if(resquantiteminimum == false ) {
   $("input#quantiteminimum").css("border", "1px solid orange");
 }
 else {
    if(parseInt(quantiteminimumInput) < 10000) {
   $("input#quantiteminimum").css("border", "1px solid grey");
 }
    else {
    $("input#quantiteminimum").css("border", "1px solid orange");
  }
 }
 })


 // Quantité maximum

 $("input#quantitemaximum").blur(function(){

 // Regex pour input
 var quantitemaximumInput = $("input#quantitemaximum").val();
 var pattquantitemaximum = /(\d){1,5}/igm;
 var resquantitemaximum = pattquantitemaximum.test(quantitemaximumInput);


 // Vérification
 if(resquantitemaximum == false) {
   $("input#quantitemaximum").css("border", "1px solid orange");
 }
 else {
    if(parseInt(quantitemaximumInput) < 10000 || parseInt(quantitemaximumInput) < parseInt(quantiteminimumInput)) {
   $("input#quantitemaximum").css("border", "1px solid orange");
 }
    else {
    $("input#quantitemaximum").css("border", "1px solid grey");
  }
 }
 })

 // Mot clé

// compteur à mot clé

 $("input#motcle").keyup(function(){

   // Regex pour input
   var motcleInput = $("input#motcle").val();
   var pattmotcle = /(([a-z])+\,)/igm;
   var resmotcle = pattmotcle.test(motcleInput);


 $("p#compteurmotcle").text(motcleInput.match(pattmotcle).length);
 })

 // validation des mots clés

 $("input#motcle").blur(function(){

   // Regex pour input
   var motcleInput = $("input#motcle").val();
   var pattmotcle = /(([a-z])+\,){1,}/igm;
   var resmotcle = pattmotcle.test(motcleInput);

 // Vérification
 if(resmotcle == false) {
   $("input#motcle").css("border", "1px solid orange");
 }
 else {
    $("input#motcle").css("border", "1px solid grey");
  }

 })


 // Couleur

  $("input#couleur").blur(function(){

    // Regex pour input
    var couleurInput = $("input#couleur").val();
    var pattcouleur = /\#[a-z\d]{6}|[r]\g[b]\a\((\d{3}\,){3}([0]\.[0-9]|[1])\)/igm;
    var rescouleur = pattcouleur.test(couleurInput);

  // Vérification
  if(rescouleur == false) {
    $("input#couleur").css("border", "1px solid orange");
  }
  else {
     $("input#couleur").css("border", "1px solid grey");
   }

  })


 // Type de vente

 $("#dropbutton").click(function(){
   $("#dropdown-content").css("display", "block");
  })


  // Summernote

    $('#summernote').summernote({
      lang: 'ko-KR' // default: 'en-US'
    });


    // Bootstrap slider pour le Prix





      }); // fermeture de jQuery
