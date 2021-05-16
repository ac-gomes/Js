import {useNavigation} from '@react-navigation/native';
import React from 'react'

import {Text, View, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/Common/Container';
import CustomButton from '../../components/Common/CustomButton';
import Input from '../../components/Common/Input';
import styles from './styles';
import {REGISTER} from '../../constants/routeNames';
import Message from '../Common/Message';

const LoginComponent = ({error, onChange, loading , onSubmit}) => {
  const {navigate} = useNavigation();
    return(
    <Container>
      <Image height={70} width={70}
       source={require('../../assets/images/react-native2-logo.png')}
       style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Bem Vindo!</Text>
        <Text style={styles.subTitle}>Please Login here</Text>


        <View style={styles.form}>
        {error && !error.error && (
          <Message
           onDismiss={() => {}}
           danger
           message="Invalid Credentials"
          />
        )}

        {error?.error && (<Message
            danger
            onDismiss
            message={error?.error}
          />)}

          <Input
          label='Username'
          iconPosition ='right'
          placeholder="Enter Username"
          onChangeText={(value)=>{
              onChange({name: 'userName', value});
            }}
          />

          <Input
          label='Password'
          placeholder="Enter Password"
          secureTextEntry={true}
          icon={<Text>Show</Text>}
          iconPosition ='right'
          onChangeText={(value)=>{
            onChange({name: 'password', value});
          }}
          />

          <CustomButton
            disabled={loading}
            onPress={onSubmit}
            loading={loading}
            primary
            title='Submit'
            />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity onPress={() => {
              navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn} >Register</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Container>
  )
}
export default LoginComponent;