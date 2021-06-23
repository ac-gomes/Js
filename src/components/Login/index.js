import {useNavigation} from '@react-navigation/native';
import React, { useState } from 'react'

import {Text, View, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/Common/Container';
import CustomButton from '../../components/Common/CustomButton';
import Input from '../../components/Common/Input';
import styles from './styles';
import {REGISTER} from '../../constants/routeNames';
import Message from '../Common/Message';
import Icon from '../Common/Icon';
import colors from '../../assets/theme/colors';

const LoginComponent = ({
  error,
  form,
  justSignedUp,
  onChange,
  loading,
  onSubmit,
}) => {
  const {navigate} = useNavigation();
  const [isSecuredEntry, setIsSecuredEntry] = useState(true);
    return(
    <Container>
      <Image
        height={72}
        width={72}
        source={require('../../assets/images/icon-rn.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subTitle}>Please Login here</Text>

        <View style={styles.form}>
        {justSignedUp && (
           <Message
           onDismiss={() => {}}
           success
           message="Account created successfully"
          />
        )}

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
          value={form.userName || null }
          onChangeText={(value)=>{
              onChange({name: 'userName', value});
            }}
          />

          <Input
          label='Password'
          placeholder="Enter Password"
          secureTextEntry={isSecuredEntry}
          icon={
            <TouchableOpacity onPress={() => {
              setIsSecuredEntry(prev => !prev)
            }}>
              {isSecuredEntry ?
                <Icon
                type="MaterialCommunityIcons"
                name="eye"
                color={colors.grey}
                size={27}
                />
                :
               <Icon
               type="MaterialCommunityIcons"
               name="eye-off"
               color={colors.secondary}
               size={27}
              />
             }


            </TouchableOpacity>
          }
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