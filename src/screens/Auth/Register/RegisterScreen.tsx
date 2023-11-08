import React from 'react';

import {Button, Column, Input, Row, Screen} from '@components';
import {RegisterScreenRouteProp} from '@navigation';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation<RegisterScreenRouteProp>();

  return (
    <Screen withInput withTopBar goBack={() => navigation.goBack()}>
      <Column flex justify="end" paddingHorizontal="large">
        <Input label="form.label.email" placeholder="form.placeholder.email" />
        <Input
          secure
          label="form.label.password"
          placeholder="form.placeholder.password"
        />
        <Input
          secure
          label="form.label.confirmPassword"
          placeholder="form.placeholder.confirmPassword"
        />
        <Row justify="end" marginVertical="large">
          <Button
            fontColor="text"
            paddingHorizontal="medium"
            paddingVertical="small"
            withTranslation="button.clear"
          />
          <Button
            backgroundColor="accent"
            fontColor="textInverted"
            paddingHorizontal="medium"
            paddingVertical="small"
            withTranslation="button.submit"
          />
        </Row>
      </Column>
    </Screen>
  );
};

export default RegisterScreen;
