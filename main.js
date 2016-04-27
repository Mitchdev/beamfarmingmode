console.log('waiting for beam to load.');
setTimeout(function() {
	console.log('farming mode is now running.');
	$('.a-d-3').append('<a onclick="farmingmode();" class="be-button be-channel-page__nav__menuitem md-ink-ripple">Farming Mode<div class="md-ripple-container"></div></a>');
	function farmingmode() {
		$('.be-navbar__dashboardbutton .be-button').click();
		$('head').append('<link rel="stylesheet" href="https://mitchdev.github.io/beamfarmingmode/main.css">');
		$('.text-center').append('<span onclick="exitfarmingmode();">Exit Farming Mode</span>');
	}
	function exitfarmingmode() {
		parent.history.back();
		$('.exitfarmingmode').remove();
		$('.farmingmodecss').remove();
	}
}, 6000);
