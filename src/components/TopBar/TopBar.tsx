import React from 'react';

import {Button, Row} from '@components';
import {ThemedViewStyle, getStyle, useStyles} from '@styles';
import {FunctionComponent} from '@types';

type TopBarProps = {
  goBack?: () => void;
  style?: ThemedViewStyle;
};

const TopBar: FunctionComponent<TopBarProps> = ({goBack, style = {}}) => {
  const styles = useStyles(theme => ({
    container: {
      ...getStyle(theme, style),
    },
  }));

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
