const form = document.getElementById('form');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fnameValue = firstName.value.trim();
	const lnameValue = lastName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	if(fnameValue === '') {
		setErrorFor(firstName, 'First Name cannot be empty');
	} else {
		setSuccessFor(firstName);
	}

  if(lnameValue === '') {
		setErrorFor(lastName, 'Last Name cannot be empty');
	} else {
		setSuccessFor(lastName);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be empty');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Looks like this is not an email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be empty');
	} else {
		setSuccessFor(password);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
