import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect, useState } from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/Common/Icon'
import ContactsComponent from '../../components/ContactsComponent';
import getContacts from '../../components/ContactsComponent/getContacts';
import {GlobalContext} from '../../context/Provider'

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    contactsDispatch,
    contactsState:{
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {

    getContacts()(contactsDispatch)

  },[])


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
      data={data}
      loading={loading}
    />
  );
};

export default Contacts;