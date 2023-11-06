import {SVGComponent} from '@types';

import {default as ArrowRight} from './ArrowRight';

export type Icons = {
  ArrowRight: SVGComponent;
};

export type IconNames = keyof Icons;

export const Icons: Icons = {
  ArrowRight: ArrowRight,
};
