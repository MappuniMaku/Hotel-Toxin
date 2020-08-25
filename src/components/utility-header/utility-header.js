import './utility-header.scss';

require("jquery-ui/ui/widgets/menu");
require("jquery-ui/themes/base/all.css");

$(document).ready(function() {
    $(".utility-header__links-list").menu({
        position: { my: "left top", at: "left bottom" },
    });
});