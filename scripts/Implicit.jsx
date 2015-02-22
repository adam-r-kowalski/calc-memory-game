// Author : Adam Kowalski
// File   : Implicit.jsx

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

var Implicit = React.createClass({
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
          first = "\frac {d}{dx} (y^n)"
          last  = "ny^{n-1} \frac {dy}{dx}" />

        <FlashCard
          first = "\frac {d}{dx} (\sqrt y)"
          last  = "\frac 1 {2 \sqrt y} \frac {dy}{dx}" />

        <FlashCard
          first = "\frac {d}{dx} (sin(y))"
          last  = "cos(y) \frac {dy}{dx}" />

        <FlashCard
          first = "\frac {d}{dx} (cos(y))"
          last  = "-sin(y) \frac {dy}{dx}" />

        <FlashCard
          first = "\frac {d}{dx} (tan(y))"
          last  = "sec^2(y) \frac {dy}{dx}" />

        <FlashCard
          first = "\frac {d}{dx} (sec(y))"
          last  = "sec(y)tan(y) \frac {dy}{dx}" />

        <FlashCard
          first = "\frac {d}{dx} (cot(y))"
          last  = "-csc^2(y) \frac {dy}{dx}" />

        <FlashCard
          first = "\frac {d}{dx} (csc(y))"
          last  = "-csc(y)cot(y) \frac {dy}{dx}" />

        <FlashCard
          first = "\frac {d}{dx} (tan^-1(y))"
          last  = "\frac 1 {1 + y^2} \frac {dy}{dx}" />

        <FlashCard
          first = "\frac {d}{dx} (sin^-1(y))"
          last  = "\frac 1 {\sqrt{1 - y^2}} \frac {dy}{dx}" />

        <FlashCard
          first = "\frac {d}{dx} (sec^-1(y))"
          last  = "\frac 1 {|y| \sqrt{y^2 - 1}} \frac {dy}{dx}" />

        <FlashCard
          first = "\frac {d}{dx} (e^y)"
          last  = "e^y \frac {dy}{dx}" />

        <FlashCard
          first = "\frac {d}{dx} (a^y)"
          last  = "ln(a) \cdot a^y \frac {dy}{dx}" />

        <FlashCard
          first = "\frac {d}{dx} (ln(y))"
          last  = "\frac 1 y \frac {dy}{dx}" />
      </div>
    );
  }

});

module.exports = Implicit;
