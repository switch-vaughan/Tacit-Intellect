(function($){
	$(document).ready(function(){
		$("#menu > li").hover(
			function(){
				$(this).has('ul').addClass('hasSub');
				$(this).children('.sub').toggle();
			}, 
			function(){
				$(this).removeAttr('class');
				$(this).children('.sub').toggle();
			}
		)
		
		$('#search input').val('Search this site');
		
		$('#search input').click(
			function(){
				if($(this).val() == 'Search this site'){
					$(this).val('');
				}
			}
		)
		
		$('#search input').blur(
			function(){
				if($(this).val() == ''){
					$(this).val('Search this site');
				}
			}
		)
		
		if($('.content-wrapper.home').length > 0){
			$('#slideshow ul').carouFredSel({
				scroll : {
					fx : 'fade'
				},
				pagination : {
					container : '#slidanation',
					anchorBuilder	: function(nr, item) {
						return '<li></li>';
					}
				}
			})
		}
		
		$('#general-email').html('<a href="mailto:info@tacitintellect.co.za">info@tacitintellect.co.za</a>');
		
		if($('#google-map').length > 0){
			var myLatlng = new google.maps.LatLng(-26.054161,28.064575);
			var myOptions = {
				zoom: 15,
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			var map = new google.maps.Map(document.getElementById('google-map'), myOptions);
			
			var marker = new google.maps.Marker({
				position: myLatlng, 
				map: map, 
				title: 'Tacit Intellect'
			})
		}
		
		$('.form input[type=submit]').bind('click', function(){
			$(document).formSubmit($(this));
		})
	})
	
	$.fn.formSubmit = function($this){
		if($this.val() == 'Submit'){
			var $submit = true;
			
			$('.form .required').each(function(){
				if($(this).val() == ''){
					$(this).focus();
					$( "#alert" ).dialog();
					alert('Please enter required fields: ' + $(this).attr('id'));
					$submit = false;
					return false;
				}
			})
			
			if($submit){
				$('.form').wrapInner('<form action="" method="post">');
			}
		} else if($this.val() == 'Reset'){
			$('.form input[type=text]').val('');
			$('.form input[type=radio]').attr('checked', false);
			$('.form textarea').val('');
		}
	}
})(jQuery);