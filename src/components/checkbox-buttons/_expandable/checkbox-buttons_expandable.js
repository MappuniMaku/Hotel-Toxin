import './checkbox-buttons_expandable.scss';

$(document).ready(function() {
    // $(".checkbox-buttons_expandable .element-name__description").removeClass("element-name__description");
    // $(".checkbox-buttons_expandable .element-name__description").addClass("material-icons");
    // $(".checkbox-buttons_expandable[data-expanded='false']").addClass("checkbox-buttons_hidden");

    $(".checkbox-buttons_expandable .element-name").click(function() {
        // if($(".checkbox-buttons_expandable").hasClass("checkbox-buttons_expanded")) {
        //     $(".checkbox-buttons_expandable").removeClass("checkbox-buttons_expanded")
        // } else {
        //     $(".checkbox-buttons_expandable").addClass("checkbox-buttons_expanded")
        // }
        $(".checkbox-buttons_expandable").toggleClass("checkbox-buttons_expanded");
        // $(".checkbox-buttons_expandable").toggleClass("checkbox-buttons_hidden");

    });

    // $("html").click(function(e) {
    //     let expandableCheckboxButtons = $(".checkbox-buttons_expandable");
    //     let checkboxButtonsName = $(".checkbox-buttons_expandable .element-name");

    //         if ( !(expandableCheckboxButtons.is(e.target) || expandableCheckboxButtons.children().is(e.target) || checkboxButtonsName.children().is(e.target) ) ) {
    //             expandableCheckboxButtons.removeClass("checkbox-buttons_expanded");
    //         }
    //   });

    // ======= working list close if clicked outside
    // $(".checkbox-buttons_expandable__backdrop").click(function() {
    //     $(".checkbox-buttons_expandable").toggleClass("checkbox-buttons_expanded");
    // })

       $(".checkbox-buttons_expandable[data-expanded='true']").addClass("checkbox-buttons_expanded");
});