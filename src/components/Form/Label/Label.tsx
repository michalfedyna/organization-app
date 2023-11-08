import React from 'react';
import {Text} from '@components';
import {FontProps, FunctionComponent, TranslationProps} from '@types';

type LabelProps = FontProps & TranslationProps & {};

const Label: FunctionComponent<LabelProps> = ({...props}) => {
  return <Text align="start" fontSize="small" {...props} />;
};

export default Label;
