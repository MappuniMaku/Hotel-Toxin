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
    $(".room-card").each(function(i, elem) {


        let roomPriceField = $(elem).find(".room-card__room-price-number");
        let roomPrice = roomPriceField.data("roomprice");
        roomPriceField.html(priceToString(roomPrice));

        let reviewsNumber = $(elem).find(".room-card__reviews-number").data("reviews");
        let reviewsTextField = $(elem).find(".room-card__reviews-text");
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

        let input1 = $(elem).find(".room-card__gallery-navigation-first-input");
        let input2 = $(elem).find(".room-card__gallery-navigation-second-input");
        let input3 = $(elem).find(".room-card__gallery-navigation-third-input");
        let input4 = $(elem).find(".room-card__gallery-navigation-fourth-input");

        let imageContainer = $(elem).find(".room-card__gallery-images-container");

        input1.change(function() {
            $(this).closest(".room-card__gallery").find(imageContainer).css("transform", "translate(0)");
        });

        input2.change(function() {
            $(this).closest(".room-card__gallery").find(imageContainer).css("transform", "translate(-270px)");
        });

        input3.change(function() {
            $(this).closest(".room-card__gallery").find(imageContainer).css("transform", "translate(-540px)");
        });

        input4.change(function() {
            $(this).closest(".room-card__gallery").find(imageContainer).css("transform", "translate(-810px)");
        });

        let leftArrow = $(elem).find(".room-card__gallery-left-margin");
        let rightArrow = $(elem).find(".room-card__gallery-right-margin");

        leftArrow.click(function() {
            if($(this).parent().find(input1).prop("checked")) {
                $(this).parent().find(input4).trigger("click");
            } else if($(this).parent().find(input2).prop("checked")) {
                $(this).parent().find(input1).trigger("click");
            } else if($(this).parent().find(input3).prop("checked")) {
                $(this).parent().find(input2).trigger("click");
            } else if($(this).parent().find(input4).prop("checked")) {
                $(this).parent().find(input3).trigger("click");
            };
        });

        rightArrow.click(function() {
            if($(this).parent().find(input1).prop("checked")) {
                $(this).parent().find(input2).trigger("click");
            } else if($(this).parent().find(input2).prop("checked")) {
                $(this).parent().find(input3).trigger("click");
            } else if($(this).parent().find(input3).prop("checked")) {
                $(this).parent().find(input4).trigger("click");
            } else if($(this).parent().find(input4).prop("checked")) {
                $(this).parent().find(input1).trigger("click");
            };
        });
    });
});