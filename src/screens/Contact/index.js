import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/Common/Icon'
import ContactsComponent from '../../components/ContactsComponent';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

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

  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
};

export default Contacts;