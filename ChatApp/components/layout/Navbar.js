import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import {AppRegistry} from 'react-native';
import Dashboard from '../dashboard/Dashboard'

class TabsScrollableExample extends Component {
  render(){
    return (
        <Container>
        <Header hasTabs/>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Tab1">
            <Dashboard></Dashboard>
          </Tab>
      
        </Tabs>
      </Container>
    );
  }
}
export default TabsScrollableExample;