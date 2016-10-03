
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
					'<img src="http://media1.giphy.com/media/l2R05FZf4dVOrgIaQ/giphy.gif"/>' +
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


	$('#godfather').click(function(e){
		e.preventDefault();
		if ($('#godfather').val() === i){
			console.log('happening')
			var lightbox = 
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<iframe width="560" height="315" src="https://www.youtube.com/embed/ppjyB2MpxBU" frameborder="0" allowfullscreen></iframe>' +
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


	$('#ladyTramp').click(function(e){
		e.preventDefault();
		if ($('#ladyTramp').val() === "b"){
			console.log('happening')
			var lightbox = 
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<iframe width="560" height="315" src="https://www.youtube.com/embed/RzW4PH68KG4" frameborder="0" allowfullscreen></iframe>' +
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


	$('#goodfellas').click(function(e){
		e.preventDefault();
		if ($('#goodfellas').val() === "c"){
			console.log('happening')
			var lightbox = 
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<iframe width="560" height="315" src="https://www.youtube.com/embed/yztx8qfoNu0" frameborder="0" allowfullscreen></iframe>' +
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


	$('#elf').click(function(e){
		e.preventDefault();
		if ($('#elf').val() === "d"){
			console.log('happening')
			var lightbox = 
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<iframe width="560" height="315" src="https://www.youtube.com/embed/gUZSzHhXfc0" frameborder="0" allowfullscreen></iframe>' +
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











