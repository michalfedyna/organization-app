import {TranslationContext} from './provider';
import {useCallback, useContext} from 'react';

export const useTranslation = () => {
  const translation = useContext(TranslationContext);
  return useCallback(
    (key: string) => getValueFromObject(key, translation),
    [translation],
  );
};

const getValueFromObject = (key: string, object: any) => {
  let tempObject = {...object};
  let returnValue = '';

  const keys = key.split('.');

  keys.forEach(val => {
    if (typeof tempObject[val] === 'string') returnValue = tempObject[val];
    else if (tempObject[val]) tempObject = tempObject[val];
  });

  return returnValue;
};
