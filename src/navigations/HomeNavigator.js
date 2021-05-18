import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import{
  CONTACT_LIST,
  CREATE_CONTACT,
  CONTACT_DETAIL,
  SETTINGS
} from '../constants/routeNames'
import Contacts from '../screens/Contact'
import ContactDetail from '../screens/ContactDetail'
import CreateContact from '../screens/CreateContact'
import Settings from '../screens/Settings'


const HomeNavigator = () => {
  const HomeStack = createStackNavigator()
  return (
      <HomeStack.Navigator initialRouteName={CONTACT_LIST}>

      <HomeStack.Screen name={CONTACT_LIST}  component={Contacts}/>
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail}/>
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}/>
      <HomeStack.Screen name={SETTINGS} component={Settings}/>

    </HomeStack.Navigator>
  );
};

export default HomeNavigator;