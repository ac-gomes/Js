import React from 'react';
import {View, Text} from 'react-native';
import AppModal from '../Common/AppModal';
import CustomButton from '../Common/CustomButton'

const ContactsComponent = ({modalVisible, setModalVisible}) => {
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

      <CustomButton
        title = 'Open Modal'
        secondary
        onPress={() => {
        setModalVisible(true);
        }}
      />
    </View>
  );
};

export default ContactsComponent;
