$('.a-d-3').append('<a onclick="farmingmode();" class="be-button be-channel-page__nav__menuitem md-ink-ripple">Farming Mode<div class="md-ripple-container"></div></a>');
function farmingmode() {
	$('.be-navbar__dashboardbutton .be-button').click();
	$('head').append('<link rel="stylesheet" href="https://raw.githubusercontent.com/Mitchdev/beamfarmingmode/master/main.css">')
}
$('.be-navbar__logo').on('click', function() {
	$('.farmingmodecss').remove();	
});
