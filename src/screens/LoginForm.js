import React, { Component } from 'react';
import { Text, TouchableOpacity, StatusBar, TextInput, KeyboardAvoidingView, View, StyleSheet, Linking } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { GreyLogo } from '../img/svg';

export default class App extends Component {
  state = {
    email: '',
    password: '',
  };

  setNavigationColor = (color) => {
    changeNavigationBarColor(color);
  };

  componentDidMount() {
    this.setNavigationColor('#111117');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <GreyLogo width="100px" height="50px" />
        <View style={styles.header}>
          <Text style={styles.description}>
            Please enter the username and password you use to login to the Tesla site
          </Text>
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.form}>
          <TextInput
            style={styles.input}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            ref={ref => { this._emailInput = ref }}
            placeholder="email@example.com"
            placeholderTextColor="white"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="send"
            onSubmitEditing={this.handleSubmit}
            blurOnSubmit={true}
          />
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={ref => { this._passwordInput = ref }}
            placeholder="password"
            placeholderTextColor="white"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="ascii-capable"
            keyboardAppearance="dark"
            returnKeyType="send"
            onSubmitEditing={this.handleSubmit}
            blurOnSubmit={true}
            secureTextEntry={true}
          />
          <View>
            <TouchableOpacity onPress={this.handleSubmit}>
              <Text style={styles.legal}>
                Submit
              </Text>
            </TouchableOpacity>
            <Text style={styles.legal}>
              Your login credentials are not saved!
            </Text>
            <Text style={styles.legal} onPress={() => this.props.navigation.navigate('DrawerStack')} >
              Go to Main Screen (for development)
            </Text>
            <Text style={styles.legal} onPress={() => { Linking.openURL('https://www.tesla.com/user/password?email=&redirect=no') }}>
              Reset your password
            </Text>
            <Text style={styles.legal} onPress={() => { Linking.openURL('https://www.tesla.com/about/legal#privacy-statement?redirect=no') }}>
              Privacy Policy
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }

  handleSubmit = () => {
    async function getBearerToken(email, password, fn) {
      try {
        let response = await fetch('https://owner-api.teslamotors.com/oauth/token', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            grant_type: 'password',
            client_id: '81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384',
            client_secret: 'c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3',
            email: email,
            password: password
          }),
        });
        let responseJson = await response.json();
        if (responseJson.access_token !== undefined) {
          alert('Successfully authenticated!')
          fn(responseJson.access_token)
        } else {
          alert('Could not authenticate, please try again')
        }
      } catch (error) {
        console.error(error);
      }
    }
    getBearerToken(this.state.email, this.state.password, this.props.setEstablishedConnection);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111117',
  },
  header: {
    paddingTop: 20,
    padding: 20,
    backgroundColor: 'darkred',
  },
  description: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    color: 'white',
  },
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: 'darkred',
    borderWidth: 2,
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: 'white',
  },
  legal: {
    margin: 10,
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    textAlign: 'center',
    paddingBottom: 20,
  },
  form: {
    flex: 1,
    color: 'white',
  },
  logo: {
    marginTop: 50,
    marginBottom: 50,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  }
});