// Author : Adam Kowalski
// File   : index.jsx

'use strict';

var React = require('react');
var FlashCard = require("./FlashCard");

var styles = {
  div: {
    display       : "flex",
    flexDirection : "column",
    alignItems    : "center"
  },
  divWebkit: {
    display             : "-webkit-flex",
    WebkitFlexDirection : "column",
    WebkitAlignItems    : "center"
  }
};

var Basic = React.createClass({
  getInitialState: function() {
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var divStyle = isChrome ? styles.div : styles.divWebkit;

    return {
      divStyle: divStyle
    };
  },
  render: function() {
    return (
      <div style={this.state.divStyle}>
        <FlashCard
          first = "\frac {d}{dx} (k)"
          last  = "0" />

        <FlashCard
          first = "\frac {d}{dx} ( x^n )"
          last  = "nx^{n-1}" />

        <FlashCard
          first = "\frac {d}{dx} ( \sqrt x )"
          last  = "\frac 1 {2 \sqrt x}" />

        <FlashCard
          first = "\frac {d}{dx} ( sin(x) )"
          last  = "cos(x)" />

        <FlashCard
          first = "\frac {d}{dx} ( cos(x) )"
          last  = "-sin(x)" />

        <FlashCard
          first = "\frac {d}{dx} ( tan(x) )"
          last  = "sec^2(x)" />

        <FlashCard
          first = "\frac {d}{dx} ( sec(x) )"
          last  = "sec(x)tan(x)" />

        <FlashCard
          first = "\frac {d}{dx} ( cot(x) )"
          last  = "-csc^2(x)" />

        <FlashCard
          first = "\frac {d}{dx} ( csc(x) )"
          last  = "-csc(x)cot(x)" />

        <FlashCard
          first = "\frac {d}{dx} ( tan^-1(x) )"
          last  = "\frac 1 {1 + x^2}" />

        <FlashCard
          first = "\frac {d}{dx} ( sin^-1(x) )"
          last  = "\frac 1 {\sqrt{1 - x^2}}" />

        <FlashCard
          first = "\frac {d}{dx} ( sec^-1(x) )"
          last  = "\frac 1 {|x| \sqrt{x^2 - 1}}" />

        <FlashCard
          first = "\frac {d}{dx} ( e^x )"
          last  = "e^x" />

        <FlashCard
          first = "\frac {d}{dx} ( a^x )"
          last  = "ln(a) \cdot a^x" />

        <FlashCard
          first = "\frac {d}{dx} ( ln(x) )"
          last  = "\frac 1 x" />
      </div>
    );
  }

});

module.exports = Basic;
