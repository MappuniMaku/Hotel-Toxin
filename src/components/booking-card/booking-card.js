import './booking-card.scss';
// require("../priceToString/priceToString.js");4
require("../date-dropdown/date-dropdown.js");

function priceToString(num) {
    if(num < 1000) {
        return num + "₽";
    } else if(num >=1000 && num < 1000000) {
        return Math.floor(num/1000) + " " + (num - Math.floor(num/1000) * 1000) + "₽";
    };
};

$(document).ready(() => {
    let priceField = $(".booking-card__room-price-number");
    let roomPrice = priceField.data("roomprice");
    priceField.html(priceToString(roomPrice));

    let datepicker = $(".booking-card .date-dropdown__first-input .input-field__input").data('datepicker');
    // console.log(datepicker.selectedDates);
    // console.log($(".booking-card .date-dropdown__first-input .input-field__input").val());

    let daysNumber = $(".booking-card__days");

    if(datepicker) {
        let stayLengthDays = (datepicker.selectedDates[1] - datepicker.selectedDates[0]) / (1000 * 3600 * 24);
        if(stayLengthDays == 1) {
            daysNumber.html(stayLengthDays + " сутки");
        } else if(stayLengthDays > 1) {
            daysNumber.html(stayLengthDays + " суток");
        };

        $(".booking-card .date-dropdown__first-input .input-field__input").bind('DOMSubtreeModified', function() {
            // console.log(1);
            if(datepicker.selectedDates[1] && datepicker.selectedDates[0]) {
                stayLengthDays = (datepicker.selectedDates[1] - datepicker.selectedDates[0]) / (1000 * 3600 * 24);
                if(stayLengthDays == 1) {
                    daysNumber.html(stayLengthDays + " сутки");
                } else if(stayLengthDays > 1) {
                    daysNumber.html(stayLengthDays + " суток");
                };
            };
        })
    };
});