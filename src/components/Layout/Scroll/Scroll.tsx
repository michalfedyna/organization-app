import React from 'react';
import {ScrollView as RNScrollView} from 'react-native';

import type {FunctionComponentWithChildren} from '@types';

type ScrollProps = {};

const Scroll: FunctionComponentWithChildren<ScrollProps> = ({children}) => {
  return <RNScrollView>{children}</RNScrollView>;
};

export default Scroll;
