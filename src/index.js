/**
 * Created by jsonlu on 17/6/13.
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  ToolbarAndroid
} from 'react-native';

const onPressLearnMore = () => {
  Alert.alert('Button has been pressed!');
};

class AwesomeProject extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
          <Button
              onPress={onPressLearnMore}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
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

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
        <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}


class Greeting extends Component {
  render() {
    return (
        <Text>Hello {this.props.name}!</Text>
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
        <View style={{alignItems: 'center'}}>
          <Greeting name='Rexxar'/>
          <Greeting name='Jaina'/>
          <Greeting name='Valeera'/>
        </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return {showText: !previousState.showText};
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
        <Text>{display}</Text>
    );
  }
}

class BlinkApp extends Component {
  render() {
    return (
        <View>
          <Blink text='I love to blink'/>
          <Blink text='Yes blinking is so great'/>
          <Blink text='Why did they ever take this out of HTML'/>
          <Blink text='Look at me look at me look at me'/>
        </View>
    );
  }
}

class ToolBat extends Component {
  render() {
    return(
        <ToolbarAndroid
            title="AwesomeApp"
            actions={[{title: 'Settings', show: 'always'}]}
        />
    )
  }
}

module.exports = AwesomeProject