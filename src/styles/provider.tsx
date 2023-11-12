import {darkTheme, lightTheme} from './theme';
import type {Theme} from './types';
import React, {createContext, useContext, useEffect, useReducer} from 'react';
import {Appearance} from 'react-native';

const ThemeContext = createContext<Theme>(lightTheme);

const getInitialTheme = () => {
  const colorScheme = Appearance.getColorScheme();

  if (colorScheme === 'dark') return darkTheme;

  return lightTheme;
};

const themeReducer = (
  state: Theme,
  action: {type: 'set'; theme: 'dark' | 'light' | null | undefined},
) => {
  switch (action.type) {
    case 'set':
      return action.theme === 'dark' ? darkTheme : lightTheme;
    default:
      return state;
  }
};

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const initialTheme = getInitialTheme();
  const [theme, dispatch] = useReducer(themeReducer, initialTheme);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      dispatch({type: 'set', theme: colorScheme});
    });

    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
