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
  React.renderComponent(<App />, $('#content').get(0));
});

module.exports = App;
