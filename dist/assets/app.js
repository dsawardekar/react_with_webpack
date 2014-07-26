webpackJsonp([1],[
/* 0 */
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	__webpack_require__(/*! ./styles/app.css */ 4);
	var React = __webpack_require__(/*! react */ 3);
	var $     = __webpack_require__(/*! jquery */ 1);
	
	var App = React.createClass({displayName: 'App',
	  render: function() {
	    return (
	      React.DOM.h1(null, "React with webpack")
	    );
	  }
	});
	
	$(document).ready(function() {
	  console.log('ready');
	  React.renderComponent(App(null), $('#content').get(0));
	});
	
	console.log('app v1');
	module.exports = App;


/***/ },
/* 1 */
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = jQuery;

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/*!****************************!*\
  !*** ./app/styles/app.css ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=app.js.map