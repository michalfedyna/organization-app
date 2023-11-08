import React, {FunctionComponent} from 'react';

import {Container, Row, Text} from '@components';
import {FontProps, SpacingProps, TranslationProps} from '@types';

type DividerProps = FontProps & SpacingProps & TranslationProps & {};

const Divider: FunctionComponent<DividerProps> = ({
  withTranslation,
  fontColor,
  fontWeight,
  fontSize,
  ...props
}) => {
  return (
    <Row {...props}>
      <Container flex borderBottomWidth={2} borderColor="border" />
      {withTranslation && (
        <Text
          fontColor={fontColor}
          fontSize={fontSize}
          fontWeight={fontWeight}
          paddingHorizontal="medium"
          withTranslation={withTranslation}
        />
      )}
      <Container flex borderBottomWidth={2} borderColor="border" />
    </Row>
  );
};

export default Divider;
