import './checkbox-buttons.scss';

require("jquery-ui/ui/widgets/checkboxradio");
require("jquery-ui/themes/base/checkboxradio.css");
// require("jquery-ui/themes/base/all.css");

$(document).ready(function() {
    $(".checkbox-buttons__checkbox-input").checkboxradio({
        // icon: false,
    })
});