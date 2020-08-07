import './rate-button.scss';

$(document).ready(function() {
    $(".rate-button").each(function(i, elem) {
        let rating = $(elem).data("rating");
        for(let i = 0; i < rating; i++) {
            $(elem).children(`.rate-button__star:nth-of-type(${i+1})`).html("star");
        }
    });
});