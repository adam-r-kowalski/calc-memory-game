// Author: Adam Kowalski
// File: Tan.jsx

'use strict';

var React = require("react");
var TeX = require("./tex");

var styles = {
  fontSize : 24,
  padding  : 10,
  margin   : 10,
  border   : "1px solid black"
};

var Tan = React.createClass({
  getInitialState: function() {
    return {
      text: "\\frac{d}{dx}\(tan\(x\)\)"
    };
  },
  onClick: function() {
    this.setState({text: "sec^2\(x\)"});
  },
  render: function() {
    return (
      <TeX style={styles} onClick={this.onClick}>{this.state.text}</TeX>
    );
  }
});

module.exports = Tan;
