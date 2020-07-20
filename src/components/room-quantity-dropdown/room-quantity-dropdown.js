import './room-quantity-dropdown.scss';

$(document).ready(() => {
    $(".room-quantity-dropdown .iqdropdown").iqDropdown({
      maxItems: Infinity,
      minItems: 0,
      setSelectionText: (itemCount, totalItems) => {

        if(itemCount.bedrooms == 0) {
          $(".room-quantity-dropdown .iqdropdown-menu-option:nth-of-type(1) .iqdropdown-item-controls button.button-decrement").css("opacity", "0.38");
        } else {
          $(".room-quantity-dropdown .iqdropdown-menu-option:nth-of-type(1) .iqdropdown-item-controls button.button-decrement").css("opacity", "1");
        };

        if(itemCount.beds == 0) {
          $(".room-quantity-dropdown .iqdropdown-menu-option:nth-of-type(2) .iqdropdown-item-controls button.button-decrement").css("opacity", "0.38");
        } else {
          $(".room-quantity-dropdown .iqdropdown-menu-option:nth-of-type(2) .iqdropdown-item-controls button.button-decrement").css("opacity", "1");
        }

        if(itemCount.bathrooms == 0) {
          $(".room-quantity-dropdown .iqdropdown-menu-option:nth-of-type(3) .iqdropdown-item-controls button.button-decrement").css("opacity", "0.38");
        } else {
          $(".room-quantity-dropdown .iqdropdown-menu-option:nth-of-type(3) .iqdropdown-item-controls button.button-decrement").css("opacity", "1");
        }

        if (totalItems == 0) {
          return "Спальни, кровати..."
        } else {
          if (itemCount.bedrooms == 0) {
            if (itemCount.beds == 0) {
              if (itemCount.bathrooms == 1) {
                return "1 ванная комната"
              } else if (itemCount.bathrooms > 1 && itemCount.bathrooms < 5) {
                return `${itemCount.bathrooms} ванные комнаты`
              } else if (itemCount.bathrooms >= 5) {
                return `${itemCount.bathrooms} ванных комнат`
              }
            }
             else if (itemCount.beds == 1) {
              if (itemCount.bathrooms == 0) {
                return "1 кровать"
              } else if (itemCount.bathrooms == 1) {
                return "1 кровать, 1 ванная..."
              } else if (itemCount.bathrooms > 1 && itemCount.bathrooms < 5) {
                return `1 кровать, ${itemCount.bathrooms} ванные...`
              } else if (itemCount.bathrooms >= 5) {
                return `1 кровать, ${itemCount.bathrooms} ванных...`
              }
            } else if (itemCount.beds > 1 && itemCount.beds < 5) {
              if (itemCount.bathrooms == 0) {
                return `${itemCount.beds} кровати`
              } else if (itemCount.bathrooms == 1) {
                return `${itemCount.beds} кровати, 1 ванная...`
              } else if (itemCount.bathrooms > 1 && itemCount.bathrooms < 5) {
                return `${itemCount.beds} кровати, ${itemCount.bathrooms} ванные...`
              } else if (itemCount.bathrooms >= 5) {
                return `${itemCount.beds} кровати, ${itemCount.bathrooms} ванных...`
              }
            } else if (itemCount.beds >= 5) {
              if (itemCount.bathrooms == 1) {
                return `${itemCount.beds} кроватей, 1 ванная...`
              } else if (itemCount.bathrooms > 1 && itemCount.bathrooms < 5) {
                return `${itemCount.beds} кроватей, ${itemCount.bathrooms} ванные...`
              } else if (itemCount.bathrooms >= 5) {
                return `${itemCount.beds} кроватей, ${itemCount.bathrooms} ванных...`
              }
            }
          } else if (itemCount.bedrooms == 1) {
            if (itemCount.beds == 0) {
              if (itemCount.bathrooms == 0) {
                return "1 спальня"
              } else if (itemCount.bathrooms == 1) {
                return "1 спальня, 1 ванная..."
              } else if (itemCount.bathrooms > 1 && itemCount.bathrooms < 5) {
                return `1 спальня, ${itemCount.bathrooms} ванные...`
              } else if (itemCount.bathrooms >= 5) {
                return `1 спальня, ${itemCount.bathrooms} ванных...`
              }
            } else if (itemCount.beds == 1) {
              return "1 спальня, 1 кровать..."
            } else if (itemCount.beds > 1 && itemCount.beds < 5) {
              return `1 спальня, ${itemCount.beds} кровати...`
            } else if (itemCount.beds >= 5) {
              return `1 спальня, ${itemCount.beds} кроватей...`
            }
          } else if (itemCount.bedrooms > 1 && itemCount.bedrooms < 5) {
            if (itemCount.beds == 0) {
              if (itemCount.bathrooms == 0) {
                return `${itemCount.bedrooms} спальни`
              } else if (itemCount.bathrooms == 1) {
                return `${itemCount.bedrooms} спальни, 1 ванная...`
              } else if (itemCount.bathrooms > 1 && itemCount.bathrooms < 5) {
                return `${itemCount.bedrooms} спальни, ${itemCount.bathrooms} ванные...`
              } else if (itemCount.bathrooms >= 5) {
                return `${itemCount.bedrooms} спальни, ${itemCount.bathrooms} ванных...`
              }
            }
            else if (itemCount.beds == 1) {
              return `${itemCount.bedrooms} спальни, 1 кровать...`
            } else if (itemCount.beds > 1 && itemCount.beds < 5) {
              return `${itemCount.bedrooms} спальни, ${itemCount.beds} кровати...`
            } else if (itemCount.beds >= 5) {
              return `${itemCount.bedrooms} спальни, ${itemCount.beds} кроватей...`
            }
          } else if (itemCount.bedrooms >= 5) {
            if (itemCount.beds == 0) {
              if (itemCount.bathrooms == 0) {
                return `${itemCount.bedrooms} спален`
              } else if (itemCount.bathrooms == 1) {
                return `${itemCount.bedrooms} спален, 1 ванная...`
              } else if (itemCount.bathrooms > 1 && itemCount.bathrooms < 5) {
                return `${itemCount.bedrooms} спален, ${itemCount.bathrooms} ванные...`
              } else if (itemCount.bathrooms >= 5) {
                return `${itemCount.bedrooms} спален, ${itemCount.bathrooms} ванных...`
              }
            } else if (itemCount.beds == 1) {
              return `${itemCount.bedrooms} спален, 1 кровать...`
            } else if (itemCount.beds > 1 && itemCount.beds < 5) {
              return `${itemCount.bedrooms} спален, ${itemCount.beds} кровати...`
            } else if (itemCount.beds >= 5) {
              return `${itemCount.bedrooms} спален, ${itemCount.beds} кроватей...`
            }
          }
        }
      },
      // fires when an item quantity changes
    //  onChange: (id, count, totalItems) => {},
      beforeDecrement: (id, itemCount) => {
        /*if (id == "beds" && itemCount.beds == itemCount.bedrooms) {
          return false;
        }*/
        return true
      },
      beforeIncrement: (id, itemCount) => {
        /*if (id == "bedrooms" && itemCount.beds == itemCount.bedrooms) {
          //$("div[data-id='beds']").attr("data-defaultcount", `${itemCount.bedrooms + 1}`)
        }*/
        return true
      },
    });


    $("html").click(function(e) {
      let quantityDropdown = $(".room-quantity-dropdown .iqdropdown.menu-open");

          if ( !(quantityDropdown.is(e.target) || quantityDropdown.children().is(e.target) ) ) {
            quantityDropdown.toggleClass("menu-open");
          }
    });
    
});