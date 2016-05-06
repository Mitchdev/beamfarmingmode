console.log('waiting for beam to load.');
setTimeout(function() {
	console.log('farming mode is now running.');
	$('.be-channel-page__btns').append('<div class="be-u-m--l1 ng-scope"><button class="md-raised md-small md-primary md-button ng-scope md-ink-ripple" onclick="farmingmode();"><span>Farming Mode</span></button></div>');
	function farmingmode() {
		$('.be-navbar__dashboardbutton .be-button').click();
		$('head').append('<link rel="stylesheet" href="https://rawgit.com/Mitchdev/beamfarmingmode/master/main.css">');
		$('.text-center').append('<span onclick="exitfarmingmode();">Exit Farming Mode</span>');
	}
	function exitfarmingmode() {
		parent.history.back();
		$('.exitfarmingmode').remove();
		$('.farmingmodecss').remove();
	}
}, 6000);
