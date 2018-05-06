const zeroWidthToBinary = zeroWidth => (
	zeroWidth.split('').map(char => char === '\u200c' ? '1' : '0').join('')
);

const binaryToText = binary => (
	binary.match(/.{1,8}/g).map(num => String.fromCharCode(parseInt(num, 2))).join('')
);

const extract = message => {
	const fingerprint = message.split('').filter(char => {
		if (char === '\u200c' || char === '\u200d') {
			return char
		}
	}).join('');
	
	return binaryToText(zeroWidthToBinary(fingerprint));
}
