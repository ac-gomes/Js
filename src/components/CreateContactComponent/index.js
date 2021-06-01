import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import Container from '../Common/Container';
import Input from '../Common/Input';
import CustomButton from '../Common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal'
import { DEFAULT_IMAGE_URI } from '../../constants/general';
import Icon from '../../components/Common/Icon'


const CreateContactComponent = () => {
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
        <Input label="Fist Name" placeholder='Enter First name'/>
        <Input label="Last Name" placeholder='Enter Last name'/>
        <Input icon={ <CountryPicker
          withFilter
          withFlag
          withCountryNameBUtton={false}
          withEmoji
          onSelect={() => {}}

          />
        }
        style={{paddingLeft: 10}}
        iconPosition='left'
        label="Phone Number" placeholder='Enter Phone Namber'/>

        <CustomButton primary  title="Submit"/>

      </Container>
    </View>
  );
}

export default CreateContactComponent;