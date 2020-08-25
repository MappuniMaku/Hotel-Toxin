import './theme/global.scss';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('./components', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));
requireAll(require.context('./pages', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));

require.context('./components', true, /\.(png|jpg|gif|svg)$/);
require.context('./pages', true, /\.(png|jpg|gif|svg)$/);