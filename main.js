console.log('waiting for beam to load.');
setTimeout(function() {
	console.log('farming mode is now running.');
	$('.a-d-3').append('<a style="display: none;" class="farmingmode be-button be-channel-page__nav__menuitem md-ink-ripple">Farming Mode<div class="md-ripple-container"></div></a>');
	$('.farmingmode').fadeToggle('slow');
	$('.farmingmode').on('click', function() {
		$('.be-navbar__dashboardbutton .be-button').click();
		$('head').append('<link rel="stylesheet" href="https://mitchdev.github.io/beamfarmingmode/main.css">');
		$('.text-center').append('<br><br><br><a style="display: none;font-size: 25px;" onclick="exitfarmingmode();">Exit Farming Mode</a>');
	});
	function exitfarmingmode() {
		parent.history.back();
		$('.exitfarmingmode').remove();
		$('.farmingmodecss').remove();
	}
}, 4000);
