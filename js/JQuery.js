$('#return-to-top').click(function() {      
    	$('body,html').animate({
       		scrollTop : 0                    
    	}, 1500);
	});

$(document).ready(function() {
	$('nav a').on('click', function(event) {
		if(this.hash !== '') {
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
				}, 800, function() {
					window.location.hash = hash;
			});
		}
	});

});


