import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Transaction from './screens/TransactionScreen';
import Search from './screens/SearchScreen';

export default class App extends React.Component{
  render(){
    return(
        <AppContainer></AppContainer>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction:{
    screen:Transaction
  },
  Search:{
    screen:Search
  }
})

const AppContainer = createAppContainer(
  TabNavigator
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
