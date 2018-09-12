		$(function(){
			$('ul.ul').children('li').click(function(){
			$(this).addClass('one');
			$(this).siblings().removeClass('one')
			})
			var coun=0;
			$('div.p_one').click(function(){
				coun++;
				console.log(coun)
				if(coun%2 ==0){
					$('div.p_two').hide();$('div.p_one').children('p').html('首页')
				}else{$('div.p_two').show();$('div.p_one').children('p').html('关闭');$('div.p_one span').rotate({angle:0,animateTo:180})}
				
			})
		$(".slider-container").ikSlider({
		  speed: 500
		});
		$(".slider-container").on('changeSlide.ikSlider', function (evt) { });
		var $preview = $('.preview a');
		function changeActivePreview(i) {
		  $('.active').removeClass('active');
		  $preview.eq(i).addClass('active');
		}

		$preview.on('click', function(e) {
		  e.preventDefault();
		  var index = $(this).index();
		  $('.slider-container').ikSlider(index);
		});

		$('.slider-container').on('changeSlide.ikSlider', function(e) {
		  changeActivePreview(e.currentSlide);
		});

		changeActivePreview(0)
		var n;
		console.log($('div.two ul li'))
		$('div.two ul li').mouseenter(function(){
			$(this).addClass('action').siblings().removeClass('action');
			n = $(this).index();
			console.log(n)
			$('div.one').children('img').attr('src','img/sbl'+n+'.png');


		})
		$('div.box ul li').mouseenter(function(){
				$(this).children('div.c').children('span').css({width:'70%',height:'80%',margin:'10% 15%',border:'2px solid #cd1a1a'});
			})
			$('div.box ul li').mouseleave(function(){
				$(this).children('div.c').children('span').css({width:'99%',height:'99%',margin:'0',border:'1px solid transparent'});
			})
		})
		
