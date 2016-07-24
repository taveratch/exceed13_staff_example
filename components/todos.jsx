var React = require('react');
var TodoList = React.createClass({
  getInitialState: function() {
    var self = this;
    setInterval(function(){
      $.ajax({
        url: "http://localhost:8080/todos"
      })
      .success(function(data) {
        self.setState({
          todos: data.todos
        });
      })
      .error(function(err) {
        self.setState({
          todos: ['Error1', 'Error2']
        });
      });
    },1000);
    return {
      todos: []
    };
  },

  render: function() {
    return (
      <ul className="list-group">
        {
          this.state.todos.map(function(result, i) {
            return <li className="list-group-item" key={i}>{result}</li>;
          })
        }
      </ul>
    );
  }
});

module.exports = TodoList;
