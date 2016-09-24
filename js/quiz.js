
//GOAL: Open lightbox when user checks "I don't like pasta option"
//1. user clicks 3rd radio button

$(document).ready(function(){
	$('#noPasta').click(function(e){
		e.preventDefault();
		if ($('#noPasta').val() === "c"){
			console.log('happening')
			var lightbox = 
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="https://cdn4.dogonews.com/images/4608011a-7a08-4720-9e40-a4e28b0ebedd/summer_time-1455175.jpg"/>' +
				'</div>' +	
			'</div>';
				
			//insert lightbox HTML into page
			$('body').prepend(lightbox);
		}

	//Click anywhere on the page to get rid of lightbox window
	$('#lightbox').on('click', function() {
		$('#lightbox').hide();	
	});
	
	});

});