import './pagination.scss';

require("../../assets/jquery_plugins/simplePagination/jquery.simplePagination.js");

$(document).ready(function() {
    let items = $(".pagination__placeholder").data("items");
    let pages = $(".pagination__placeholder").data("pages");
    let itemsOnPage = $(".pagination__placeholder").data("itemsonpage");
    let currentPage = $(".pagination__placeholder").data("currentpage");
    let paginationDescription = $(".pagination .pagination__description");

    let displayedPages = 3;
    if (document.documentElement.clientWidth < 400) {
        displayedPages = 1;
    };

    $(".pagination__placeholder").pagination({
        items: items,
        itemsOnPage: itemsOnPage,
        pages: pages,
        currentPage: currentPage,
        displayedPages: displayedPages,
        edges: 1,
        prevText: "arrow_backward",
        nextText: "arrow_forward",
        onPageClick: function(pageNumber, event) {
            let currentItemRange;
            if(pageNumber != pages) {
                currentItemRange = `${(pageNumber - 1) * itemsOnPage + 1} – ${pageNumber * itemsOnPage}`;
            } else if(pageNumber == pages) {
                currentItemRange = `${(pageNumber - 1) * itemsOnPage + 1} – ${items}`;
            }

            let totalItems;
            if(items > 100) {
                totalItems = "100+";
            } else {
                totalItems = items;
            };

            let descText = currentItemRange + " из " + totalItems + " вариантов аренды";

            paginationDescription.html(descText);
        },
        onInit: function() {
            let currentItemRange;
            if(currentPage != pages) {
                currentItemRange = `${(currentPage - 1) * itemsOnPage + 1} – ${currentPage * itemsOnPage}`;
            } else if(currentPage == pages) {
                currentItemRange = `${(currentPage - 1) * itemsOnPage + 1} – ${items}`;
            }

            let totalItems;
            if(items > 100) {
                totalItems = "100+";
            } else {
                totalItems = items;
            };

            let descText = currentItemRange + " из " + totalItems + " вариантов аренды";

            paginationDescription.html(descText);
        },
    });
});