import './guests-quantity-dropdown.scss';

require ('item-quantity-dropdown/lib/item-quantity-dropdown.min.js');
require ('item-quantity-dropdown/lib/item-quantity-dropdown.min.css');

$(document).ready(() => {
//    $(".guests-quantity-dropdown .iqdropdown .iqdropdown-menu").append(
//      '<div class="action-buttons"><button class="clear-button">Очистить</button><button class="apply-button">Применить</button></div>'
//    );

    $('.guests-quantity-dropdown .iqdropdown').iqDropdown({
      // max total items
      maxItems: Infinity,
      // min total items
      minItems: 0,
      // text to show on the dropdown override data-selection-text attribute
      //selectionText: 'гость',
      // text to show for multiple items
      //textPlural: 'гостей',
      // optionally can use setSelectionText function to override selectionText
      setSelectionText: (itemCount, totalItems) => { /* return string */ 
        
        $(".guests-quantity-dropdown .iqdropdown button.clear-button").click(function() {
        //  alert(itemCount.adults);
          for(let i = 0; i < itemCount.children; i++) {
            $(".guests-quantity-dropdown .iqdropdown-menu-option:nth-of-type(2) .iqdropdown-item-controls button.button-decrement").click();
          }

          for(let i = 0; i < itemCount.infants; i++) {
            $(".guests-quantity-dropdown .iqdropdown-menu-option:nth-of-type(3) .iqdropdown-item-controls button.button-decrement").click();
          }

          for(let i = 0; i < itemCount.adults; i++) {
            $(".guests-quantity-dropdown .iqdropdown-menu-option:nth-of-type(1) .iqdropdown-item-controls button.button-decrement").click();
          }

        });

        if(itemCount.adults == 0) {
          $(".guests-quantity-dropdown .iqdropdown-menu-option:nth-of-type(1) .iqdropdown-item-controls button.button-decrement").css("opacity", "0.38");
        } else {
          $(".guests-quantity-dropdown .iqdropdown-menu-option:nth-of-type(1) .iqdropdown-item-controls button.button-decrement").css("opacity", "1");
        };

        if(itemCount.children == 0) {
          $(".guests-quantity-dropdown .iqdropdown-menu-option:nth-of-type(2) .iqdropdown-item-controls button.button-decrement").css("opacity", "0.38");
        } else {
          $(".guests-quantity-dropdown .iqdropdown-menu-option:nth-of-type(2) .iqdropdown-item-controls button.button-decrement").css("opacity", "1");
        }

        if(itemCount.infants == 0) {
          $(".guests-quantity-dropdown .iqdropdown-menu-option:nth-of-type(3) .iqdropdown-item-controls button.button-decrement").css("opacity", "0.38");
        } else {
          $(".guests-quantity-dropdown .iqdropdown-menu-option:nth-of-type(3) .iqdropdown-item-controls button.button-decrement").css("opacity", "1");
        }


        if (totalItems == 0) {
          $(".guests-quantity-dropdown .iqdropdown button.clear-button").addClass("hidden");
        } else {
          $(".guests-quantity-dropdown .iqdropdown button.clear-button").removeClass("hidden");
        }


        if (totalItems == 0) {
          return "Сколько гостей"
        } else if (totalItems == 1) {
          return "1 гость"
        } else {
          if (itemCount.infants == 0) {
            if (totalItems > 1 && totalItems < 5) {
              return totalItems + " гостя"
            } else if (totalItems >= 5) {
              return totalItems + " гостей"
            }
          } else if (itemCount.infants == 1) {
            if (totalItems == 2) {
              return "1 гость, 1 младенец"
            } else if (totalItems > 2 && totalItems < 6) {
              return `${totalItems - 1}` + " гостя, 1 младенец"
            } else if (totalItems >= 6) {
              return `${totalItems - 1}` + " гостей, 1 младенец"
            }
          } else if (itemCount.infants > 1 && itemCount.infants < 5) {
            if (totalItems - itemCount.infants == 1) {
              return `1 гость, ${itemCount.infants} младенца`
            } else if (totalItems - itemCount.infants > 1 && totalItems - itemCount.infants < 5) {
              return `${totalItems - itemCount.infants} гостя, ${itemCount.infants} младенца`
            } else if (totalItems - itemCount.infants >= 5) {
              return `${totalItems - itemCount.infants} гостей, ${itemCount.infants} младенца`
            }
          } else if (itemCount.infants >= 5) {
            if (totalItems - itemCount.infants == 1) {
              return `1 гость, ${itemCount.infants} младенцев`
            } else if (totalItems - itemCount.infants > 1 && totalItems - itemCount.infants < 5) {
              return `${totalItems - itemCount.infants} гостя, ${itemCount.infants} младенцев`
            } else if (totalItems - itemCount.infants >= 5) {
              return `${totalItems - itemCount.infants} гостей, ${itemCount.infants} младенцев`
            }
          }
        };
      },
      // buttons to increment/decrement
      /*controls: {
        position: 'right',
        displayCls: 'iqdropdown-item-display',
        controlsCls: 'iqdropdown-item-controls',
        counterCls: 'counter'
      }, */
      // fires when an item quantity changes
    //  onChange: (id, count, totalItems) => {},
      // return false to prevent an item decrement
      beforeDecrement: (id, itemCount) => {
        if (id == "adults") {
          if (itemCount.adults == 1 && itemCount.children > 0 || itemCount.adults == 1 && itemCount.infants > 0) {
            //alert('Дети не могут заселиться без взрослого!');
            return false;
          };
        };
        
        return true
      },
      // return false to prevent an item increment
      beforeIncrement: (id, itemCount) => {
        if (id == "children" || id == "infants") {
          if (itemCount.adults == 0) {
            //alert('Дети не могут заселиться без взрослого!');
            return false;
          };
        };
        
        return true
      },
    });

    $("html").click(function(e) {
      let quantityDropdown = $(".guests-quantity-dropdown .iqdropdown.menu-open");
      

          if ( !(quantityDropdown.is(e.target) || quantityDropdown.children().is(e.target) ) ) {
            quantityDropdown.toggleClass("menu-open");
          }

          /*if (clearButton.is(e.target)) {
            quantityDropdown.addClass("menu-open");
          }*/
        //  alert(clearButton.is(e.target))
    });

    $(".guests-quantity-dropdown .iqdropdown-menu-option .action-buttons .apply-button").click(function(e) {
      //let applyButton = $(".guests-quantity-dropdown .iqdropdown-menu-option .action-buttons .apply-button");
      //if (applyButton.is(e.target)) {
        $(".guests-quantity-dropdown .iqdropdown.menu-open").toggleClass("menu-open");
      //}
      //alert(applyButton.is(e.target))
    });

    $(".guests-quantity-dropdown .iqdropdown").click();

  //  $(".guests-quantity-dropdown .iqdropdown-menu-option:nth-of-type(4) .iqdropdown-item-controls").css("display", "none");
  });