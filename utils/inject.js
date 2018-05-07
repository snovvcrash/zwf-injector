const zeroPad = binary => '00000000'.slice(binary.length) + binary;

const textToBinary = text => (
	text.split('').map(char => zeroPad(char.charCodeAt(0).toString(2))).join(' ')
);

const binaryToZeroWidth = binary => (
	binary.split('').map((binaryNum) => {
		if (binaryNum === '1') {
			return ZWNJ;
		} else if (binaryNum === '0') {
			return ZWJ;
		}
		return ZWSP;  /* if space */
	}).join('')
);

const inject = (message, fingerprint) => (
	binaryToZeroWidth(textToBinary(fingerprint)) + message
);
