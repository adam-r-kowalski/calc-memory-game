// Author: Adam Kowalski
// File: Cos.jsx

'use strict';

var React = require("react");
var TeX = require("./tex");

var styles = {
  fontSize : 24,
  padding  : 10,
  margin   : 10,
  border   : "1px solid black"
};

var Cos = React.createClass({
  getInitialState: function() {
    return {
      text: "\\frac{d}{dx}\(cos\(x\)\)"
    };
  },
  onClick: function() {
    this.setState({text: "-sin\(x\)"});
  },
  render: function() {
    return (
      <TeX style={styles} onClick={this.onClick}>{this.state.text}</TeX>
    );
  }
});

module.exports = Cos;
