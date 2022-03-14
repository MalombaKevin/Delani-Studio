$(Document).ready(function () {
	// click to toggle
	$('.imageDesign').hover(function () {
		$('.imageDesign').toggle();
		$('.textDesign').toggle();
	});
	$('.imageDev').hover(function () {
		$('.textDev').toggle();
		$('.imageDev').toggle();
	});
	$('.imageProdman').hover(function () {
		$('.textProdman').toggle();
		$('.imageProdman').toggle();
	});

	
	
	
	// hover to pop up project name
	$('.portfolio1').hover(function(){
		$('.overlay1').toggle();
	});
	$('.portfolio2').hover(function(){
		$('.overlay2').toggle();
	});
	$('.portfolio3').hover(function(){
		$('.overlay3').toggle();
	});
	$('.portfolio4').hover(function(){
		$('.overlay4').toggle();
	});
	$('.portfolio5').hover(function(){
		$('.overlay5').toggle();
	});
	$('.portfolio6').hover(function(){
		$('.overlay6').toggle();
	});
	$('.portfolio7').hover(function(){
		$('.overlay7').toggle();
	});
	$('.portfolio8').hover(function(){
		$('.overlay8').toggle();
	});

	

	// form data and alert message to user sending message

	// $('.contact form').submit(function (event) {
	// 	var contactName = $('#name').val();
	// 	var contactEmail = $('#email').val();
	// 	var contactMessage = $('#message').val();
	// 	alert(
	// 		'Hi ' +
	// 			contactName +
	// 			'. Thank you for contacting Delani Studio. We will get back to you as soon as possible.'
	// 	);

		// event.preventDefault();
	// });
});
