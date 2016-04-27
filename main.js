console.log('waiting for beam to load.');
setTimeout(function() {
	//var username;
	console.log('farming mode is now running.');
	//username = $('.be-user-name').text;
	$('.a-d-3').append('<a style="display: none;" class="farmingmode be-button be-channel-page__nav__menuitem md-ink-ripple">Farming Mode<div class="md-ripple-container"></div></a>');
	$('.farmingmode').fadeToggle('slow');
	$('.farmingmode').on('click', function() {
		$('.be-navbar__dashboardbutton .be-button').click();
		$('head').append('<link class="farmingmodecss" rel="stylesheet" href="https://mitchdev.github.io/beamfarmingmode/main.css">');
		$('.text-center').append('<br><br><br><a style="font-size: 25px;" class="exitfarmingmode">Exit Farming Mode</a>');
		$('.exitfarmingmode').on('click', function() {
			//location.href = 'https://beam.pro/'+username;
			parent.history.back();
			$('.exitfarmingmode').remove();
			$('.farmingmodecss').remove();
		});
	});
}, 4000);
