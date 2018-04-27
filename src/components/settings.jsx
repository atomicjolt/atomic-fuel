import React from 'react';

export const SettingsContext = React.createContext(window.DEFAULT_SETTINGS);

export function withSettings(Component) {
  return function SettingsComponent(props) {
    return (
      <SettingsContext.Consumer>
        {settings => <Component {...props} settings={settings} />}
      </SettingsContext.Consumer>
    );
  };
}
