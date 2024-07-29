function reverseString(str) {
	if (str) {
		let newString = "";
		for (let i = str.length - 1; i >= 0; i--) {
			newString += str[i];
		}
		return newString;
	}
	return null;
}

export default reverseString;