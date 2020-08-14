import './reviews-diagram.scss';

$(document).ready(() => {
    // let reviewsNumber = $(".reviews-diagram__reviews-text").data("reviews");
    let reviewsTextField = $(".reviews-diagram__reviews-text");
    let reviewsNumber = reviewsTextField.data("reviews");
    reviewsNumber = `${reviewsNumber}`;
    let reviewsLastSymbol = reviewsNumber[reviewsNumber.length - 1];
    // console.log(reviewsLastSymbol);
    // console.log(reviewsNumber);

    if(reviewsNumber == 0) {
        reviewsTextField.html("голосов");
    } else if(reviewsNumber == 1) {
        reviewsTextField.html("голос");
    } else if(reviewsNumber > 1 && reviewsNumber < 5) {
        reviewsTextField.html("голоса");
    } else if(reviewsNumber >= 5 && reviewsNumber <= 20) {
        reviewsTextField.html("голосов");
    } else if(reviewsNumber > 20 && reviewsLastSymbol == 1) {
        reviewsTextField.html("голос");
    } else if(reviewsNumber > 20 && (reviewsLastSymbol > 1 && reviewsLastSymbol < 5)) {
        reviewsTextField.html("голоса");
    } else {
        reviewsTextField.html("голосов");
    };
});