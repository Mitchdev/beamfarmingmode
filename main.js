console.log('waiting for beam to load.');
setTimeout(function() {
	console.log('farming mode is now running.');
	append();
	function append() {
		$('.be-channel-page__btns').append('<div class="farmingmode be-u-m--l1 ng-scope"><button class="md-small md-no-spacing md-button md-ink-ripple"><span>Farming Mode</span></button></div>');
	}
	$('.farmingmode').on('click', function() {
		$('.be-hub').addClass('be-hub--active');
		$('.be-hub__menu').find('.be-u-m--t1').children().first().find('.md-ink-ripple').click();
	//	$('head').append('<link rel="stylesheet" href="https://rawgit.com/Mitchdev/beamfarmingmode/master/main.css">');
	//	$('.text-center').append('<span onclick="exitfarmingmode();">Exit Farming Mode</span>');
	});
	//function exitfarmingmode() {
	//	parent.history.back();
	//	$('.exitfarmingmode').remove();
	//	$('.farmingmodecss').remove();
	//}
}, 6000);
