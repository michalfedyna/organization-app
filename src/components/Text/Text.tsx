import {TextProps, getColorStyle, getVariantStyle} from './utils';
import React from 'react';
import {Text as RNText} from 'react-native';

import {useTranslation} from '@i18n';
import {getStyle, useStyles} from '@styles';
import type {FunctionComponentWithChildren} from '@types';

const Text: FunctionComponentWithChildren<TextProps> = ({
  children,
  color,
  style = {},
  variant,
  withTranslation,
}) => {
  const translation = useTranslation();
  const styles = useStyles(theme => ({
    text: {
      ...getVariantStyle(theme, variant),
      ...getColorStyle(theme, color),
      ...getStyle(theme, style),
    },
  }));

  return (
    <RNText style={styles.text}>
      {withTranslation ? translation(withTranslation) : children}
    </RNText>
  );
};

export default Text;
