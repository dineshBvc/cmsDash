import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cms.bvc.dashboard',
  appName: 'dashboard',
  webDir: 'www\browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
