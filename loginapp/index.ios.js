import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Scene, Router, TabBar, Modal, Actions} from 'react-native-router-flux';

import Login from './app/components/Login';

export default class loginapp extends Component {
  render() {
    return (
      <Router>
          <Scene key='root'  >



              <Scene key='tabbar' tabs={true}  tabBarStyle={{backgroundColor:'transparent', zIndex:1, }}>

                <Scene  icon={TabIcon} key='Page2' component={Login} title='Check Out' i='shopping-cart'
                  hideNavBar

                  />

                <Scene   icon={TabIcon} key='home' component={Login} title="Home"
                  hideNavBar
                   i='home'
                  //  initial={true}
                />
                <Scene  icon={TabIcon} key='Page3' component={Login}
                  hideNavBar
                  title='Settings'
                i='cog' />
                <Scene  key='Login' component={Login} title='Log In'
                  hideNavBar hideTabBar
                   initial={true}
                  />


              </Scene>



          </Scene>

        </Router>
       );
    }
  }



AppRegistry.registerComponent('loginapp', () => loginapp);
