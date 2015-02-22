// Author: Adam Kowalski
// File: Root.jsx

'use strict';

var React = require("react");
var TeX = require("./tex");

var styles = {
  fontSize : 24,
  padding  : 10,
  margin   : 10,
  border   : "1px solid black"
};

var Root = React.createClass({
  getInitialState: function() {
    return {
      text: "\\frac{d}{dx}\(\\sqrt x\)"
    };
  },
  onClick: function() {
    this.setState({text: "\\frac{1}{2\\sqrt x}"});
  },
  render: function() {
    return (
      <TeX style={styles} onClick={this.onClick}>{this.state.text}</TeX>
    );
  }
});

module.exports = Root;
