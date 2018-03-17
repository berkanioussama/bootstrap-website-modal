$(document).ready(function(){

    /*==================== Start smooth scroll animation ====================*/
    var scroll = new SmoothScroll('a[href*="#"]:not([data-slide])', {
		speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    });
    /*==================== End smooth scroll animation ====================*/

    /*==================== Start navbar animation ====================*/
    /*= on init =*/
	var scrolling = $(document).scrollTop();
	if(scrolling >= 50){
		$(".navbar").removeClass("navbar-dark");
		$(".navbar").addClass("navbar-light bg-light");
    }
    /*= whene start scrolling =*/
	$(document).on('scroll' , function(){
		var scrolling = $(document).scrollTop();
		if(scrolling >= 50){
			$(".navbar").removeClass("navbar-dark");
			$(".navbar").addClass("navbar-light bg-light");
		}else{
			$(".navbar").removeClass("navbar-light bg-light");
			$(".navbar").addClass("navbar-dark");
		}
	});
    /*==================== End navbar animation ====================*/
    
});

/*==================== Start loading animation ====================*/
    $(window).on('load' , function(){
        $(".loading").fadeOut(1000,function(){
            $(this).remove();
        });
    });
/*==================== End loading animation ====================*/