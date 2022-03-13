$(Document).ready(function () {
	// click to toggle
	$('.imageDesign').click(function () {
		$('.textDesign').toggle();
		$('.imageDesign').toggle();
	});
	$('.imageDev').click(function () {
		$('.textDev').toggle();
		$('.imageDev').toggle();
	});
	$('.imageProdman').click(function () {
		$('.textProdman').toggle();
		$('.imageProdman').toggle();
	});

	// hover to pop up project name
	
		$('.snake').snakeify({
			speed: 130
		});
	

	// form data and alert message to user sending message

	$('.contact form').submit(function (event) {
		var contactName = $('#name').val();
		var contactEmail = $('#email').val();
		var contactMessage = $('#message').val();
		alert(
			'Hi ' +
				contactName +
				'. Thank you for contacting Delani Studio. We will get back to you as soon as possible.'
		);

		event.preventDefault();
	});
});
