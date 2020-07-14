import './header.scss';

require("jquery-ui/ui/widgets/menu");
require("jquery-ui/themes/base/menu.css");
require("jquery-ui/themes/base/all.css");
//require("../../assets/jquery_plugins/stellarnav/js/stellarnav");
//require("../../assets/jquery_plugins/stellarnav/css/stellarnav.min.css");

$(document).ready(function() {
//    $('.stellarnav').stellarNav();
    $(".header--links-list").menu({
        position: { my: "left top", at: "left bottom" },
    });
});