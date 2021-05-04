import {useNavigation} from '@react-navigation/native';
import React from 'react'

import {Text, View, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/Common/Container';
import CustomButton from '../../components/Common/CustomButton';
import Input from '../../components/Common/Input';
import styles from './styles';
import {LOGIN} from '../../constants/routeNames';

const RegisterComponent = () => {
  const {navigate} = useNavigation();
    return(
    <Container>
      <Image height={70} width={70}
       source={require('../../assets/images/register2.png')}
       style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Bem Vindo!</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>

          <Input
          label='Username'
          iconPosition ='right'
          placeholder="Enter Username"
          />
          <Input
          label='First name'
          iconPosition ='right'
          placeholder="Enter First name"
          />

          <Input
          label='Last name'
          iconPosition ='right'
          placeholder='Enter Last name'
          />

          <Input
          label='Email'
          iconPosition ='right'
          placeholder="Enter Email"
          />

          <Input
          label='Password'
          placeholder="Enter Password"
          secureTextEntry={true}
          icon={<Text>Show</Text>}
          iconPosition ='right'/>

          <CustomButton primary title='Submit'/>

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have a account?</Text>
            <TouchableOpacity onPress={() => {
              navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn} >Login</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Container>
  )
}
export default RegisterComponent;