console.log('waiting for beam to load.');
setTimeout(function() {
	console.log('farming mode is now running.');
	$('.be-channel-page__btns').append('<div class="farmingmode be-u-m--l1 ng-scope"><button style="background-color: rgba(255,255,255,0.3)" class="md-small md-button ng-scope md-ink-ripple"><span>Farming Mode</span></button></div>');
	$('.farmingmode').on('click', function() {
		$('.be-hub').addClass('be-hub--active');
		$('.be-hub__menu').find('.be-u-m--t1').children().first().find('.md-ink-ripple').click();
		$('head').append('<link rel="stylesheet" href="https://rawgit.com/Mitchdev/beamfarmingmode/master/main.css">');
		$('.a-d-3').prepend('<div class="exitbfm"><button style="background-color: rgba(255,255,255,0.3)" class="btn-fixed-size-medium md-button md-ink-ripple" type="button"><span class="ng-scope">Exit Farming Mode</span></button></div>');
	});
	$('body').on('click', '.exitbfm', function() {
		parent.history.back();
		$('.exitfm').remove();
		$('.farmingmodecss').remove();
	});
}, 6000);
