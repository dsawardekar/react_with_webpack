/** @jsx React.DOM */
var React = require('react');
var $     = require('jquery');

var App = React.createClass({
  render: function() {
    return (
      <h1>React with webpack</h1>
    );
  }
});

$(document).ready(function() {
  console.log('ready');
  React.renderComponent(<App />, $('#content').get(0));
});

console.log('app v1');
module.exports = App;
