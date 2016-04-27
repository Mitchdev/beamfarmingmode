$('.a-d-3').append('<a onclick="farmingmode();" class="be-button be-channel-page__nav__menuitem md-ink-ripple">Farming Mode<div class="md-ripple-container"></div></a>');
function farmingmode() {
	$('.be-navbar__dashboardbutton .be-button').click();
	$('head').append('<link rel="stylesheet" href="https://rawgit.com/Mitchdev/beamfarmingmode/master/main.css">');
	$('body').append('<a onclick="exitfarmingmode();" class="exitfarmingmode be-button be-channel-page__nav__menuitem md-ink-ripple">Exit Farming Mode<div class="md-ripple-container"></div></a>');
}
function exitfarmingmode() {
	parent.history.back();
	$('.exitfarmingmode').remove();
	$('.farmingmodecss').remove();
}
