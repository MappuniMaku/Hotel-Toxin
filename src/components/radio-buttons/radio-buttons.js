import './radio-buttons.scss';

require("jquery-ui/ui/widgets/checkboxradio");
require("jquery-ui/themes/base/checkboxradio.css");
// require("jquery-ui/themes/base/all.css");

$(document).ready(function() {
    $(".radio-buttons__radio-input").checkboxradio({
        // icon: false,
    })
});