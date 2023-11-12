import React, {FunctionComponent} from 'react';

import {Container, Row, Text} from '@components';
import {KeyofColorTheme} from '@styles';
import {FontProps, SpacingProps, TranslationProps} from '@types';

type DividerStyleProps = FontProps & SpacingProps;

type DividerProps = TranslationProps & {
  style?: DividerStyleProps;
};

const Divider: FunctionComponent<DividerProps> = ({
  withTranslation,
  style = {},
}) => {
  const {fontColor, fontSize, fontWeight} = style;

  const dividerHalfStyle = {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: 'border' as KeyofColorTheme,
  };

  return (
    <Row style={style}>
      <Container style={dividerHalfStyle} />
      {withTranslation && (
        <Text
          style={{fontColor, fontSize, fontWeight, paddingHorizontal: 'medium'}}
          withTranslation={withTranslation}
        />
      )}
      <Container style={dividerHalfStyle} />
    </Row>
  );
};

export default Divider;
