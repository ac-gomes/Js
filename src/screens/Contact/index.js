import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect, useState } from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/Common/Icon'
import ContactsComponent from '../../components/ContactsComponent';
import getContacts from '../../components/ContactsComponent/getContacts';
import {GlobalContext} from '../../context/Provider'

const Contacts = ({navigation}) => {

  const [sortBy, setSortBy] = React.useState(null);
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    contactsDispatch,
    contactsState:{
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    if(sortPref){
      setSortBy(sortPref)
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getSettings();
      return () => {

      }
    }, [])
  )

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
      sortBy={sortBy}
    />
  );
};

export default Contacts;