/*import CDropDown from './src/dropdown/index.js';
exports.CDropDown = CDropDown;*/


//'use strict';
//module.exports.CDropDown = require('./src/dropdown/index.js');

import Add from './index2.js';

var Test = function(){
	console.log(`Hello, this is npm module. add result: ${Add(1,2)}`);
}
module.exports = Test;

Test();