import {useNavigation} from '@react-navigation/native';
import React,{useState} from 'react'

import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/Common/Container';
import CustomButton from '../../components/Common/CustomButton';
import Input from '../../components/Common/Input';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  loading,
  error,
  errors,
}) => {
  const {navigate} = useNavigation();
    return(
    <Container>
      <Image height={70}
        width={70}
        source={require('../../assets/images/register2.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to XYZ!</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          {/* Verificar pq o state não atualizou o erro */}
          {error?.error && <Text>{error?.error}</Text>}

          <Input
            label='Username'
            iconPosition ='right'
            placeholder="Enter Username"
            error={errors.userName || error?.username?.[0]}
            onChangeText={(value)=>{
              onChange({name: 'userName', value});
            }}
          />

          <Input
            label='First name'
            iconPosition ='right'
            placeholder='Enter First name'
            error={errors.firstName || error?.first_name?.[0]}
            onChangeText={(value)=>{
            onChange({name: 'firstName', value});
            }}
          />

          <Input
            label='Last name'
            iconPosition ='right'
            placeholder='Enter Last name'
            error={errors.lastName || error?.last_name?.[0]}
            onChangeText={(value)=>{
              onChange({name: 'lastName', value});
            }}
          />

          <Input
            label='Email'
            iconPosition ='right'
            placeholder="Enter Email"
            error={errors.email || error?.email?.[0]}
            onChangeText={(value)=>{
              onChange({name: 'email', value});
            }}
          />

          <Input
            label='Password'
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition ='right'
            error={errors.password || error?.password?.[0]}
            onChangeText={(value)=>{
              onChange({name: 'password', value});
            }}
          />
          {console.log('error:', error)}
          <CustomButton
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
            primary
            title='Submit'
          />

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