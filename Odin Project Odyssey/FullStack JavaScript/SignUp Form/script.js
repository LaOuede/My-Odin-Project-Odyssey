const form = document.querySelector('form');

const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
const regexPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validateFirstname = (input, regex) => {
	if (!regex.test(input.value)) {
		alert('First name can only contain letters, accents, apostrophes, and hyphens.');
		input.value = '';
		return false;
	}
	return true;
}

const validateLastname = (input, regex) => {
	if (!regex.test(input.value)) {
		alert('Last name can only contain letters, accents, apostrophes, and hyphens.');
		input.value = '';
		return false;
	}
	return true;
}

const validatePassword = (input, regex) => {
	if (!regex.test(input.value)) {
		alert('Password must be at least 8 characters long, contain at least one \
			uppercase letter, one lowercase letter, one number, and one special character.');
		input.value = '';
		return false;
	}
	return true;
}

const validatePasswordMatch = (pwd1, pwd2) => {
	if (pwd1.value != pwd2.value) {
		alert('Passwords do not match.');
		pwd1.value = '';
		pwd2.value = '';
		return false;
	}
	return true;
}

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const firstname = document.getElementById('firstname');
	const lastname = document.getElementById('lastname');
	const pwd = document.getElementById('password');
	const pwdVal = document.getElementById('password_validation');

	const firstnameValidation = validateFirstname(firstname, regexName);
	const lastnameValidation = validateLastname(lastname, regexName);
	const passwordValidation = validatePassword(pwd, regexPwd);
	const passwordMatch = validatePasswordMatch(pwd, pwdVal);

	if (firstnameValidation && lastnameValidation
		&& passwordValidation && passwordMatch) {
		form.reset();
		alert('Your account have been successfully created');
	}
});