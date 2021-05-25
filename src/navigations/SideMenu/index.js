import React from 'react';
import {
  Alert,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Text,
  View
} from 'react-native';
import Container from '../../components/Common/Container';
import { SETTINGS } from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';
 import styles from './styles';
 import Icon from '../../components/Common/Icon'

const SideMenu = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!','Are you sure you want to logout?', [
      {
        text:'Cancel',
        onPress: () => {},
      },

      {
        text:'OK',
        onPress: () => {
          logoutUser() (authDispatch);
          console.log('sair');
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icon type="MaterialIcon" size={17} name="settings"/>,
      name:'Settings',
      onPress:() => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Icon type="MaterialIcon" size={17} name="logout"/>,
      name:'Logout',
      onPress: handleLogout,
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
              <View style={styles.icon}>{icon}</View>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
   </SafeAreaView>
   );
};

export default SideMenu;