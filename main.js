console.log('waiting for beam to load.');
setTimeout(function() {
	console.log('farming mode is now running.');
	function append() {
		$('.farmingmode').remove();
		$('.be-channel-page__btns').append('<div class="farmingmode be-u-m--l1 ng-scope"><button style="background-color: rgba(255,255,255,0.3)" class="md-small md-button ng-scope md-ink-ripple"><span>Farming Mode</span></button></div>');
	}
	append();
	$('.farmingmode').on('click', function() {
		$('.be-hub').addClass('be-hub--active');
		$('.be-hub__menu').find('.be-u-m--t1').children().first().find('.md-ink-ripple').click();
		$('head').append('<link class="farmingmodecss" rel="stylesheet" href="https://mitchdev.github.io/beamfarmingmode/main.css">');
		$('.a-d-3').prepend('<div class="exitbfm"><button style="background-color: rgba(255,255,255,0.3)" class="btn-fixed-size-medium md-button md-ink-ripple" type="button"><span class="ng-scope">Exit Farming Mode</span></button></div>');
	});
	$('body').on('click', '.t-d-4 .layout-wrap b-browse-card md-card', function() {
		setTimeout(function() {
			append();
		}, 3000);
	});
	$('body').on('click', '.exitbfm', function() {
		parent.history.back();
		$('.be-hub').removeClass('be-hub--active');
		$('.exitfm').remove();
		$('.farmingmodecss').remove();
	});
}, 6000);
