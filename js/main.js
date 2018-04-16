$(function (){
    (function  () {
		$('body').on('click','.nav-toggle',function  (event) {
			var r = $('.navbar').hasClass("listopen");
			if (r)
			{
				$('.navbar').removeClass('listopen');
				//$('.nav-collapse').slideUp();
			}
			else
			{
				$('.navbar').addClass('listopen');
				//$('.nav-collapse').slideDown();
			}
			event.stopPropagation();
		});
    })();
    
    (function (){
        $('body').on('click','.nav-list>li',function (e) { 
            var r = $(this).hasClass('open');
            if (r){
                $(this).removeClass('open');
            }else{
                $(this).addClass('open').siblings().removeClass('open');
            }
            e.preventDefault();
        });
    })();
});

