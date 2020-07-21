import './guests-quantity-dropdown.scss';

require ('item-quantity-dropdown/lib/item-quantity-dropdown.min.js');
require ('item-quantity-dropdown/lib/item-quantity-dropdown.min.css');

$(document).ready(() => {
//    $(".guests-quantity-dropdown .iqdropdown .iqdropdown-menu").append(
//      '<div class="action-buttons"><button class="clear-button">Очистить</button><button class="apply-button">Применить</button></div>'
//    );
const guestsDropdown1 = '.guests-quantity-dropdown[data-id="1"] .iqdropdown';
const guestsDropdown2 = '.guests-quantity-dropdown[data-id="2"] .iqdropdown';
const guestsDropdown3 = '.guests-quantity-dropdown[data-id="3"] .iqdropdown';


    $(guestsDropdown1).iqDropdown({
      maxItems: Infinity,
      minItems: 0,
      setSelectionText: (itemCount, totalItems) => {
        
        $(`${guestsDropdown1} button.clear-button`).click(function() {
          for(let i = 0; i < itemCount.children + 1; i++) {
            $(`${guestsDropdown1} .iqdropdown-menu-option:nth-of-type(2) .iqdropdown-item-controls button.button-decrement`).click();
          }

          for(let i = 0; i < itemCount.infants + 1; i++) {
            $(`${guestsDropdown1} .iqdropdown-menu-option:nth-of-type(3) .iqdropdown-item-controls button.button-decrement`).click();
          }

          for(let i = 0; i < itemCount.adults + 1; i++) {
            $(`${guestsDropdown1} .iqdropdown-menu-option:nth-of-type(1) .iqdropdown-item-controls button.button-decrement`).click();
          }

        });

        if(itemCount.adults == 0) {
          $(`${guestsDropdown1} .iqdropdown-menu-option:nth-of-type(1) .iqdropdown-item-controls button.button-decrement`).css("opacity", "0.38");
        } else {
          $(`${guestsDropdown1} .iqdropdown-menu-option:nth-of-type(1) .iqdropdown-item-controls button.button-decrement`).css("opacity", "1");
        };

        if(itemCount.children == 0) {
          $(`${guestsDropdown1} .iqdropdown-menu-option:nth-of-type(2) .iqdropdown-item-controls button.button-decrement`).css("opacity", "0.38");
        } else {
          $(`${guestsDropdown1} .iqdropdown-menu-option:nth-of-type(2) .iqdropdown-item-controls button.button-decrement`).css("opacity", "1");
        }

        if(itemCount.infants == 0) {
          $(`${guestsDropdown1} .iqdropdown-menu-option:nth-of-type(3) .iqdropdown-item-controls button.button-decrement`).css("opacity", "0.38");
        } else {
          $(`${guestsDropdown1} .iqdropdown-menu-option:nth-of-type(3) .iqdropdown-item-controls button.button-decrement`).css("opacity", "1");
        }


        if (totalItems == 0) {
          $(`${guestsDropdown1} button.clear-button`).addClass("hidden");
        } else {
          $(`${guestsDropdown1} button.clear-button`).removeClass("hidden");
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

      beforeDecrement: (id, itemCount) => {
        if (id == "adults") {
          if (itemCount.adults == 1 && itemCount.children > 0 || itemCount.adults == 1 && itemCount.infants > 0) {
            //alert('Дети не могут заселиться без взрослого!');
            return false;
          };
        };
        
        return true
      },

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

    // =================================================

    $(guestsDropdown2).iqDropdown({
      maxItems: Infinity,
      minItems: 0,
      setSelectionText: (itemCount, totalItems) => {
        
        $(`${guestsDropdown2} button.clear-button`).click(function() {
          for(let i = 0; i < itemCount.children + 1; i++) {
            $(`${guestsDropdown2} .iqdropdown-menu-option:nth-of-type(2) .iqdropdown-item-controls button.button-decrement`).click();
          }

          for(let i = 0; i < itemCount.infants + 1; i++) {
            $(`${guestsDropdown2} .iqdropdown-menu-option:nth-of-type(3) .iqdropdown-item-controls button.button-decrement`).click();
          }

          for(let i = 0; i < itemCount.adults + 1; i++) {
            $(`${guestsDropdown2} .iqdropdown-menu-option:nth-of-type(1) .iqdropdown-item-controls button.button-decrement`).click();
          }

        });

        if(itemCount.adults == 0) {
          $(`${guestsDropdown2} .iqdropdown-menu-option:nth-of-type(1) .iqdropdown-item-controls button.button-decrement`).css("opacity", "0.38");
        } else {
          $(`${guestsDropdown2} .iqdropdown-menu-option:nth-of-type(1) .iqdropdown-item-controls button.button-decrement`).css("opacity", "1");
        };

        if(itemCount.children == 0) {
          $(`${guestsDropdown2} .iqdropdown-menu-option:nth-of-type(2) .iqdropdown-item-controls button.button-decrement`).css("opacity", "0.38");
        } else {
          $(`${guestsDropdown2} .iqdropdown-menu-option:nth-of-type(2) .iqdropdown-item-controls button.button-decrement`).css("opacity", "1");
        }

        if(itemCount.infants == 0) {
          $(`${guestsDropdown2} .iqdropdown-menu-option:nth-of-type(3) .iqdropdown-item-controls button.button-decrement`).css("opacity", "0.38");
        } else {
          $(`${guestsDropdown2} .iqdropdown-menu-option:nth-of-type(3) .iqdropdown-item-controls button.button-decrement`).css("opacity", "1");
        }


        if (totalItems == 0) {
          $(`${guestsDropdown2} button.clear-button`).addClass("hidden");
        } else {
          $(`${guestsDropdown2} button.clear-button`).removeClass("hidden");
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

      beforeDecrement: (id, itemCount) => {
        if (id == "adults") {
          if (itemCount.adults == 1 && itemCount.children > 0 || itemCount.adults == 1 && itemCount.infants > 0) {
            //alert('Дети не могут заселиться без взрослого!');
            return false;
          };
        };
        
        return true
      },

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

    // =================================================

    $(guestsDropdown3).iqDropdown({
      maxItems: Infinity,
      minItems: 0,
      setSelectionText: (itemCount, totalItems) => {
        
        $(`${guestsDropdown3} button.clear-button`).click(function() {
          for(let i = 0; i < itemCount.children + 1; i++) {
            $(`${guestsDropdown3} .iqdropdown-menu-option:nth-of-type(2) .iqdropdown-item-controls button.button-decrement`).click();
          }

          for(let i = 0; i < itemCount.infants + 1; i++) {
            $(`${guestsDropdown3} .iqdropdown-menu-option:nth-of-type(3) .iqdropdown-item-controls button.button-decrement`).click();
          }

          for(let i = 0; i < itemCount.adults + 1; i++) {
            $(`${guestsDropdown3} .iqdropdown-menu-option:nth-of-type(1) .iqdropdown-item-controls button.button-decrement`).click();
          }

        });

        if(itemCount.adults == 0) {
          $(`${guestsDropdown3} .iqdropdown-menu-option:nth-of-type(1) .iqdropdown-item-controls button.button-decrement`).css("opacity", "0.38");
        } else {
          $(`${guestsDropdown3} .iqdropdown-menu-option:nth-of-type(1) .iqdropdown-item-controls button.button-decrement`).css("opacity", "1");
        };

        if(itemCount.children == 0) {
          $(`${guestsDropdown3} .iqdropdown-menu-option:nth-of-type(2) .iqdropdown-item-controls button.button-decrement`).css("opacity", "0.38");
        } else {
          $(`${guestsDropdown3} .iqdropdown-menu-option:nth-of-type(2) .iqdropdown-item-controls button.button-decrement`).css("opacity", "1");
        }

        if(itemCount.infants == 0) {
          $(`${guestsDropdown3} .iqdropdown-menu-option:nth-of-type(3) .iqdropdown-item-controls button.button-decrement`).css("opacity", "0.38");
        } else {
          $(`${guestsDropdown3} .iqdropdown-menu-option:nth-of-type(3) .iqdropdown-item-controls button.button-decrement`).css("opacity", "1");
        }


        if (totalItems == 0) {
          $(`${guestsDropdown3} button.clear-button`).addClass("hidden");
        } else {
          $(`${guestsDropdown3} button.clear-button`).removeClass("hidden");
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

      beforeDecrement: (id, itemCount) => {
        if (id == "adults") {
          if (itemCount.adults == 1 && itemCount.children > 0 || itemCount.adults == 1 && itemCount.infants > 0) {
            //alert('Дети не могут заселиться без взрослого!');
            return false;
          };
        };
        
        return true
      },

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

    // ==================================================

    $("html").click(function(e) {
      let quantityDropdown = $(".guests-quantity-dropdown[data-expanded='false'] .iqdropdown.menu-open");
      
          if ( !(quantityDropdown.is(e.target) || quantityDropdown.children().is(e.target) ) ) {
            quantityDropdown.toggleClass("menu-open");
          }
    });

    $(`${guestsDropdown1} .iqdropdown-menu-option .action-buttons .apply-button`).click(function(e) {
        $(`${guestsDropdown1}.menu-open`).toggleClass("menu-open");
    });

    $(`${guestsDropdown2} .iqdropdown-menu-option .action-buttons .apply-button`).click(function(e) {
      $(`${guestsDropdown2}.menu-open`).toggleClass("menu-open");
    });

    $(`${guestsDropdown3} .iqdropdown-menu-option .action-buttons .apply-button`).click(function(e) {
      $(`${guestsDropdown3}.menu-open`).toggleClass("menu-open");
    });

    $(".guests-quantity-dropdown[data-expanded='true'] .iqdropdown").click();
  });