import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Container from '../../components/Common/Container';
import Icon from '../../components/Common/Icon'

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft:() => (
          <TouchableOpacity onPress={() =>{
            toggleDrawer();
          }}>
          <Icon type="MaterialIcon" style={{padding: 10}} size={25} name='menu'/>
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