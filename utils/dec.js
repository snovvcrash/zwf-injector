const zeroWidthToBinary = zeroWidth => (
	zeroWidth.split('').map((char) => {
		if (char === '\u200c') {
			return '1';
		}
		else if (char === '\u200d') {
			return '0';
		}
		return ' ';
	}).join('')
);

const binaryToText = binary => (
	binary.split(' ').map(num => String.fromCharCode(parseInt(num, 2))).join('')
);

const extract = message => {
	const fingerprint = message.split('').filter(char => (
		char === '\u200b' || char === '\u200c' || char === '\u200d'
	)).join('');
	
	return binaryToText(zeroWidthToBinary(fingerprint));
}
