$(function (){
    (function  () {
		$('body').on('click','.nav-toggle',function  (event) {
            var id = $(this).attr("data-target");
			var r = $(id).hasClass("nav-navicon");
			if (r)
			{
				$(id).removeClass('nav-navicon');
				$(this).addClass('listopen');
			}
			else
			{
				$(id).addClass('nav-navicon');
                $(this).removeClass('listopen');
			}
			event.stopPropagation();
		});
    })();
    
    (function (){
        $('.nav-inline >li').click(function (e) { 
            var r = $(this).hasClass('active');
            if (r){
                $(this).removeClass('active');
            }else{
                $(this).addClass('active').siblings().removeClass('active');
            }
            //e.preventDefault();
        });
    })();
    (function (){
        $('.drop-menu li').click(function (e) { 
            var r = $(this).hasClass('active');
            if (r){
                $(this).removeClass('active');
            }else{
                $(this).addClass('active').siblings().removeClass('active');
            }
            e.stopPropagation();
        });
    })();
});

