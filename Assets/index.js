$(window).scroll(function(){
    if($(document).scrollTop() > 0){
        $('.heading').css({
            'background': 'white',
            'box-shadow': '0 1px 20px #333'
        });

        $('nav ul li a, .fa-search').css('color', 'black');

        $('#logo').attr('src', './Assets/images/logo_black.png');
        $('.fa-bars, .fa-times').css('color', 'black');
    }

    else {
        $('.heading').css({
            'background': 'transparent',
            'box-shadow': 'none'
        });

        $('nav ul li a, .fa-search, .fa-times-circle').css('color', 'white');

        $('#logo').attr('src', './Assets/images/logo.png');
        $('.fa-bars, .fa-times').css('color', 'white');
    }
})

$(document).ready(function(){
    var countSearch = 0;
    $('#search').hide();
    $(".fa-search").click(function() {
        countSearch++;
        //even odd click detect 
        var isEven = function(someNumber) {
            return (someNumber % 2 === 0) ? true : false;
        }
        // on odd clicks do this
        if (isEven(countSearch) === false) {
            $('#search').show(500);
            $(this).attr('class', 'fa fa-times-circle');
        }
        // on even clicks do this
        else if (isEven(countSearch) === true) {
            $('#search').hide();
            $(this).attr('class', 'fa fa-search')
        }
    });

})