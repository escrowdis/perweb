( function() {

	var youtube = document.querySelectorAll( ".youtube" );
	
	for (var i = 0; i < youtube.length; i++) {
        
        // Unknown why some thumbnails acquired from Youtube with suffix sddefault.jpg is unavailable
		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/0.jpg";
		
		var image = new Image();
				image.src = source;
				image.addEventListener( "load", function() {
					youtube[ i ].appendChild( image );
				}( i ) );
		
				youtube[i].addEventListener( "click", function() {

					var iframe = document.createElement( "iframe" );

							iframe.setAttribute( "frameborder", "0" );
							iframe.setAttribute( "allowfullscreen", "" );
							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

							this.innerHTML = "";
							this.appendChild( iframe );
				} );	
	};
	
} )();

// Attach this to html
// <!-- (1) video wrapper -->
// <div class="youtube" data-embed="rcPLKO-TGfQ">
//     <!-- (2) the "play" button -->
//     <div class="play-button"></div> 
// </div>