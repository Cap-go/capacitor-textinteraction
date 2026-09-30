import type { CapacitorConfig } from '@capacitor/cli';

import pkg from './package.json';

const config: CapacitorConfig = {
  appId: 'app.capgo.textinteraction',
  appName: '@capgo/capacitor-textinteraction',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
    TextInteraction: {
      enabled: true,
      locked: false,
    },
    CapacitorUpdater: {
      appId: 'app.capgo.textinteraction',
      autoUpdate: true,
      autoSplashscreen: true,
      directUpdate: 'always',
      version: pkg.version,
    },
  },
};

export default config;
