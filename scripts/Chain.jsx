// Author : Adam Kowalski
// File   : Chain.jsx

'use strict';

var React = require('react');
var FlashCard = require("./FlashCard");

var styles = {
  div: {
    display       : "flex",
    flexDirection : "column",
    alignItems    : "center"
  }
};

var Chain = React.createClass({
  render: function() {
    return (
      <div style={styles.div}>
        <FlashCard
          first = "\frac {d}{dx} (u^n)"
          last  = "nu^{n-1} \cdot \frac d {dx} (u)" />

        <FlashCard
          first = "\frac {d}{dx} (\sqrt u)"
          last  = "\frac 1 {2 \sqrt u} \cdot \frac d {dx} (u)" />

        <FlashCard
          first = "\frac {d}{dx} (sin(u))"
          last  = "cos(u) \cdot \frac d {dx} (u)" />

        <FlashCard
          first = "\frac {d}{dx} (cos(u))"
          last  = "-sin(u) \cdot \frac d {dx} (u)" />

        <FlashCard
          first = "\frac {d}{dx} (tan(u))"
          last  = "sec^2(u) \cdot \frac d {dx} (u)" />

        <FlashCard
          first = "\frac {d}{dx} (sec(u))"
          last  = "sec(u)tan(u) \cdot \frac d {dx} (u)" />

        <FlashCard
          first = "\frac {d}{dx} (cot(u))"
          last  = "-csc^2(u) \cdot \frac d {dx} (u)" />

        <FlashCard
          first = "\frac {d}{dx} (csc(u))"
          last  = "-csc(u)cot(u) \cdot \frac d {dx} (u)" />

        <FlashCard
          first = "\frac {d}{dx} (tan^-1(u))"
          last  = "\frac 1 {1 + u^2} \cdot \frac d {dx} (u)" />

        <FlashCard
          first = "\frac {d}{dx} (sin^-1(u))"
          last  = "\frac 1 {\sqrt{1 - u^2}} \cdot \frac d {dx} (u)" />

        <FlashCard
          first = "\frac {d}{dx} (sec^-1(u))"
          last  = "\frac 1 {|u| \sqrt{u^2 - 1}} \cdot \frac d {dx} (u)" />

        <FlashCard
          first = "\frac {d}{dx} (e^u)"
          last  = "e^u \cdot \frac d {dx} (u)" />

        <FlashCard
          first = "\frac {d}{dx} (a^u)"
          last  = "ln(a) \cdot a^u \cdot \frac d {dx} (u)" />

        <FlashCard
          first = "\frac {d}{dx} (ln(u))"
          last  = "\frac 1 u \cdot \frac d {dx} (u)" />
      </div>
    );
  }

});

module.exports = Chain;
