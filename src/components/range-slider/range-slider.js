import './range-slider.scss';

require("jquery-ui/ui/widgets/slider");
require("jquery-ui/themes/base/slider.css");
// require("jquery-ui/themes/base/all.css");

$(document).ready(function() {
    let presetRange= $(".range-slider__slider-object").data("presetrange");

    $(".range-slider__slider-object").slider({
        min: $(".range-slider__slider-object").data("min"),
        max: $(".range-slider__slider-object").data("max"),
        step: $(".range-slider__slider-object").data("step"),
        range: true,
        values: presetRange,
        create: function(event, ui) {
            let value1 = presetRange[0], value2 = presetRange[1];
            value1 = String(value1);
            value2 = String(value2);

            if(value1 < 1000) {
                value1 = value1 + "₽ - "
            } else if(value1 >= 1000 && value1 < 10000) {
                value1 = value1[0] + " " + value1[1] + "00₽ - "
            } else if(value1 >= 10000) {
                value1 = value1[0] + value1[1] + " " + value1[2] + "00₽ - "
            }
            
            if(value2 < 1000) {
                value2 = value2 + "₽";
            } else if(value2 >= 1000 && value2 < 10000) {
                value2 = value2[0] + " " + value2[1] + "00₽"
            } else if(value2 >= 10000) {
                value2 = value2[0] + value2[1] + " " + value2[2] + "00₽"
            }
            
            $(".range-slider .element-name__description").html(value1 + value2)
        },
        slide: function(event, ui) {
            let value1 = ui.values[0], value2 = ui.values[1];
            value1 = String(value1);
            value2 = String(value2);

            if(value1 < 1000) {
                value1 = value1 + "₽ - "
            } else if(value1 >= 1000 && value1 < 10000) {
                value1 = value1[0] + " " + value1[1] + "00₽ - "
            } else if(value1 >= 10000) {
                value1 = value1[0] + value1[1] + " " + value1[2] + "00₽ - "
            }
            
            if(value2 < 1000) {
                value2 = value2 + "₽";
            } else if(value2 >= 1000 && value2 < 10000) {
                value2 = value2[0] + " " + value2[1] + "00₽"
            } else if(value2 >= 10000) {
                value2 = value2[0] + value2[1] + " " + value2[2] + "00₽"
            }

            $(".range-slider .element-name__description").html(value1 + value2)
        },
    });
});