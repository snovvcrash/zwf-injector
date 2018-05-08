const zeroWidthToBinary = zeroWidth => (
	zeroWidth.split(ZWNBSP).map((char) => {
		if (char === ZWNJ) {
			return '1';
		} else if (char === ZWJ) {
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
		[ZWSP, ZWNJ, ZWJ, ZWNBSP].includes(char)
	)).join('');

	return binaryToText(zeroWidthToBinary(fingerprint));
}
