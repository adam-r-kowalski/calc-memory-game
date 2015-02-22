// Author: Adam Kowalski
// File: Power.jsx

'use strict';

var React = require("react");
var TeX = require("./tex");

var styles = {
  fontSize : 24,
  padding  : 10,
  margin   : 10,
  border   : "1px solid black"
};

var Power = React.createClass({
  getInitialState: function() {
    return {
      text: "\\frac{d}{dx}\(x^n\)"
    };
  },
  onClick: function() {
    this.setState({text: "nx^{n-1}"});
  },
  render: function() {
    return (
      <TeX style={styles} onClick={this.onClick}>{this.state.text}</TeX>
    );
  }
});

module.exports = Power;
