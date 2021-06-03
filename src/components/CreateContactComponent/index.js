import React from 'react';
import { View, Text, Switch,Image } from 'react-native';
import styles from './style';
import Container from '../Common/Container';
import Input from '../Common/Input';
import CustomButton from '../Common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal'
import { DEFAULT_IMAGE_URI } from '../../constants/general';
import colors from '../../assets/theme/colors';
import ImagePicker from '../Common/ImagePicker';
import { TouchableOpacity } from 'react-native-gesture-handler';



const CreateContactComponent = ({
  loading,
  error,
  onChangeText,
  setForm,
  onSubmit,
  toggleValueChange,
  form,
  sheetRef,
  openSheet,
  localFile,
  onfileSelected,
 }) => {
  console.log('localFile', localFile);
  return(
    <View style={styles.container}>
      <Container>
        <Image
          width={150}
          height={150}
          source={{uri: localFile?.path || DEFAULT_IMAGE_URI }} //colcoar o icone aqui user-circle
          style={styles.imageView}
        />
        <TouchableOpacity onPress={openSheet}>
        <Text style={styles.chooseText}>Choose image</Text>
        </TouchableOpacity>

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
          label="Phone Number"
          placeholder='Enter Phone Namber'
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 17}}>Add to favorites</Text>
          <Switch
            trackColor={{ false: '#767577', true: colors.primary }}
            thumbColor={'#ffffff'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleValueChange}
            value={form.isFavorite}
          />
        </View>

        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />

      </Container>

      <ImagePicker onfileSelected={onfileSelected} ref={sheetRef}/>

    </View>
  );
}

export default CreateContactComponent;