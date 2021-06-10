import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useContext } from 'react';

import {ActivityIndicator, Alert, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/theme/colors';
import Icon from '../../components/Common/Icon';
import ContactDetailsComponent from '../../components/ContactDetailsComponent';
import { CONTACT_LIST } from '../../constants/routeNames';
import deleteContact from '../../context/actions/contacts/deleteContact';
import { GlobalContext } from '../../context/Provider';
import { navigate } from '../../navigations/SideMenu/RootNavigator';

const ContactDetail = () => {
  const {params: { item={}} = {}} = useRoute();
  const {setOptions} = useNavigation();
  const {
    contactsDispatch,
    contactsState:{
      deleteContact:{loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if(item){
      setOptions({
        title: `${item.first_name} ${item.last_name}`,
        headerRight: () => {
          return (
          <View style={{flexDirection: 'row', paddingRight: 10}}>
            <TouchableOpacity >
            <Icon
              color={colors.grey}
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
                color={colors.grey}
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

  return(

    <ContactDetailsComponent contact={item} />

  );
};

export default ContactDetail;