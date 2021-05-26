import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, FlatList, ActivityIndicator, Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import colors from '../../assets/theme/colors';
import { CREATE_CONTACT } from '../../constants/routeNames';
import AppModal from '../Common/AppModal';
import Icon from '../Common/Icon';
import Message from '../Common/Message'
import styles from "./styles"

const ContactsComponent = ({modalVisible, data, loading, setModalVisible, }) => {
  const {navigate} = useNavigation();

  const ListEmptyComponent = () => {
    return(
    <View style={{paddingVertical:100, paddingHorizontal:100}}>
      <Message info message='No contacts' />
    </View>
    )
  };

  const renderItem = ({item}) => {
    const {
      contact_piture,
      first_name,
      country_code,
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
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:colors.grey,
                borderRadius:100,
              }}>

                <Text style={styles.name,{color: colors.white}}>
                  {`${first_name[0]}${last_name[0]}`}
                </Text>

              </View>

            )}

            <View style={{paddingLeft:20}}>
              <View>
                <Text style={styles.name}>{`${first_name} ${last_name}`}</Text>
              </View>
                <Text style={styles.phoneNumber}>{`${country_code} ${phone_number} `}</Text>
            </View>
        </View>
        <Icon type='MaterialIcons' name='chevron-right' size={17} color={colors.grey}  />
    </TouchableOpacity>

     )

  };

  return (
    <>
      <View style={{backgroundColor: colors.white}}>
        <AppModal
          modalFooter={<></>}
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
            ItemSeparatorComponent={() => (
              <View style={{height: 0.5, backgroundColor: colors.grey}}></View>
            )}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{height:150}}></View>}
            />

          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.floatingActionButton}
          onPress={() => {
            navigate(CREATE_CONTACT);
          }}>
        <Icon type='MaterialCommunityIcons' name="plus" size={30} color={colors.white}/>
      </TouchableOpacity>

    </>
  );
};

export default ContactsComponent;
