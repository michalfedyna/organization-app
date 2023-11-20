import type {FC, PropsWithChildren} from 'react';

import {TranslationKey} from '@i18n';

export type FunctionComponent<T = {}> = FC<T>;

export type FunctionComponentWithChildren<T = {}> = FC<PropsWithChildren<T>>;

export type SVGComponent = FunctionComponent<SVGProps>;

export type TranslationProps = {
  withTranslation?: TranslationKey;
};

export type SVGProps = {
  size: number;
  color: string;
};
