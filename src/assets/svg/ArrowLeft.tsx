import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

import {SVGComponent} from '@types';

const ArrowRight: SVGComponent = ({size, color}) => (
  <Svg color={color} height={size} viewBox="0 0 24 24" width={size}>
    <Path
      d="M10 18l-6-6 6-6 1.4 1.45L7.85 11H20v2H7.85l3.55 3.55L10 18z"
      fill="currentColor"
    />
  </Svg>
);

export default memo(ArrowRight);
