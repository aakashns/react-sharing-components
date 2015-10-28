export default function (React) {
  var Name = React.createClass({
    getInitialState: function() {
      return { value: "", errors: [], sync: true };
    },

    validate: function(value) {
      var validations = [
        v => v.length < 15 || "Your name is too long!",
        v => v.indexOf('@') == -1 || "Your name contains '@'? Really?"
      ];
      return validations.map(f => f(value)).filter(e => e !== true);
    },

    syncToServer: function() {
      // Using a timeout to simulate a server call
      clearTimeout(this._syncRequest);
      this._syncRequest = setTimeout(() => {
        var newState = this.state;
        newState.sync = true;
        this.setState(newState);
      }, 2000);
    },

    onValueChange: function(value) {
      this.setState({
        value: value,
        errors: this.validate(value),
        sync: false
      });
      this.syncToServer();
    },

    render: function() {
      var { value, errors, sync } = this.state
      var RenderView = this.props.view;

      return <RenderView value={value}
        errors={errors}
        sync={sync}
        onValueChange={this.onValueChange} />;
    }
  });

  return Name;
};
