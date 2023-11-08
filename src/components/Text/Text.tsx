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

type TextProps = TranslationProps &
  FontProps &
  SpacingProps &
  AlignProps &
  SizeProps & {};

const Text: FunctionComponentWithChildren<TextProps> = ({
  children,
  withTranslation,
  ...props
}) => {
  const translation = useTranslation();
  const styles = useStyles(theme => ({
    text: {
      ...getAlign(props),
      ...getFont(props, theme.font, theme.colors),
      ...getSize(props),
      ...getSpacing(props, theme.spacing),
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
