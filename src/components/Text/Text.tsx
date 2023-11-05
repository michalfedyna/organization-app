import React, {FC, PropsWithChildren} from 'react';
import {Text as RNText} from 'react-native';

import {
  useStyles,
  FontWeight,
  FontSize,
  Spacing,
  SpacingDirection,
  getSpacing,
} from '@styles';
import {useTranslation} from '@i18n';

type SpacingProps = {
  spacing?: keyof Spacing;
  spacingDirection?: SpacingDirection;
  spacingType?: 'margin' | 'padding';
};

type TextProps = PropsWithChildren<
  {
    withTranslation?: string;
    fontSize?: FontSize;
    fontWeight?: FontWeight;
  } & SpacingProps
>;

const Text: FC<TextProps> = ({
  children,
  withTranslation,
  fontSize,
  fontWeight,
  spacing = 'none',
  spacingDirection,
  spacingType = 'margin',
}) => {
  const translation = useTranslation();
  const styles = useStyles(theme => ({
    text: {
      ...getSpacing(spacingType, theme.spacing[spacing], spacingDirection),
      fontSize: fontSize ? theme.font.size[fontSize] : undefined,
      fontWeight: fontWeight ? theme.font.weight[fontWeight] : undefined,
    },
  }));

  return (
    <RNText style={styles.text}>
      {withTranslation ? translation(withTranslation) : children}
    </RNText>
  );
};

export default Text;
