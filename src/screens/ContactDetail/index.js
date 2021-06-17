import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState, useContext, useRef } from 'react';
import {ActivityIndicator, Alert, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/theme/colors';
import Icon from '../../components/Common/Icon';
import ContactDetailsComponent from '../../components/ContactDetailsComponent';
import { CONTACT_LIST } from '../../constants/routeNames';
import deleteContact from '../../context/actions/contacts/deleteContact';
import editContact from '../../context/actions/contacts/editContact';
import { GlobalContext } from '../../context/Provider';
import uploadImage from '../../helpers/uploadImage';


const ContactDetail = () => {
  const {params: { item={}} = {}} = useRoute();
  const {
    contactsDispatch,
    contactsState:{
      deleteContact:{loading},
    },
  } = useContext(GlobalContext);
  const {setOptions, navigate} = useNavigation();
  const sheetRef = useRef(null)
  const [localFile, setLocalFile] = useState(null);
  const [updatingImage, setUpdatingImage] = useState(false);
  const [uploadSucceeded, setUploadSucceeded] = useState(false);

  useEffect(() => {
    if(item){
      console.log('TelaCotactDetail: TemImagem>',item)
      setOptions({
        title: item.first_name + ' ' + item.last_name,
        headerRight: () => {
          return (
          <View style={{flexDirection: 'row', paddingRight: 10}}>
            <TouchableOpacity >
            <Icon
              color={item.is_favorite ? colors.favorite : colors.grey}
              name={item.is_favorite ? 'star' : 'star-border'}
              type="MaterialIcon"
              size={21}
            />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Alert.alert('Delete!',`Are you sure you want to remove ${item.first_name}`, [
                  {
                    text:'Cancel',
                    onPress: () => {},
                  },
                  {
                    text:'OK',
                    onPress: () => {
                      deleteContact(item.id)(contactsDispatch)(()=>{
                        navigate(CONTACT_LIST);
                      });
                    },
                  },
                ]);
              }}
              style={{paddingLeft: 10}}>
            {loading ? (
              <ActivityIndicator size='small' colors={colors.primary}/>
            ) : (
                <Icon
                color={colors.primary}
                name='delete'
                type='MaterialIcon'
                size={21}/>)}
            </TouchableOpacity>
          </View>

          )
        },
      });
    }
  }, [item, loading]);

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

  const onfileSelected = (image) =>{
    closeSheet();
    setLocalFile(image);
    setUpdatingImage(true);
    uploadImage(localFile)((url) => {
      console.log('urlimagem contactdetail',url)
      const {
        first_name: firatName,

        last_name: lastName,
        phone_number: phoneNumber,

        country_code: phoneCode,
        is_favorite: isFavorite,
      } = item;

      editContact({
        firatName,
        lastName,
        phoneNumber,
        isFavorite,
        phoneCode,
        contactPicture: url
      },
        item.id,
      )(contactsDispatch)((item) =>{
        setUpdatingImage(false);
        setUploadSucceeded(true);
      });
    })((err) => {
      setUpdatingImage(false);
    });
  };

  return(
    <ContactDetailsComponent
    sheetRef={sheetRef}
    onfileSelected={onfileSelected}
    openSheet={openSheet}
    contact={item}
    localFile={localFile}
    uploadSucceeded={uploadSucceeded}
    updatingImage={updatingImage}
    />
  );
};

export default ContactDetail;