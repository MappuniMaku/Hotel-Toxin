import './checkbox-buttons_expandable.scss';

$(document).ready(function() {
    $(".checkbox-buttons_expandable").each(function(i, elem) {
        $(elem).children(".element-name").click(function() {
            $(elem).toggleClass("checkbox-buttons_expanded");
        });
    });

    $(".checkbox-buttons_expandable[data-expanded='true']").addClass("checkbox-buttons_expanded");
});