/**
 * Polyfills for older browsers
 * This file adds polyfills for features that might not be available in all browsers.
 * It will be automatically included in the build by the webpack configuration.
 */

// Import core-js polyfills for ES features
import 'core-js/stable';

// Import whatwg-fetch for fetch API support
import 'whatwg-fetch';

// Import polyfills for IE11 and older browsers (if needed)
import 'react-app-polyfill/stable';

// Import specific polyfills if needed
import 'core-js/features/array/from';
import 'core-js/features/object/entries';
import 'core-js/features/object/values';
import 'core-js/features/string/pad-start';
import 'core-js/features/string/pad-end';

// Import DOM polyfills for older browsers
import 'classlist-polyfill'; 