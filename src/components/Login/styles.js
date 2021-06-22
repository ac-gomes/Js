//import { StyleSheet } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "../../assets/theme/colors";


export default ScaledSheet.create({
  logoImage: {
    height: '130@s',
    width: '130@s',
    alignSelf: 'center',
    marginTop: '50@s',
  },
  title: {
    fontSize: '21@s',
    textAlign: 'center',
    padding: '20@s',
    fontWeight: '500',
  },
  subTitle: {
    fontSize: '17@s',
    textAlign: 'center',
    paddingVertical: '10@s',
    fontWeight: '500',
  },
  form: {
    paddingTop: '20@s',
  },
  createSection: {
    flexDirection: 'row',

  },
  linkBtn: {
    paddingLeft: '17@s',
    color:colors.primary,
    fontSize: '16@s',
  },
  infoText: {
    fontSize: '17@s',
  },

});