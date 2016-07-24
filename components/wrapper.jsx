var React = require("react");
var ReactDOM = require("react-dom");

(function() {
  'use strict';

    module.exports = React.createClass({
      render: function() {
        var ServerMessage = require('./server_message.jsx');
        var TodoList = require('./todos.jsx');
        return (
          <div>
            <ServerMessage />
            <TodoList />
          </div>
        );
      }
    });

}());

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(<Wrapper/>, document.getElementById("container"));
