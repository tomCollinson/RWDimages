
(function($) {
	$.fn.responsive = function( options ) {
		
		var settings = $.extend({
			imgClass  :  '.img-responsive',
			containerClass : '.rwdimg',
			fadeLoad : false,
			mobile : 360,
			tablet : 620,
			desktop	: 900
		}, options);
		
		function newUrl (breakpoint){
				var src = $(settings.imgClass).data('src');
				var path = src.substring(0,src.lastIndexOf('/')); 
				var fileName = src.substring(src.lastIndexOf('/'));	
				var fileExtn = src.substring(src.lastIndexOf('.'));
				var fileNameReplace = src.substring(src.lastIndexOf('_'));
				var newSrc = path+fileName.replace(fileNameReplace, "_" + breakpoint + fileExtn);	
				return newSrc;
		}
		
		function updateUrl (breakpoint){ 
			$(settings.imgClass).each(function(){
			
				var newSrc = newUrl(breakpoint);
				$(this).closest(settings.containerClass).html("<img src='" + newSrc + "'  class='rwdimg-replaced' />");
				
				// If the user has set the images to fade in once loaded
				if (settings.fadeLoad) {
					$('.rwdimg-replace').load(function(){
						$('.rwdimg-replace').hide().css({visibility: "visible"}).fadeIn("slow");
					});
				} // end if
			
			});
		}
		
		function changeMedia (){
			var width = $(window).width();
			if (width < settings.tablet){
						updateUrl(settings.mobile);
					};
			if (width >= settings.tablet && width < settings.desktop){
						updateUrl(settings.tablet);
					};
			if (width >= settings.desktop){
						updateUrl(settings.desktop);
					};
		}	

		// Run script when the page is loaded
		$(window).on("load", function(){
				changeMedia();
		}); 
	}
}(jQuery));
