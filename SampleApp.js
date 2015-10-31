import React from 'react-native';
import NameViewNative from './NameViewNative';
import NameBase from './shared/Name';
import MyToastAndroid from 'MyToastAndroid';
import ImageView2 from './MyImageView';

var {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Text,
} = React;

var Name = NameBase(React);

var SampleApp = React.createClass({
  _onPressButton: function() {
    MyToastAndroid.show(
      'Yes sir! Enjoy your toast. Would you like some butter to go with it?',
      MyToastAndroid.SHORT);
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Name view={NameViewNative} />
        <TouchableNativeFeedback
        onPress={this._onPressButton}
        background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={{width: 100, height: 148, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Is the Toast ready?</Text>
            <ImageView2 style={{width: 40, height: 40}} src="http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg" />
          </View>
        </TouchableNativeFeedback>
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
