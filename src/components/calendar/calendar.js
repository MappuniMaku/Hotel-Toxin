import './calendar.scss';

require("air-datepicker/dist/js/datepicker.min.js");
require("air-datepicker/dist/css/datepicker.min.css");

$(document).ready(function() {
    $(".input-calendar").datepicker();
});