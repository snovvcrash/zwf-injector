const zeroPad = binary => '00000000'.slice(binary.length) + binary;

const textToBinary = text => (
	text.split('').map(char => zeroPad(char.charCodeAt(0).toString(2))).join('')
);

const binaryToZeroWidth = binary => (
	binary.split('').map(char => char === '1' ? '\u200c' : '\u200d').join('')
);

const inject = (message, fingerprint) => (
	message.slice(0, -1) + binaryToZeroWidth(textToBinary(fingerprint)) + message.slice(-1)
);
