import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptor"

// export const clearAuthState = () => (dispatch) => {
//   dispatch({
//     type: CLEAR_AUTH_STATE,
//   })
// }

export default ({password, userName: username}) => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  axiosInstance
  .post('auth/login', {
  password,
  username,
  })
  .then((res) => {
    console.log('res.data>>', res.data);
    AsyncStorage.setItem('token', res.data.token);
    AsyncStorage.setItem('user', JSON.stringify(res.data.user));
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  })
  .catch((err) => {
    console.log('err>>', err.response)
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response
       ? err.response.data
       : { error: 'Something went wrong, try agin'}
    });
  });
};

/*
A mensagem de erro está quebrando a tela de registro pq
o ternario no payload acima quando o registro falha não esta pegando o
objeto error: msg... como o state não é atualizado com um objeto
atela de login quebra pois espera receber um objeto
*/

// err.response
// ? err.response.data
// : {error: 'Something went wrong, try agin'},