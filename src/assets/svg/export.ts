import {default as Apple} from './Apple';
import {default as ArrowLeft} from './ArrowLeft';
import {default as ArrowRight} from './ArrowRight';
import {default as Facebook} from './Facebook';
import {default as Google} from './Google';

import {SVGComponent} from '@types';

export type Icons = {
  Apple: SVGComponent;
  ArrowLeft: SVGComponent;
  ArrowRight: SVGComponent;
  Facebook: SVGComponent;
  Google: SVGComponent;
};

export type IconNames = keyof Icons;

export const Icons: Icons = {
  Apple: Apple,
  ArrowLeft: ArrowLeft,
  ArrowRight: ArrowRight,
  Facebook: Facebook,
  Google: Google,
};
