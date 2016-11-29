import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  AlertIOS,
  WebView,
  Dimensions,
  Platform
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const returnButton = Platform.OS == 'ios' ? {
  leftButtons: [{
    title: 'Close',
    id: 'close',
    icon: require('../assets/img/icon_back_normal.png')
  }]
} : {};

export default class WebViewPage extends Component {
  static navigatorButtons = returnButton;

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id == 'close') {
      this.props.navigator.dismissModal();
    }
  }

  renderError() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Error</Text>
      </View>
    );
  }

  render() {

    console.log(this.props)

    return (
      <View style={styles.container}>
        <WebView
          style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}
          renderError={this.renderError.bind(this)}
          automaticallyAdjustContentInsets={true}
          mediaPlaybackRequiresUserAction={true}
          scalesPageToFit={false}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          source={{uri: this.props.link}}>

        </WebView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: '500'
  }
});
