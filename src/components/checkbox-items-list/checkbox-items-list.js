import './checkbox-items-list.scss';

require("jquery-ui/ui/widgets/checkboxradio");
require("jquery-ui/themes/base/checkboxradio.css");
// require("jquery-ui/themes/base/all.css");

$(document).ready(function() {
    $(".checkbox-items-list__checkbox-input").checkboxradio({
        // icon: false,
    })
});