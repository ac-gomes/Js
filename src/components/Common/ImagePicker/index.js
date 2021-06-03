import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './styles';
import  Icon  from '../Icon';
import colors from '../../../assets/theme/colors';

const ImagePicker = React.forwardRef( ({}, ref) => {
  const options = [
    {
      name: "Take from camera",
      icon: <Icon color={colors.grey} name='camera'  size={21}/>,
      onPress: () => {},
    },
    {
      name: "Choose from Gallery",
      icon: <Icon color={colors.grey} name='image' size={21}/>,
      onPress: () => {},
    }
  ]
  return (
    <RBSheet
          ref={ref}
          height={150}
          openDuration={250}
          closeOnDragDown
          customStyles={{
            container: {
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            },
          }}>
          <View style={styles.optionWrapper}>
            {options.map(({name, onPress, icon}) => (
              <TouchableOpacity style={styles.pickerOptions} key={name}>
                {icon}
                <Text style={styles.text}>{name}</Text>
              </TouchableOpacity>
            ))}
          </View>
    </RBSheet>
  )
})

export default ImagePicker;