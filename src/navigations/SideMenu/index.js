import { loadOptions } from '@babel/core';
import React from 'react';
import { SafeAreaView, Image,Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../../components/Common/Container';
import { SETTINGS } from '../../constants/routeNames';
 import styles from './styles';

const SideMenu = ({navigation}) => {

  const menuItems = [
    {
      icon: <Text>T</Text>,
      name:'Settings',
      onPress:() => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Text>T</Text>,
      name:'LogOut',
      onPress:() => {
        //logout
      },
    },
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
        height={70}
        width={70}
          source={require('../../assets/images/react-native2-logo.png')}
          style={styles.logoImage}
        />
        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({name, icon, onPress}) =>(
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
   </SafeAreaView>
   );
};

export default SideMenu;