import en_US from './translations/en_US';
import pl_PL from './translations/pl_PL';
import {Translation} from './translations/types';
import React, {createContext, useEffect, useReducer} from 'react';

type AvailableTranslations = 'en_US' | 'pl_PL';

const translations: Record<AvailableTranslations, Translation> = {
  en_US,
  pl_PL,
};

export const TranslationContext = createContext<Translation>(en_US);

const getInitialTranslation = () => {
  // TODO get initial translation from system/cache
  return en_US;
};

const translationReducer = (
  state: Translation,
  action: {type: 'set'; translation: AvailableTranslations},
) => {
  switch (action.type) {
    case 'set':
      return translations[action.translation];
    default:
      return state;
  }
};

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialTranslation = getInitialTranslation();
  const [translation, dispatch] = useReducer(
    translationReducer,
    initialTranslation,
  );

  useEffect(() => {
    // TODO change translation on user action
  }, []);

  return (
    <TranslationContext.Provider value={translation}>
      {children}
    </TranslationContext.Provider>
  );
};
