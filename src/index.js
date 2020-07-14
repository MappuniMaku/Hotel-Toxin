//require('webpack-jquery-ui');
//require('webpack-jquery-ui/css');

//import * as $ from 'jquery';
import './js/common.js';
//import './css/main.css';
import './theme/global.scss'

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('./components', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));
requireAll(require.context('./pages', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));

$(document).ready(function() {
    console.log('jQuery loaded');
});