import React from 'react-native';
import NameViewNative from './NameViewNative';
import NameBase from './shared/Name';

var { View, StyleSheet } = React;

var Name = NameBase(React);

var SampleApp = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Name view={NameViewNative} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default SampleApp;
