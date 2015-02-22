// Author: Adam Kowalski
// File: Sin.jsx

'use strict';

var React = require("react");
var TeX = require("./tex");

var styles = {
  fontSize : 24,
  padding  : 10,
  margin   : 10,
  border   : "1px solid black"
};

var Sin = React.createClass({
  getInitialState: function() {
    return {
      text: "\\frac{d}{dx}\(sin\(x\)\)"
    };
  },
  onClick: function() {
    this.setState({text: "cos\(x\)"});
  },
  render: function() {
    return (
      <TeX style={styles} onClick={this.onClick}>{this.state.text}</TeX>
    );
  }
});

module.exports = Sin;
