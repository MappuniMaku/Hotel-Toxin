import './quantity-dropdown.scss';

require ('item-quantity-dropdown/lib/item-quantity-dropdown.min.js');
require ('item-quantity-dropdown/lib/item-quantity-dropdown.min.css');

$(document).ready(() => {
    $('.iqdropdown').iqDropdown();
  });