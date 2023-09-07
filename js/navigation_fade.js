function fadeButtons() {
$(document).ready(function(){
    $('nav a').mouseover(function(){
        $(this).fadeTo(150, 0.3);
    });
    $('nav a').mouseout(function(){
        $(this).fadeTo(150, 1);
    });
    $('footer a').mouseover(function(){
        $(this).fadeTo(150, 0.3);
    });
    $('footer a').mouseout(function(){
        $(this).fadeTo(150, 1);
    });
    $('button').mouseover(function(){
        $(this).fadeTo(150, 0.3);
    });
    $('button').mouseout(function(){
        $(this).fadeTo(150, 1);
    });
    $('button').click(function(){
        $(this).fadeTo(0, 1);
    });
});
}
fadeButtons();