import React from 'react';
import {InputModeOptions, TextInput as RNTextInput} from 'react-native';

import {Column, Label} from '@components';
import {TranslationKey, useTranslation} from '@i18n';
import {useStyles, useTheme} from '@styles';
import {FunctionComponent} from '@types';

type InputProps = {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: TranslationKey;
  label?: TranslationKey;
  errorLabel?: TranslationKey;
  secure?: boolean;
  inputMode?: InputModeOptions;
};

const Input: FunctionComponent<InputProps> = ({
  secure,
  label,
  errorLabel,
  placeholder,
}) => {
  const {colors} = useTheme();
  const translation = useTranslation();
  const styles = useStyles(theme => ({
    input: {
      paddingVertical: theme.spacing.small,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      fontSize: theme.font.size.medium,
      color: theme.colors.text,
    },
  }));

  return (
    <Column>
      <Label withTranslation={label} />
      <RNTextInput
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        multiline={false}
        placeholder={placeholder ? translation(placeholder) : ''}
        secureTextEntry={secure}
        selectionColor={colors.text}
        style={styles.input}
      />
      <Label withTranslation={errorLabel} />
    </Column>
  );
};

export default Input;
