function site_search(){
		jQuery('a[href="#search"]').on('click', function(event) {                    
		jQuery('#search').addClass('open');
		jQuery('#search > form > input[type="search"]').focus();
	});
				
	jQuery('#search, #search button.close').on('click keyup', function(event) {
		if (event.target === this || event.target.className === 'close') {
			jQuery(this).removeClass('open');
		}
	});  
 }	
function sticky_header(){
	if(jQuery('.sticky-header').length){
		var sticky = new Waypoint.Sticky({
		  element: jQuery('.sticky-header')
		})
	}
}
function scroll_top(){
	jQuery("button.scroltop").on('click', function() {
		jQuery("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	jQuery(window).on("scroll", function() {
		var scroll = jQuery(window).scrollTop();
		if (scroll > 900) {
			jQuery("button.scroltop").fadeIn(1000);
		} else {
			jQuery("button.scroltop").fadeOut(1000);
		}
	});

}
function mobile_nav(){
	jQuery(".sub-menu").parent('li').addClass('has-child');
	jQuery(".mega-menu").parent('li').addClass('has-child');
	jQuery("<div class=' glyphicon glyphicon-plus submenu-toogle'></div>").insertAfter(".has-child > a");
	jQuery('.has-child a+.submenu-toogle').click(function(ev) {
		jQuery(this).next(jQuery('.sub-menu')).slideToggle('fast', function(){
			jQuery(this).parent().toggleClass('nav-active');
		});
		ev.stopPropagation();
	});
}



	sticky_header();
	scroll_top();
	mobile_nav();
	site_search();
	
	
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js?v=18222hiun')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}


$(function(){ 
	$('#autoAdsMaxLead_widget_inform_popup').remove();
});