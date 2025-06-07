import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'micro_front_end',
  exposes: {
    './Teste/Provider1': './src/App.tsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
