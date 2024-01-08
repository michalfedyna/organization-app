import type {ButtonWrapperProps} from './types';
import React from 'react';

import {Row} from '@components';
import type {FunctionComponentWithChildren} from '@types';

const ButtonWrapper: FunctionComponentWithChildren<ButtonWrapperProps> = ({
  children,
  inline,
}) => {
  if (inline) {
    return <Row>{children}</Row>;
  }
  return <>{children}</>;
};

export default ButtonWrapper;
