(function($) {
  $.fn.responsive = function( options ) {
    // Default Settings
		var settings = $.extend({
			imgClass	:	'img-responsive',
			mobile : 360,
			tablet : 780,
			desktop	: 900
		}, options);
		
		function updateUrl (breakpoint){ 
			$(settings.imgClass).each(function(){
			var src = $(settings.imgClass).data('src');
			var path = src.substring(0,src.lastIndexOf('/'));
			var fileName = src.substring(src.lastIndexOf('/'));
			var fileExtn = src.substring(src.lastIndexOf('.'));
			var fileNameReplace = src.substring(src.lastIndexOf('_'));
			var newSrc = path+fileName.replace(fileNameReplace, "_" + breakpoint + fileExtn);	// build the new source string
			console.log(newSrc);
			$(this).closest('.media').html("<img src='" + newSrc + "'  class='img-replace' style='visibility:hidden'/>");
			$('.img-replace').load(function(){
				$('.img-replace').hide().css({visibility: "visible"}).fadeIn("slow");
			});
			
			});
		}
		function changeMedia (){
		/*
			changeMedia() identifies the current window width, compares it to
			the user-set breakpoints and calls updateURL(), supplying it with the
			breakpoint it should work with.
		*/
		if ($(window).width() < settings.tablet){
					updateUrl(settings.mobile);
				};
		if ($(window).width() >settings.tablet && $(window).width() < settings.desktop){
					updateUrl(settings.tablet);
				};
		if ($(window).width() >= settings.desktop){
					updateUrl(settings.desktop);
				};
		}	
		$(window).on("load", function(){
				changeMedia();
		}); 
	}
}(jQuery));
