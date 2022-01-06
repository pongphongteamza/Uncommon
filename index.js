const searchBar = document.getElementById("searchBar");

$(document).ready(function(){
    $(document).on('focus','.input-js', function() {
        $(".search-bar").css("background-color","rgba(37, 77, 207, 0.8)");
    })
    $(document).on('blur','.input-js', function() {
        $(".search-bar").css("background-color", "rgba(17, 17, 17, 0.85)");
    })
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            },
        }
    })
});
// .search-bar-bg
// .input-js
// .search-bar