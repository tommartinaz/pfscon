import React, { Component } from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Spinner
} from 'native-base';
import { Image } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  static navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: () => (
      <Image
        source={require('../../person-icon.png')}
        style={styles.icon}
      />
    )
  };

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC9SoYUQTNKcyE8_m6wbC2X41bL6a_8NYc',
      authDomain: 'management-a3d3a.firebaseapp.com',
      databaseURL: 'https://management-a3d3a.firebaseio.com',
      projectId: 'management-a3d3a',
      storageBucket: '',
      messagingSenderId: '971874493332'
    };
    firebase.initializeApp(config);
  }


  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button large style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)}>
        <Text>Login</Text>
      </Button>
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input
                placeholder='email@gmail.com'
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry
                onChangeText={this.onPasswordChange.bind(this)}
                placeholder='password'
                value={this.props.password}
              />
            </Item>
            <Text style={styles.errorTextStyle}>{this.props.error}</Text>
            {this.renderButton()}
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = {
  icon: {
    width: 26,
    height: 26
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  buttonStyle: {
    alignSelf: 'center'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
 })(LoginForm);
