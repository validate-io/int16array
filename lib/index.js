'use strict';

// FUNCTIONS //

var isStr = Object.prototype.toString;


// IS INT16ARRAY //

/**
* FUNCTION: isInt16Array( value )
*	Validates if a value is an Int16Array.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is an Int16Array
*/
function isInt16Array( value ) {
	return isStr.call( value ) === '[object Int16Array]';
} // end FUNCTION isInt16Array()


// EXPORTS //

module.exports = isInt16Array;
