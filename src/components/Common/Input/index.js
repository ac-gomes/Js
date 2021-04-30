import React from 'react';
import {View, Text, TextInput} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Input = ({
  onChangeText,
  iconPosition,
  icon,
  style,
  value,
  label,
  error,
}) => {
  const getFlexDirection = () => {

    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row' ;
      }else if (iconPosition === 'right') {
        return 'row-reverse' ;
      }
    }
  };

  // console.log(getFlexDirection());

  const getBorderColor = () => {
    if(error){
      return colors.danger;
    }else{
      return colors.grey;
    }
  };

  return(
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}

      <View
      style={[
        styles.wrapper,
        {borderColor: getBorderColor(), flexDirection: getFlexDirection()}
      ]}>
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;