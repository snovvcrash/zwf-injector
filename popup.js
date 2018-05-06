$(document).ready(function() {
	$('#inject').click(function() {
		var message = $('#message').val();
		var fingerprint = $('#fingerprint').val();

		if (message && $.trim(fingerprint)) {
			$('#result').val(inject(message, fingerprint));
		}
	});

	$('#extract').click(function() {
		var message = $('#message').val();

		if (message.includes(ZWSP) || message.includes(ZWNJ) || message.includes(ZWJ)) {
			$('#result').val(extract(message));
		}
	});

	$('#clear').click(function() {
		$('#message').val('')
		$('#fingerprint').val('')
		$('#result').val('')
	});
});
