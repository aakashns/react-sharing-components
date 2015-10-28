import React from 'react-native';

var {
  View,
  Text,
  TextInput,
  StyleSheet
} = React;

var NameViewNative = React.createClass({
  render: function() {
    var { value, errors, sync, onValueChange } = this.props;
    var errorNodes = errors.map((e, i) =>
      <Text key={i} style={styles.error}>{e}</Text>);
    var syncNode = (value !== "") &&
      <Text style={styles.sync}>
        {sync ? "Synced!" : "Syncing..."}
      </Text>;

    return (
      <View style={styles.wrapper}>
        <Text style={styles.label}>Name</Text>
        <TextInput value={value}
          style={styles.input}
          onChangeText={onValueChange} />
        {errorNodes}
        {syncNode}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 20,
    width: 320
  },
  label: {},
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1},
  sync: {},
  error: {
    color: 'red',
  },
});

export default NameViewNative;
