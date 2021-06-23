import React from 'react';
import {ScrollView, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/theme/colors'
import AppModal from '../Common/AppModal';
import Icon from '../Common/Icon'

const SettingsComponent = ({
  modalVisible,
  setModalVisible,
  settinsOptions,
  preference,
}) => {
  return (
    <>
      <AppModal
      modalVisible={modalVisible}
      modalFooter={<></>}
      closeOnTouchOutside={false}
      modalBody={
      <View>
        {preference.map(({name, selected, onPress}) => (
          <View key={name}>
            <TouchableOpacity
              onPress={onPress}
              style={{
                flexDirection: 'row',
                paddingVertical: 5,
                alignItems: 'center'
              }}>
              {selected && <Icon name="check" type="MaterialIcon" size={17}/>}
              <Text style={{fontSize: 17, paddingLeft: selected ? 15 : 30}}>{name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>}
      title="Sort by"
      setModalVisible={setModalVisible}
      />

      <ScrollView style={{backgroundColor: colors.white}}>
        {settinsOptions.map(({title, subTitle, onPress}, index) => (

            <TouchableOpacity key={title} onPress={onPress}>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingBottom: 20,
                  paddingTop: 20,
                }}>
                <Text style={{fontSize: 17}}>{title}</Text>
                {subTitle && <Text
                  style={{
                    fontSize: 14,
                    opacity: 0.5,
                    paddingTop: 5,
                  }}>{subTitle}</Text>}
              </View>

              <View style={{height: 0.5, backgroundColor: colors.grey }}/>
            </TouchableOpacity>
          ))}

      </ScrollView>
    </>
  )
}

export default SettingsComponent;