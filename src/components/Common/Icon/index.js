//import all fonts here.
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const getIconFont= type => {
  switch (type) {
    case 'MaterialIcon':
        return MaterialIcon;
    case 'Octicons':
        return Octicons;
    case 'MaterialCommunityIcons':
        return MaterialCommunityIcons;
    default:
      return FontAwesome;
  }
};

const Icon = ({type, ...props}) => {
  const FontIcon=getIconFont(type);

  return <FontIcon {...props}/>;
};

export default Icon;