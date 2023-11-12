import React from 'react';

import {Button, Row} from '@components';
import {BackgroundProps, FunctionComponent, SpacingProps} from '@types';

type TopBarStyleProps = SpacingProps & BackgroundProps;

type TopBarProps = {
  goBack?: () => void;
  style?: TopBarStyleProps;
};

const TopBar: FunctionComponent<TopBarProps> = ({goBack, style = {}}) => {
  return (
    <Row style={style}>
      {goBack && (
        <Button
          icon="ArrowLeft"
          iconPosition="leading"
          style={{fontSize: 'medium'}}
          withTranslation="button.goBack"
          onPress={goBack}
        />
      )}
    </Row>
  );
};

export default TopBar;
