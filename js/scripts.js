$(Document).ready(function(){

$('.imageDesign').hover(function(){
    $(".textDesign").toggle();
    $(".imageDesign").toggle();   
});
$('.imageDev').click(function(){
    $(".textDev").toggle();
    $(".imageDev").toggle();   
});
$('.imageProdman').click(function(){
    $(".textProdman").toggle();
    $(".imageProdman").toggle();   
});

});