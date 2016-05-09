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
		sparks = true;
	});
	setInterval(function() {
		var amount = $('.be-hub__section--points .be-hub__section__item').find('.flex-2 small .ngbinding').text();
		var second = $('.be-hub__section--points .be-hub__section__item').find('.flex-2 small').text();
		var progress = $('.be-hub__section--points .be-hub__section__item').find('.flex-2 md-progress-linear').attr('value');
		if (sparks) {
			$('.bfm-sparks').remove();
			$('.text-center.be-u-m--t4.a.fadeInLeft.a-d-2').append('<div class="bfm-sparks be-user-bar be-u-m--b1"><div class="be-user-bar__inner" style="width: '+progress+'%;margin-top: 50px;background: #fff;box-shadow: 0 0 3px rgba(255, 255, 255, 0);"></div></div><small class="ng-binding ng-scope"><span class="ng-binding">'+amount+'<span class="icon-spark"></span></span> in '+second+'s</small>');
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
		$('.bfm-sparks').remove();
		$('.farmingmodecss').remove();
	});
}, 6000);
