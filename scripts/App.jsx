// Author : Adam Kowalski
// File   : App.jsx

var React    = require("react");
var Basic    = require("./Basic");
var Chain    = require("./Chain");
var Implicit = require("./Implicit");

var styles = {
  tabs: {
    display  : "flex",
    width    : "100%",
    maxWidth : 800,
    margin   : "0 auto",
    border   : "1px solid black"
  },
  tabsWebkit: {
    display  : "-webkit-flex",
    width    : "100%",
    maxWidth : 800,
    margin   : "0 auto",
    border   : "1px solid black"
  },
  tab: {
    padding    : 15,
    width      : "100%",
    textAlign  : "center",
    background : "#4CAF50",
    color      : "white",
    border     : "1px solid black",
    cursor     : "pointer"
  },
  activeTab: {
    padding    : 15,
    width      : "100%",
    textAlign  : "center",
    background : "#00C853",
    color      : "white",
    border     : "1px solid black",
    cursor     : "pointer"
  }
};

var App = React.createClass({
  getInitialState: function() {
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var tabsStyle = isChrome ? styles.tabs : styles.tabsWebkit;

    return {
      activeTab: "Basic",
      formulas: <Basic />,
      tabsStyle: tabsStyle
    };
  },
  basicTab: function() {
    this.setState({
      activeTab: "Basic",
      formulas: <Basic />
    });
  },
  chainTab: function() {
    this.setState({
      activeTab: "Chain",
      formulas: <Chain />
    });
  },
  implicitTab: function() {
    this.setState({
      activeTab: "Implicit",
      formulas: <Implicit />
    });
  },
  render: function() {
    return (
      <div style={{overflowX: "hidden"}}>
        <div style={this.state.tabsStyle}>
          <div
            style={(this.state.activeTab === "Basic") ?
              styles.activeTab :
              styles.tab}
            onClick={this.basicTab}>Basic</div>
          <div
            style={(this.state.activeTab === "Chain") ?
              styles.activeTab :
              styles.tab}
            onClick={this.chainTab}>Chain</div>
          <div
            style={(this.state.activeTab === "Implicit") ?
              styles.activeTab :
              styles.tab}
            onClick={this.implicitTab}>Implicit</div>
        </div>
        {this.state.formulas}
      </div>
    );
  }

});

module.exports = App;
