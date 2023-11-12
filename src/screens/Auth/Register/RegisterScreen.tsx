import React from 'react';
import {useForm} from 'react-hook-form';

import {RegisterForm, RegisterFormSchema, registerSchema} from '@data';
import {yupResolver} from '@hookform/resolvers/yup';
import {RegisterScreenRouteProp} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {RegisterView} from '@views';

const RegisterScreen = () => {
  const navigation = useNavigation<RegisterScreenRouteProp>();

  const {
    control,
    reset,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterFormSchema>({resolver: yupResolver(registerSchema)});

  const form: RegisterForm = {
    control,
    fields: [
      {
        name: 'username',
        label: 'form.label.username',
        placeholder: 'form.placeholder.username',
        type: 'text',
        error: errors.username,
      },
      {
        name: 'email',
        label: 'form.label.email',
        placeholder: 'form.placeholder.email',
        type: 'text',
        error: errors.email,
      },
      {
        name: 'password',
        label: 'form.label.password',
        placeholder: 'form.placeholder.password',
        type: 'password',
        error: errors.password,
      },
      {
        name: 'confirmPassword',
        label: 'form.label.confirmPassword',
        placeholder: 'form.placeholder.confirmPassword',
        type: 'password',
        error: errors.confirmPassword,
      },
    ],
  };

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  const onReset = () => {
    reset();
  };

  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <RegisterView
      form={form}
      onGoBack={onGoBack}
      onReset={onReset}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterScreen;
