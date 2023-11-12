import React from 'react';
import {Text as RNText} from 'react-native';

import {useTranslation} from '@i18n';
import {getAlign, getFont, getSize, getSpacing, useStyles} from '@styles';
import type {
  AlignProps,
  FontProps,
  FunctionComponentWithChildren,
  SizeProps,
  SpacingProps,
  TranslationProps,
} from '@types';

type TextStyleProps = FontProps & SpacingProps & AlignProps & SizeProps;

type TextProps = TranslationProps & {style?: TextStyleProps};

const Text: FunctionComponentWithChildren<TextProps> = ({
  children,
  withTranslation,
  style = {},
}) => {
  const translation = useTranslation();
  const styles = useStyles(theme => ({
    text: {
      ...getAlign(style),
      ...getFont(style, theme.font, theme.colors),
      ...getSize(style),
      ...getSpacing(style, theme.spacing),
      includeFontPadding: false,
    },
  }));

  return (
    <RNText style={styles.text}>
      {withTranslation ? translation(withTranslation) : children}
    </RNText>
  );
};

export default Text;
