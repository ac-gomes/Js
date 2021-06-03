import React, { useContext, useState } from 'react';
import { Image, View} from 'react-native';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContact from '../../components/CreateContactComponent/createContact';
import {useNavigation} from '@react-navigation/native';
import { CONTACT_LIST } from '../../constants/routeNames';
import {GlobalContext} from '../../context/Provider';
import { useRef } from 'react';

const CreateContact = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    }
  } = useContext(GlobalContext);

  const sheetRef = useRef(null)
  const [form, setForm] = useState({});
  const {navigate}=useNavigation();

  const onChangeText = ({name, value}) =>{
    setForm({...form, [name]: value})
  };

  const [localFile, setLocalFile] = useState(null);

  const onSubmit = () =>{
    console.log('form data > ',form)
   createContact(form)(contactsDispatch)(() =>{
     navigate(CONTACT_LIST);
   });
  };

  const closeSheet = () => {
    if(sheetRef.current){
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if(sheetRef.current){
      sheetRef.current.open();
    }
  };

  const toggleValueChange = () =>{
    setForm({...form, 'isFavorite': !form.isFavorite});
  };

  const onfileSelected = (image) =>{
    closeSheet();
    setLocalFile(image);
    // console.log('img', images);
  };

  return(
      <CreateContactComponent
       onSubmit={onSubmit}
       onChangeText ={onChangeText}
       form={form}
       setForm={setForm}
       loading={loading}
       toggleValueChange={toggleValueChange}
       error={error}
       sheetRef={sheetRef}
       closeSheet={closeSheet}
       openSheet={openSheet}
       onfileSelected={onfileSelected}
       localFile={localFile}
       />
  );
};

export default CreateContact;