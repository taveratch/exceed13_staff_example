var React = require('react');
var ServerMessage = React.createClass({
  getInitialState: function() {
    var self = this;
    setInterval(function() {
      $.ajax({
        url: "http://localhost:8080/message"
      })
      .success(function(data) {
        self.setState({
          message: data.message
        });
      })
      .error(function(err) {
        self.setState({
          message: "Error"
        });
      });
    }, 1000);
    return {
      message: "Initial message"
    };
  },
  render: function() {
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">Message</div>
          <div className="panel-body">
            {this.state.message}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ServerMessage;
