function transform(min, alpha, factor) {
	return String.fromCharCode(((alpha - min + factor) % 26) + min);
}

function caesarCipher(str, factor) {
	let newStr = '';

	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		if (char.match(/[a-z]/i)) {
			let alpha = str.charCodeAt(i);
			newStr += alpha >= 65 && alpha <= 90 ? transform(65, alpha, factor) : transform(97, alpha, factor);
		} else {
			newStr += char;
		}
	}
	return newStr;
}

export { caesarCipher, transform };