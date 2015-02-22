// Author: Adam Kowalski
// File: Constant.jsx

'use strict';

var React = require("react");
var TeX = require("./tex");

var styles = {
  fontSize : 24,
  padding  : 10,
  margin   : 10,
  border   : "1px solid black"
};

var Constant = React.createClass({
  getInitialState: function() {
    return {
      text: "\\frac{d}{dx}\(k\)"
    };
  },
  onClick: function() {
    this.setState({text: "0"});
  },
  render: function() {
    return (
      <TeX style={styles} onClick={this.onClick}>{this.state.text}</TeX>
    );
  }
});

module.exports = Constant;
