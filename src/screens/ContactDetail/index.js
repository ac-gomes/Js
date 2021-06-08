import { useRoute } from '@react-navigation/core';
import React from 'react';

import {Text, View } from 'react-native';
import ContactDetailsComponent from '../../components/ContactDetailsComponent';

const ContactDetail = () => {
  const {params: { item={}} = {}} = useRoute();

  return(

    <ContactDetailsComponent contact={item} />

  );
};

export default ContactDetail;