import React from 'react';
import {BackgroundProps, FunctionComponent, SpacingProps} from '@types';
import {Button, Row} from '@components';

type TopBarProps = SpacingProps &
  BackgroundProps & {
    goBack?: () => void;
  };

const TopBar: FunctionComponent<TopBarProps> = ({goBack, ...props}) => {
  return (
    <Row {...props}>
      {goBack && (
        <Button
          icon="ArrowLeft"
          iconPosition="leading"
          fontSize="medium"
          padding="medium"
          onPress={goBack}
          withTranslation="button.goBack"
        />
      )}
    </Row>
  );
};

export default TopBar;
