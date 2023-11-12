import React from 'react';

import {Text} from '@components';
import {FontProps, FunctionComponent, TranslationProps} from '@types';

type LabelStyleProps = FontProps;

type LabelProps = TranslationProps & {style?: LabelStyleProps};

const Label: FunctionComponent<LabelProps> = ({
  style = {},
  withTranslation,
}) => {
  return (
    <Text
      style={{...style, align: 'start', fontSize: 'small'}}
      withTranslation={withTranslation}
    />
  );
};

export default Label;
