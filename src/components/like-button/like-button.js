import './like-button.scss';

$(document).ready(function() {
    $(".like-button__input:checked").parent().addClass("like-button__item-checked");
    $(".like-button__item-checked .like-button__like-icon").html("favorite");

    $(".like-button__item[data-id='item-1'] .like-button__input").click(function(){
        $(this).parent().toggleClass("like-button__item-checked");

        $(".like-button__item[data-id='item-1'] .like-button__like-icon").html("favorite_border");
        $(".like-button__item[data-id='item-1'].like-button__item-checked .like-button__like-icon").html("favorite");

        $(".like-button__item[data-id='item-1'] .like-button__likes-number").html(+$(".like-button__item[data-id='item-1'] .like-button__likes-number").html() - 1);
        $(".like-button__item[data-id='item-1'].like-button__item-checked .like-button__likes-number").html(+$(".like-button__item[data-id='item-1'].like-button__item-checked .like-button__likes-number").html() + 2)
    })

    $(".like-button__item[data-id='item-2'] .like-button__input").click(function(){
        $(this).parent().toggleClass("like-button__item-checked");

        $(".like-button__item[data-id='item-2'] .like-button__like-icon").html("favorite_border");
        $(".like-button__item[data-id='item-2'].like-button__item-checked .like-button__like-icon").html("favorite");

        $(".like-button__item[data-id='item-2'] .like-button__likes-number").html(+$(".like-button__item[data-id='item-2'] .like-button__likes-number").html() - 1);
        $(".like-button__item[data-id='item-2'].like-button__item-checked .like-button__likes-number").html(+$(".like-button__item[data-id='item-2'].like-button__item-checked .like-button__likes-number").html() + 2)
    })
});