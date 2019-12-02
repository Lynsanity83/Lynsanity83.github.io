 $(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

   var typed = new Typed(".typed", {
        strings: ["Web Developer.", "Student.", "Tech Enthusiast."],
        typeSpeed: 80,
        loop: true,
        startDelay: 1000,
        showCursor: false,
    });

    var owl = $('.owl-carousel');
        owl.owlCarousel({
            items:4,
            loop:true,
            margin:10,
            autoplay:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:3
                },
                938:{
                    items:4
                }
            },
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });
        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        })

   /*$('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    })*/

    $(function() {
        $('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent){
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    });

});