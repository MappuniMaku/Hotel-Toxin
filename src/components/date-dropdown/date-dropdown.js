import './date-dropdown.scss';

require("air-datepicker/dist/js/datepicker.min.js");
require("air-datepicker/dist/css/datepicker.min.css");

$.fn.datepicker.language['ru'] =  {
    days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
    daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    today: 'Применить',
    clear: 'Очистить',
    dateFormat: 'dd.mm.yyyy',
    timeFormat: 'hh:ii',
    firstDay: 1
};

$(document).ready(function() {
    $(".date-dropdown__first-input .input-field__input").each(function(i, elem) {
        let secondInput = $(elem).closest(".date-dropdown").find(".date-dropdown__second-input .input-field__input");
        let today = new Date();
        today.setHours(0, 0, 0, 0);

        $(elem).datepicker({
            clearButton: true,
            todayButton: true,
            navTitles: {
                days: 'MM yyyy',
            },
            prevHtml: '<span class="material-icons">arrow_back</span>',
            nextHtml: '<span class="material-icons">arrow_forward</span>',
            minDate: today,
            range: true,
            disableNavWhenOutOfRange: false,
            onSelect: function(formattedDate, date) {
                $(elem).val(formattedDate.split(',')[0]);
                $(secondInput).val(formattedDate.split(',')[1]);
                $(elem).html(date);
            },
            //inline: true,
        });
  

        let datepicker = $(elem).data('datepicker');

        // let inputField = document.getElementById("date-dropdown-1");
        // let preselectedDates = inputField.dataset.preselecteddates;

        // if(preselectedDates) {
        //     datepicker.selectDate([new Date(preselectedDates.split(',')[0]), new Date(preselectedDates.split(',')[1])]);
        // };

        let preselectedDates = $(elem).data("preselecteddates");

        if(preselectedDates) {
            let firstDate = new Date(preselectedDates[0]);
            firstDate.setHours(0, 0, 0, 0);
            let secondDate = new Date(preselectedDates[1]);
            secondDate.setHours(0, 0, 0, 0);

            datepicker.selectDate([firstDate, secondDate]);
        }

        $(secondInput).click(function() {
            datepicker.show();
        });

        $(".datepicker--buttons [data-action='today']").click(function() {
            datepicker.hide();
        });
    });
});