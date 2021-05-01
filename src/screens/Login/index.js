import React from 'react';

import {Text, View } from 'react-native';
import Container from '../../components/Common/Container';
import CustomButton from '../../components/Common/CustomButton';
import Input from '../../components/Common/Input';

const Login = () => {
 const [value, onChangeText] = React.useState('');
  return(
  <Container>
    <Input
      label='Username'
      onChangeText={(text) => onChangeText(text)}
      value={value}
      iconPosition ='right'
      error={"This field is required"}
    />

    <Input
      label='Password'
      onChangeText={(text) => onChangeText(text)}
      value={value}
      icon={<Text>HIDE</Text>}
      iconPosition ='right'
    />

    <CustomButton
      secondary
      title='Submit'
      loading={true}
      disabled={true}
     />
    <CustomButton secondary loading={true} title='Click Me'/>
    <CustomButton primary title='Submit' loading={true} disabled={true}/>
    <CustomButton danger title='Submit'/>

  </Container>
  );
};

export default Login;