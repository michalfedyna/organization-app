import React from 'react';

import {Button, Column, Input, Row, Screen} from '@components';
import {FunctionComponent} from '@types';

type RegisterViewProps = {
  onGoBack: () => void;
  onSubmit: () => void;
  onReset: () => void;
  form: any;
};

const RegisterView: FunctionComponent<RegisterViewProps> = ({onGoBack}) => {
  return (
    <Screen scrollable withTopBar goBack={onGoBack}>
      <Column style={{flex: 1, justify: 'end'}}>
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
        <Row style={{justify: 'end', marginVertical: 'large'}}>
          <Button
            style={{
              fontColor: 'text',
              paddingHorizontal: 'medium',
              paddingVertical: 'small',
            }}
            withTranslation="button.clear"
          />
          <Button
            style={{
              backgroundColor: 'accent',
              fontColor: 'textInverted',
              paddingHorizontal: 'medium',
              paddingVertical: 'small',
            }}
            withTranslation="button.submit"
          />
        </Row>
      </Column>
    </Screen>
  );
};

export default RegisterView;
