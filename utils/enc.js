const zeroPad = binary => '00000000'.slice(binary.length) + binary;

const textToBinary = text => (
	text.split('').map(char => zeroPad(char.charCodeAt(0).toString(2))).join(' ')
);

const binaryToZeroWidth = binary => (
	binary.split('').map((binaryNum) => {
		if (binaryNum === '1') {
			return '\u200c';
		}
		else if (binaryNum === '0') {
			return '\u200d';
		}
		return '\u200b'; /* if space */
	}).join('')
);

const inject = (message, fingerprint) => (
	message.slice(0, -1) + binaryToZeroWidth(textToBinary(fingerprint)) + message.slice(-1)
);
