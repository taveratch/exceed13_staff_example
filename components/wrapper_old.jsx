var React = require("react");
var ReactDOM = require("react-dom");

(function() {
  'use strict';

    module.exports = React.createClass({
      getInitialState: function() {
        return {
          result : 0
        };
      },
      add: function() {
        var a_value = parseFloat(this.refs.a.value);
        var b_value = parseFloat(this.refs.b.value);
        var result = a_value + b_value;
        this.setState({
          result: result
        });
      },
      sub: function() {
        var a_value = parseFloat(this.refs.a.value);
        var b_value = parseFloat(this.refs.b.value);
        var result = a_value - b_value;
        this.setState({
          result: result
        });
      },
      render: function() {
        return (
          <div>
            <h1>{this.state.result}</h1>
            <div>
              <input ref="a" type="number" />
              <input ref="b" type="number"/>
            </div>
            <div>
              <button onClick={this.add} >ADD</button>
              <button onClick={this.sub} >SUB</button>
            </div>
          </div>
        );
      }
    });

}());

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(<Wrapper/>, document.getElementById("container"));
