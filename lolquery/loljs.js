$(document).ready(function (){
    console.log("fichier Js chargé !");
    
//    $(document).click(function(){
//         $("#c1").animate({left:'200px', top: '200px' },2000, function(){
//             $("#o2").animate({left:'300px', top: '200px' },2000)
//         })
//    });

//déplacement de la coccinnelle à chaque fois que l'on passe la souris dessus
$(".bug1").hover(function(){
    var display = ($("div").length);
    var number = (1 + Math.floor(Math.random() * 1900) + 'px');
    var number2 = (1 + Math.floor(Math.random() * 900) + 'px');
    var delay = (1 + Math.floor(Math.random() * 500));
    
    console.log("test");
    $(".bug1").animate({left: number, top: number2 },delay);
    number = (1 + Math.floor(Math.random() * 1900) + 'px');
    number2 = (1 + Math.floor(Math.random() * 900) + 'px');
  
    $('body').append(
        $("<div>")
        // .addClass("fas fa-bug")
        .addClass("lol")
        .html("<p>GAGNEE LE NOUVEAU IPHONE11</p>")
        .css({'position': 'absolute', "fontSize": "30px", 'background-color': 'blue', 'z-index': '-1', 'border': 'solid red 1px', 'color': 'yellow' })
        .animate({left: number, top: number2 },delay)
    );
    
        var randomElements = $("div").get().sort(function() {
            return Math.round(Math.random()) - 0.5;
        }).slice(0, 1);
        //  $(randomElements).css('border', '1px solid red');
        $(randomElements).animate({left: number, top: number2 },delay)

        $(".results").text(display);
    
    
    //L’effet toggleclass permet un aller retour entre deux états d’un élément. 
    //Au clic, on rajoute une classe, au deuxième clic, on revient à l’état initial.
    // $(this).removeClass("container").addClass("container2");
    // $(this).toggleClass("container2");
    // $(".container").animate({left:'300px', top:"300px"},2000)
    });

});



