
	//GOAL: redirect to URL when user checks "I don't like pasta option"
	//1. user clicks 3rd radio button

	// $('#noPasta').click(redirect);

		$('#noPasta').ekkoLightbox(options);

	//2. Browser redirects
	function redirect() {
		event.preventDefault(); 
		window.location.href = 'https://media.giphy.com/media/l2R05FZf4dVOrgIaQ/giphy.gif';
	};
});

