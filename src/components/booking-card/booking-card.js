import './booking-card.scss';
require("../date-dropdown/date-dropdown.js");

function priceToString(num) {
    if(num < 1000) {
        return num + "₽";
    } else if(num >=1000 && num < 1000000) {

        let thousands = Math.floor(num/1000);
        let residue = num - Math.floor(num/1000) * 1000;

        if(residue < 100 && residue >= 10) {
            residue = "0" + residue;
        } else if (residue < 10 && residue > 0) {
            residue = "00" + residue;
        } else if (residue == 0) {
            residue = "000";
        };

        return thousands + " " + residue + "₽";
    };
};

$(document).ready(() => {
    let priceField = $(".booking-card__room-price-number");
    let roomPrice = priceField.data("roomprice");
    priceField.html(priceToString(roomPrice));

    let datepicker = $(".booking-card .date-dropdown__first-input .input-field__input").data('datepicker');

    let priceAndDaysExpression = $(".booking-card__price-and-days-expression");
    let intermediateResult = $(".booking-card__intermediate-result");

    let discountField = $(".booking-card__discount-size");
    let discountSize = discountField.data("discount");

    if(discountSize) {
        discountField.html("Сбор за услуги: скидка " + priceToString(discountSize));
    } else {
        discountField.html("Сбор за услуги:");
        discountSize = 0;
    };

    let additionalServicesCostField = $(".booking-card__additional-services-cost");
    let additionalServicesCost = additionalServicesCostField.data("services");

    if(additionalServicesCost) {
        additionalServicesCostField.html(priceToString(additionalServicesCost));
    } else {
        additionalServicesCostField.html("0₽");
        additionalServicesCost = 0;
    };


    if(datepicker) {
        let stayLengthDays = (datepicker.selectedDates[1] - datepicker.selectedDates[0]) / (1000 * 3600 * 24);
        if(stayLengthDays == 1) {
            priceAndDaysExpression.html(priceToString(roomPrice) + " x " + stayLengthDays + " сутки");
        } else if(stayLengthDays > 1) {
            priceAndDaysExpression.html(priceToString(roomPrice) + " x " + stayLengthDays + " суток");
        };
        intermediateResult.html(priceToString(roomPrice * stayLengthDays));

        let totalPriceField = $(".booking-card__total-price");
        let totalPrice = roomPrice * stayLengthDays - discountSize + additionalServicesCost;
        totalPriceField.html(priceToString(totalPrice));

        $(".booking-card .date-dropdown__first-input .input-field__input").bind('DOMSubtreeModified', function() {
            if(datepicker.selectedDates[1] && datepicker.selectedDates[0]) {
                stayLengthDays = (datepicker.selectedDates[1] - datepicker.selectedDates[0]) / (1000 * 3600 * 24);
                if(stayLengthDays == 1) {
                    priceAndDaysExpression.html(priceToString(roomPrice) + " x " + stayLengthDays + " сутки");
                } else if(stayLengthDays > 1) {
                    priceAndDaysExpression.html(priceToString(roomPrice) + " x " + stayLengthDays + " суток");
                };
            };

            intermediateResult.html(priceToString(roomPrice * stayLengthDays));

            totalPrice = roomPrice * stayLengthDays - discountSize + additionalServicesCost;
            totalPriceField.html(priceToString(totalPrice));
        })
    };
});