import './js/common.js';
//import './css/main.css';
import './assets/scss/main.scss'

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('./assets/components', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));
requireAll(require.context('./pages', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));