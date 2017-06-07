declare const __VERSION__;
console.log('Version: ' + __VERSION__);

import * as Bluebird from "bluebird";
import "jquery";
import "../static/styles/styles";

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({warnings: {wForgottenReturn: false}});


