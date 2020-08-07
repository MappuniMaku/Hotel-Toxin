import './date-picker.scss';

//var Inputmask = require('inputmask');
import Inputmask from "inputmask";

Inputmask.extendAliases({
    'date-ru': {
        placeholder: 'ДД.ММ.ГГГГ',
        regex: "^(0[1-9]|[12][0-9]|3[01])\\.(0[1-9]|1[012])\\.(19|20)[0-9][0-9]$",
    }
  });

$(document).ready(function() {

    $(".date-picker .input-field__input").each(function(i, elem) {
        Inputmask("date-ru").mask(elem);
    });

});