import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Container from '../../components/Common/Container';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft:() => (
          <TouchableOpacity onPress={() =>{
            toggleDrawer();
          }}>
          <Text style={{padding:10}}>Nav</Text>
          </TouchableOpacity>
        ),
      });
  },  []);

  return(
    <Container>
      <Text>Hi from contacts</Text>
    </Container>
  );
};

export default Contacts;