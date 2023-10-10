import {useEffect, useState} from 'react';
import {DevSettings} from 'react-native';

const useDeveloperMode = () => {
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);

  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Toggle Developer Mode', () =>
        setIsDeveloperMode(state => !state),
      );
    }
  }, []);

  return isDeveloperMode;
};

export default useDeveloperMode;
