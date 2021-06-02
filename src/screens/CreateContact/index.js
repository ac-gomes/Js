import React, { useContext, useState } from 'react';
import { View} from 'react-native';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContact from '../../components/CreateContactComponent/createContact';
import {useNavigation} from '@react-navigation/native';
import { CONTACT_LIST } from '../../constants/routeNames';
import {GlobalContext} from '../../context/Provider';

const CreateContact = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    }
  } = useContext(GlobalContext);

  const [form, setForm] = useState({});
  const {navigate}=useNavigation();

  const onChangeText = ({name, value}) =>{
    setForm({...form, [name]: value})
  };

  const onSubmit = () =>{
   createContact(form)(contactsDispatch)(() =>{
     navigate(CONTACT_LIST);
   });
  };

  return(
      <CreateContactComponent
       onSubmit={onSubmit}
       onChangeText ={onChangeText}
       form={form}
       setForm={setForm}
       loading={loading}
       error={error}
       />
  );
};

export default CreateContact;