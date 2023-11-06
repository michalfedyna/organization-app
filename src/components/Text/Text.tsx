import React from 'react';
import {Text as RNText} from 'react-native';

import type {
  FunctionComponentWithChildren,
  TranslationProps,
  FontProps,
  SpacingProps,
  AlignProps,
} from '@types';
import {useStyles, getSpacing, getAlign, getFont} from '@styles';
import {useTranslation} from '@i18n';

type TextProps = TranslationProps & FontProps & SpacingProps & AlignProps;

const Text: FunctionComponentWithChildren<TextProps> = ({
  children,
  withTranslation,
  ...props
}) => {
  const translation = useTranslation();
  const styles = useStyles(theme => ({
    text: {
      ...getAlign(props),
      ...getSpacing(props, theme.spacing),
      ...getFont(props, theme.font, theme.colors),
    },
  }));

  return (
    <RNText style={styles.text}>
      {withTranslation ? translation(withTranslation) : children}
    </RNText>
  );
};

export default Text;
