import React, {FC, PropsWithChildren} from 'react';
import {Text as RNText} from 'react-native';

import {
  useStyles,
  getMargin,
  getPadding,
  FontProps,
  SpacingProps,
  getAlign,
} from '@styles';
import {useTranslation} from '@i18n';

type TextProps = PropsWithChildren<
  {
    withTranslation?: string;
  } & FontProps &
    SpacingProps
>;

const Text: FC<TextProps> = ({
  children,
  withTranslation,
  fontSize,
  fontWeight,
  fontColor = 'text',
  margin = 'none',
  marginDirection,
  padding = 'none',
  paddingDirection,
  align = 'center',
}) => {
  const translation = useTranslation();
  const styles = useStyles(theme => ({
    text: {
      ...getMargin(theme.spacing[margin], marginDirection),
      ...getPadding(theme.spacing[padding], paddingDirection),
      ...getAlign(align),
      fontSize: fontSize ? theme.font.size[fontSize] : undefined,
      fontWeight: fontWeight ? theme.font.weight[fontWeight] : undefined,
      color: theme.colors[fontColor],
    },
  }));

  return (
    <RNText style={styles.text}>
      {withTranslation ? translation(withTranslation) : children}
    </RNText>
  );
};

export default Text;
