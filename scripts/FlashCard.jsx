// Author : Adam Kowalski
// File   : index.jsx

'use strict';

var React = require('react');
var TeX = require("./tex");

var styles = {
  div: {
    border         : "1px solid black",
    width          : "100%",
    maxWidth       : 800,
    height         : 100,
    display        : "flex",
    justifyContent : "center",
    alignItems     : "center"
  },
  tex: {
    fontSize: 32
  }
};

var timeToDisplay = 5;

var FlashCard = React.createClass({
  getInitialState: function() {
    return {
      first   : this.props.first,
      last    : this.props.last,
      text    : this.props.first,
      seconds : timeToDisplay
    };
  },
  tick: function() {
    if (this.state.seconds <= 0) {
      clearInterval(this.interval);
      this.state.seconds = timeToDisplay;
      this.setState({
        text: this.state.first
      });
    }

    this.setState({
      seconds: this.state.seconds - 1
    });
  },
  onClick: function() {
    if (this.state.text === this.state.first) {
      this.setState({
        text: this.state.last
      });
      this.interval = setInterval(this.tick, 1000);
    }
  },
  render: function() {
    return (
      <div
        style   = {styles.div}
        onClick = {this.onClick} >
        <TeX style = {styles.tex} >
          {this.state.text}
        </TeX>
      </div>
    );
  }

});

module.exports = FlashCard;
