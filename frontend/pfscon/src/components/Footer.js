import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';

class FooterBar extends Component {
  render() {
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical>
              <Icon name="calendar" />
              <Text>Schedule</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default FooterBar;
