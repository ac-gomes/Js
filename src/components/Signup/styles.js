import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";


export default StyleSheet.create({
  logoImage: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: 5,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    padding: 5,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 5,
    fontWeight: '500',
  },
  form: {
    paddingTop: 5,
  },
  createSection: {
    flexDirection: 'row',

  },
  linkBtn: {
    paddingLeft: 17,
    color:colors.primary,
    fontSize: 16,
  },
  infoText: {
    fontSize: 17,
  },

});