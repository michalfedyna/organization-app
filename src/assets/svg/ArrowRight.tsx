import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

import {SVGComponent} from '@types';

const ArrowRight: SVGComponent = ({size, color}) => (
  <Svg color={color} height={size} viewBox="0 0 24 24" width={size}>
    <Path
      d="M14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45 14 6l6 6-6 6z"
      fill="currentColor"
    />
  </Svg>
);

export default memo(ArrowRight);
