console.log('waiting for beam to load.');
setTimeout(function() {
	console.log('farming mode is now running.');
	var sparks = false;
	function append() {
		$('.farmingmode').remove();
		$('.be-channel-page__btns').append('<div class="farmingmode be-u-m--l1 ng-scope"><button style="background-color: rgba(255,255,255,0.3)" class="md-small md-button ng-scope md-ink-ripple"><span>Farming Mode</span></button></div>');
	}
	append();
	$('.farmingmode').on('click', function() {
		$('.be-hub').addClass('be-hub--active');
		$('.be-hub__menu').find('.be-u-m--t1').children().first().find('.md-ink-ripple').click();
		$('head').append('<link class="farmingmodecss" rel="stylesheet" href="https://mitchdev.github.io/beamfarmingmode/main.css">');
		$('.dash-content').find('.a-d-3').prepend('<div class="exitbfm"><button style="background-color: rgba(255,255,255,0.3)" class="btn-fixed-size-medium md-button md-ink-ripple" type="button"><span class="ng-scope">Exit Farming Mode</span></button></div>');
		$('.text-center.be-u-m--t4.a.fadeInLeft.a-d-2').append('<div class="bfm-sparks be-user-bar be-u-m--b1"><div class="be-user-bar__inner" style="width: 0%;margin-top: 50px;background: #fff;box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);"></div></div><small class="bfm-sparks-small ng-scope">4 <span class="icon-spark"></span> in 0s</small>');
		sparks = true;
	});
	setInterval(function() {
		var second = $('.be-hub__section--points .be-hub__section__item').find('.flex-2 small').text().slice(-6, -1);
		var progress = $('.be-hub__section--points .be-hub__section__item').find('.flex-2 .md-white').attr('aria-valuenow');
		var amount = $('.be-hub__section--points .be-hub__section__item').find('div:not(.flex-2) span.ng-binding').text();
		var sparks = $('.be-hub__section--points .be-hub__section__item').find('.flex-2 small span.ng-binding').text();
		if (sparks) {
			$('.bfm-sparks div').css('width', progress+'%');
			$('.bfm-sparks-small').html(sparks+' <span class="icon-spark"></span> '+second+'s');
			$('.be-user-sparks.be-user-sparks__progress.a.fadeInLeft.a-d-1 b').text(amount);
		}
	}, 1000);
	$('body').on('click', '.t-d-4 .layout-wrap b-browse-card md-card', function() {
		setTimeout(function() {
			append();
		}, 3000);
	});
	$('body').on('click', '.exitbfm', function() {
		sparks = false;
		parent.history.back();
		$('.be-hub').removeClass('be-hub--active');
		$('.exitfm').remove();
		$('.bfm-sparks-small').remove();
		$('.bfm-sparks').remove();
		$('.farmingmodecss').remove();
	});
}, 6000);
