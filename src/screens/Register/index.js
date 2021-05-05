import React from 'react';
import { useState } from 'react';

// import {Text, View } from 'react-native';
import RegisterComponent from '../../components/Signup';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange=({name, value}) =>{
    setForm({...form, [name]: value });
    //aqui são validados os valores dos campos
    //verificar se a senha tem 6 caracters, melhorar isso ta orrivel
    if(value !== ''){
      if(name =='password'){
        if(value.length < 6){
          setErrors((prev) => {
            return {...prev, [name]: 'This field needs min 6 caracters'}
          });
        }else{
          setErrors((prev) => {
            return {...prev, [name]: null}
          });
      }
      }else{
        setErrors((prev) => {
          return {...prev, [name]: null}
        });
      }
    }else{
      setErrors((prev) => {
        return {...prev, [name]: 'This field is riquired'}
      });
    }
  };

  const onSubmit = () =>{
    //conditions
    console.log('form >> ',form);
    if(!form.userName){
      setErrors((prev) => {
        return {...prev, userName: 'Please add a username'}
      });
    }

    if(!form.firstName){
      setErrors((prev) => {
        return {...prev, firstName: 'Please add a first name'}
      });
    }

    if(!form.lastName){
      setErrors((prev) => {
        return {...prev, lastName: 'Please add a last name'}
      });
    }

    if(!form.email){
      setErrors((prev) => {
        return {...prev, email: 'Please add a email'}
      });
    }

    if(!form.password){
      setErrors((prev) => {
        return {...prev, password: 'Please add a passwor'}
      });
    }
  };

  return(
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default Register;