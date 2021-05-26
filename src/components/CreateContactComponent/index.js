import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import Container from '../Common/Container';
import Input from '../Common/Input';
import CustomButton from '../Common/CustomButton';

const CreateContactComponent = () => {
  return(
    <View style={styles.container}>
      <Container>

        <Input label="Fist Name" placeholder='Enter First name'/>
        <Input label="Last Name" placeholder='Enter Last name'/>
        <Input label="Phone Number" placeholder='Enter Phone Namber'/>

        <CustomButton primary  title="Submit"/>

      </Container>
    </View>
  );
}

export default CreateContactComponent;