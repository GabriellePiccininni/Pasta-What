//GOAL: When user submits the form, make sure that the name, email, and password fields are filled out

//1. user types name, email, and password


//2. user submites the form (a submit event)
$(document).ready(function(){

	$('form').submit(validateForm);

	function validateForm() {	
		event.preventDefault(); 

	//3. If a field is empty, show am error.
		
		var name = $('#name').val(); 
		var email = $('#email').val();
		var password = $('#password').val();

			if (name == '') {   //if the first name field is empty
				$("#nameErrorMessage").slideDown();	
			} if (email == '') {
				$("#emailErrorMessage").slideDown();	
			} 

	}
});