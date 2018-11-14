import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';


export default class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navItem1: false,
      navItem2: false,
      navItem3: false,
      navItem4: false,
    }
 }
  
  click(item){
    
    if(item == 'Item1'){this.setState({navItem1:true}); Actions.login()}else{this.setState({navItem1:false})}
    if(item == 'Item2'){this.setState({navItem2:true}); Actions.post()}else{this.setState({navItem2:false})}
    if(item == 'Item3'){this.setState({navItem3:true})}else{this.setState({navItem3:false})}
    if(item == 'Item4'){this.setState({navItem4:true})}else{this.setState({navItem4:false})}
  
}
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button active={this.state.navItem1}  badge vertical onPress={() => { this.click('Item1')}}> 
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button active={this.state.navItem2}  vertical onPress={() => { this.click('Item2')}}> 
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active={this.state.navItem3}  badge vertical onPress={() => { this.click('Item3')}}>
              <Badge ><Text>21</Text></Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button active={this.state.navItem4}  vertical onPress={() => { this.click('Item4')}}>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}