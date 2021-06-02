import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import Container from '../Common/Container';
import Input from '../Common/Input';
import CustomButton from '../Common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal'
import { DEFAULT_IMAGE_URI } from '../../constants/general';



const CreateContactComponent = ({
  loading,
  error,
  onChangeText,
  setForm,
  onSubmit,
  form }) => {

  return(
    <View style={styles.container}>
      <Container>
        <Image
          width={150}
          height={150}
          source={{uri:DEFAULT_IMAGE_URI }} //colcoar o icone aqui user-circle
          style={styles.imageView}
        />
        <Text style={styles.chooseText}>Choose image</Text>
        <Input
          onChangeText={(value) => {
            onChangeText({name: 'firstName', value: value})
          }}
          label="Fist Name"
          placeholder='Enter First name'
          error={error?.first_name?.[0]}
        />

        <Input
          onChangeText={(value) => {
            onChangeText({name: 'lastName', value: value})
          }}
          label="Last Name"
          placeholder='Enter Last name'
          error={error?.last_name?.[0]}
        />

        <Input icon={ <CountryPicker
          withFilter
          withFlag
          countryCode={form.countryCode || undefined}
          withCountryNameButton={false}
          withCallingCode
          withCallingCodeButton
          withEmoji
          onSelect={(v) => {
            const phoneCode = v.callingCode[0];
            const cCode = v.cca2;
            setForm({...form, phoneCode, countryCode:cCode})
          }}/>
        }
        style={{paddingLeft: 10}}
        iconPosition='left'
        error={error?.phone_number?.[0]}
        onChangeText={(value) => {
          onChangeText({name: 'phoneNumber', value: value})
        }}
        label="Phone Number" placeholder='Enter Phone Namber'/>

        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />

      </Container>
    </View>
  );
}

export default CreateContactComponent;