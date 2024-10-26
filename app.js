$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 5,
        loop: true,
        margin: 20,
        nav: false, 
        dots: false, 
        responsive : {

            300 : {
                items : 1
            },

            390 : {
                items : 1
            },
            450 : {
                items : 2
            },
            576 : {
                items : 2
            },
            768 : {
                items : 4
            },
            1200 : {
                items : 5
            }
        }
    }); 
});


