
// Exercise 7
function validate() {

	// Avoid reload form after submit

	var form = document.getElementById("myForm");
	function handleForm(event) { event.preventDefault(); } 
	form.addEventListener('submit', handleForm);


	// Initialize variable to validate the input fields

	var error = 0;


	// Get the input fields

	var fName = document.getElementById("fName").value;
	var fLastN = document.getElementById("fLastN").value;
	var fAddress = document.getElementById("fAddress").value;
	var fEmail = document.getElementById("fEmail").value;
	var fPassword = document.getElementById("fPassword").value;
	var fPhone = document.getElementById("fPhone").value;

	
	// Regular expressions for validate elements
		
	var valName = !/^[A-Za-z]+$/; // Only letters
	var valLastN = !/^[A-Za-z]+$/; // Only letters
	var valEmail = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Email format
	var valPassword = !/^(?=.*[0-9])(?=.*[A-Za-z])+$/; // Letters and numbers
	var valPhone = !/^[0-9]+$/; // Only numbers


	// Get the error elements

	var errorName = document.getElementById("errorName");
	var errorLastN = document.getElementById("errorLastN");  
	var errorAddress = document.getElementById("errorAddress");  
	var errorEmail = document.getElementById("errorEmail");  
	var errorPassword = document.getElementById("errorPassword");  
	var errorPhone = document.getElementById("errorPhone");  

	
	// Validate fields entered by the user: name, phone, password, and email
	
	if (( fName == "" ) || ( fName < 3 ) || ( fName.match(valName) )) {

		error++;
		document.getElementById("fName").style.borderColor = "#ff9aa4";
		errorName.style.display = "flex";

	} else {

		error = 0;
		document.getElementById("fName").style.borderColor = "#54dc35";
		errorName.style.display = "none";
	}
	

	if (( fLastN == "" ) || ( fLastN < 3 ) || ( fLastN.match(valLastN) )) {

		error++;
		document.getElementById("fLastN").style.borderColor = "#ff9aa4";
		errorLastN.style.display = "flex";

	} else {

		error = 0;
		document.getElementById("fLastN").style.borderColor = "#54dc35";
		errorLastN.style.display = "none";
	}


	if ( fAddress == "" ) {

		error++;
		document.getElementById("fAddress").style.borderColor = "#ff9aa4";
		errorAddress.style.display = "flex";

	} else {

		error = 0;
		document.getElementById("fAddress").style.borderColor = "#54dc35";
		errorAddress.style.display = "none";
	}


	if (( fEmail == "" ) || ( fEmail < 3 ) || ( fEmail.match(valEmail) )) {

		error++;
		document.getElementById("fEmail").style.borderColor = "#ff9aa4";
		errorEmail.style.display = "flex";

	} else {

		error = 0;
		document.getElementById("fEmail").style.borderColor = "#54dc35";
		errorEmail.style.display = "none";
	}


	if (( fPassword == "" ) || ( fPassword < 3 ) || ( fPassword.match(valPassword) )) {

		error++;
		document.getElementById("fPassword").style.borderColor = "#ff9aa4";
		errorPassword.style.display = "flex";

	} else {

		error = 0;
		document.getElementById("fPassword").style.borderColor = "#54dc35";
		errorPassword.style.display = "none";
	}


	if (( fPhone == "" ) || ( fPhone < 3 ) || ( fPhone.match(valPhone) )) {

		error++;
		document.getElementById("fPhone").style.borderColor = "#ff9aa4";
		errorPhone.style.display = "flex";

	} else {

		error = 0;
		document.getElementById("fPhone").style.borderColor = "#54dc35";
		errorPhone.style.display = "none";
	}

	if ( error == 0 ) {

		//document.getElementById("myForm").submit();
	}
}