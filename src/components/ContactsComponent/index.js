import React from 'react';
import {View, Text, FlatList, ActivityIndicator, Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../Common/AppModal';
import Icon from '../Common/Icon';
import Message from '../Common/Message'
import styles from "./styles"

const ContactsComponent = ({modalVisible, data, loading, setModalVisible, }) => {

  const ListEmptyComponent = () => {
    return(
    <View style={{paddingVertical:100, paddingHorizontal:100}}>
      <Message info message='No contacts' />
    </View>
    )
  };

  const renderItem = ({item}) => {
    console.log('item >>', item);
    const {
      contact_piture,
      first_name,
      last_name,
      phone_number,
    } = item;

    return (
    <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {contact_piture ? (
            <Image
                style={{width:45, height:45, borderRadius:100, paddingVertical:5,}}
                source={{uri: contact_piture}}
            />
            ) : (
            <View
              style={{
                width:45,
                height:45,
                backgroundColor:colors.grey
              }}></View>
            )}

            <View>
              <Text>{`${first_name} ${last_name}`}</Text>
            </View>
              <Text>{`${phone_number}`}</Text>
        </View>
        <Icon type='MaterialIcons' name='chevron-right' />
    </TouchableOpacity>

     )

  };

  return (

    <View>
      <AppModal
        //modalFooter={<></>}
        modalBody={
          <View>
            <Text>Change profiles here</Text>
          </View>
        }
        title='My Profile!'
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      {loading && (
       <View style={{paddingVertical:100, paddingHorizontal:100}}>
      <ActivityIndicator color={colors.primary} size='large' /></View>
      )}

      {!loading && (
        <View style={{paddingVertical: 20,}}>
          <FlatList
          renderItem={renderItem}
          data={data}
          keyExtractor={(item) => String(item.id)}
          ListEmptyComponent={ListEmptyComponent}
          ListFooterComponent={<View style={{height:150}}></View>}
          />

        </View>
      )}
    </View>
  );
};

export default ContactsComponent;
