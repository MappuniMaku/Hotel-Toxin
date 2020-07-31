import './rate-button.scss';

$(document).ready(function() {
    $(".rate-button__item").each(function() {
        let rating = $(this).data("rating");
        for(let i = 0; i < rating; i++) {
            $(this).children(`.rate-button__star:nth-of-type(${i+1})`).html("star");
        }
    });
});