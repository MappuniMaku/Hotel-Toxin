import './like-button.scss';

$(document).ready(function() {
    $(".like-button__input:checked").parent().addClass("like-button_checked");
    $(".like-button_checked .like-button__like-icon").html("favorite");

    $(".like-button").each(function(i, elem) {
        $(elem).children(".like-button__input").on("change", function(){
            $(elem).toggleClass("like-button_checked");
            $(elem).children(".like-button__like-icon").html("favorite_border");

            $(elem).children(".like-button__likes-number").html(+$(elem).children(".like-button__likes-number").html() - 1);

            if($(elem).hasClass("like-button_checked")) {
                $(elem).children(".like-button__like-icon").html("favorite");
                $(elem).children(".like-button__likes-number").html(+$(elem).children(".like-button__likes-number").html() + 2)
            };
        });
    });
});