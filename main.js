console.log('waiting for beam to load.');
setTimeout(function() {
	console.log('farming mode is now running.');
	$('.be-channel-page__nav__section be-channel-page__btns').append('<div class="ng-scope" onclick="farmingmode();"><b id="$vm.channel.id" class="ng-isolate-scope"><div ng-mouseenter="$vm.hover = true" ng-mouseleave="$vm.hover = false"><span class="ng-scope"><button class="md-raised md-small md-primary md-button ng-scope md-ink-ripple" type="button"><div style="width: 75px" class="ng-scope"><span class="ng-scope"><span class="icon-heart-full"></span> <span class="hide-md">Farming Mode</span></span></div><div class="md-ripple-container"></div></button></span></div></b></div>');
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
