$(document).ready(function() {
	$('#inject').click(function() {
		var message = $('#messagePlain').val();
		var fingerprint = $('#fingerprint').val();

		if (message && $.trim(fingerprint)) {
			$('#injected').val(inject(message, fingerprint));
		}
	});

	$('#clearInjected').click(function() {
		$('#messagePlain').val('')
		$('#fingerprint').val('')
		$('#injected').val('')
	});

	$('#extract').click(function() {
		var message = $('#messageWithSecret').val();

		if (message) {
			$('#extracted').val(extract(message));
		}
	});

	$('#clearExtracted').click(function() {
		$('#messageWithSecret').val('')
		$('#extracted').val('')
	});
});
