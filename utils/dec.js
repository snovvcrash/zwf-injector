const zeroWidthToBinary = zeroWidth => (
	zeroWidth.split('').map((char) => {
		if (char === ZWNJ) {
			return '1';
		}
		else if (char === ZWJ) {
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
		char === ZWSP || char === ZWNJ || char === ZWJ
	)).join('');
	
	return binaryToText(zeroWidthToBinary(fingerprint));
}
