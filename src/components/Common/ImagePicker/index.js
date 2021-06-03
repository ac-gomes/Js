import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './styles';
import  Icon  from '../Icon';
import colors from '../../../assets/theme/colors';
import ImagePickerCropper from 'react-native-image-crop-picker';

const ImagePicker = React.forwardRef( ({onfileSelected}, ref) => {
  const options = [
    {
      name: "Take from camera",
      icon: <Icon color={colors.grey} name='camera'  size={21}/>,
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        }).then((images) => {
            onfileSelected(images);
        }).catch(error =>{
          console.log('err', error)
        });
      },
    },
    {
      name: "Choose from Gallery",
      icon: <Icon color={colors.grey} name='image' size={21}/>,
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        }).then((images) => {
            onfileSelected(images);
        }).catch(error =>{
          console.log('err', error)
        });
      },
    }
  ]
  return (
    <RBSheet
          ref={ref}
          height={160}
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
              <TouchableOpacity
                onPress={onPress}
                style={styles.pickerOptions}
                key={name}
              >
                {icon}
                <Text style={styles.text}>{name}</Text>
              </TouchableOpacity>
            ))}

          </View>

    </RBSheet>
  )
})

export default ImagePicker;