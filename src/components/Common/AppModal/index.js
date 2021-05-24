import React from 'react';
import {View, TouchableOpacity, Text, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from '../../Common/Icon'
import styles from './styles';


const AppModal = ({
  modalVisible,
  modalFooter,
  modalBody,
  title,
  setModalVisible
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => {setModalVisible(false)}}
        style={styles.wrapper}>
        <View style={styles.modalView}>
          <ScrollView >

            <View style={styles.header}>
              <Icon size={25} type="MaterialCommunityIcons" name="close" />
              <Text style={styles.title}>{title || 'RNContacts'}</Text>
              <View/>
              <View/>
              <View/>
              <View/>
            </View>
            <View style={styles.footerSeparator} />

            <View style={styles.body}>{modalBody}</View>
            {modalFooter}


            {!modalFooter && (
            <View>
              <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of Service</Text>
                    </View>
                  </View>
              </>
            </View>)}


          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;
