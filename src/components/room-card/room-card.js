import './room-card.scss';

function priceToString(num) {
    if(num < 1000) {
        return num + "₽";
    } else if(num >=1000 && num < 1000000) {

        let thousands = Math.floor(num/1000);
        let residue = num - Math.floor(num/1000) * 1000;

        if(residue < 100) {
            residue = "0" + residue;
        };

        return thousands + " " + residue + "₽";
    };
};

$(document).ready(() => {
    let priceField = $(".room-card__room-price-number");
    let roomPrice = priceField.data("roomprice");
    priceField.html(priceToString(roomPrice));

    let reviewsNumber = $(".room-card__reviews-number").data("reviews");
    let reviewsTextField = $(".room-card__reviews-text");
    reviewsNumber = `${reviewsNumber}`;
    let reviewsLastSymbol = reviewsNumber[reviewsNumber.length - 1];
    // console.log(reviewsLastSymbol);
    // console.log(reviewsNumber);

    if(reviewsNumber == 0) {
        reviewsTextField.html("Отзывов");
    } else if(reviewsNumber == 1) {
        reviewsTextField.html("Отзыв");
    } else if(reviewsNumber > 1 && reviewsNumber < 5) {
        reviewsTextField.html("Отзыва");
    } else if(reviewsNumber >= 5 && reviewsNumber <= 20) {
        reviewsTextField.html("Отзывов");
    } else if(reviewsNumber > 20 && reviewsLastSymbol == 1) {
        reviewsTextField.html("Отзыв");
    } else if(reviewsNumber > 20 && (reviewsLastSymbol > 1 && reviewsLastSymbol < 5)) {
        reviewsTextField.html("Отзыва");
    } else {
        reviewsTextField.html("Отзывов");
    };
});