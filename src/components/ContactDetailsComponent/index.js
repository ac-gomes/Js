import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
 } from 'react-native';
import colors from '../../assets/theme/colors';
import { CONTACT_DETAIL, CREATE_CONTACT } from '../../constants/routeNames';
import Icon from '../Common/Icon';
import styles from "./styles"
import ImageComponent from './ImageComponent';
import ImagePicker from '../Common/ImagePicker';
import CustomButton from '../Common/CustomButton';
import { DEFAULT_IMAGE_URI } from '../../constants/general';


const ContactDetailsComponent = ({
  contact,
  openSheet,
  sheetRef,
  onfileSelected,
  updatingImage,
  localFile,
  uploadSucceeded,
}) => {
  const {navigate} = useNavigation();

    const {
      contact_picture,
      first_name,
      country_code,
      last_name,
      phone_number,
    } = contact;
    console.log('ContactDetailsComponent localfile>',localFile?.path)
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {(contact_picture || uploadSucceeded) && (
          <ImageComponent src={contact_picture || localFile?.path} />
        )}

        {!contact_picture && !uploadSucceeded && (
          <View style={{alignItems: 'center', paddingVertical: 20}}>
            <Image
              width={150}
              height={150}
              source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
              style={styles.imageView}
            />

            <TouchableOpacity
              onPress={() => {
                openSheet();
              }}>
              <Text style={{color: colors.primary}}>
                {' '}
                {updatingImage ? 'updating...' : 'Add picture'}{' '}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.content}>
          <Text style={styles.names}>{`${first_name} ${last_name}`}</Text>
        </View>

        <View style={styles.hrLine} />

        <View style={styles.topCallOptions}>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="MaterialIcon"
              name="call"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="MaterialCommunityIcons"
              name="message-text"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="FontAwesome"
              name="video-camera"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Video</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.middleCallOptions}>
          <Icon
            type="MaterialIcon"
            name="call"
            color={colors.grey}
            size={27}
          />
          <View style={styles.phoneMobile}>
            <Text>{phone_number}</Text>
            <Text>Mobile</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',

            }}>
            <Icon
              type="FontAwesome"
              name="video-camera"
              color={colors.primary}
              size={27}
            />
            <Icon
              type="MaterialCommunityIcons"
              name="message-text"
              color={colors.primary}
              size={27}
              // style={[styles.msgIcon]}
            />
          </View>
        </View>
        <CustomButton
          style={{alignSelf: 'flex-end', marginRight: 20, width: 200}}
          primary
          title="Edit Contact"
          onPress={() => {
            navigate(CREATE_CONTACT, {contact, editing: true});
          }}
        />
      </View>

      <ImagePicker onfileSelected={onfileSelected} ref={sheetRef} />
    </ScrollView>
  );
};

export default ContactDetailsComponent;