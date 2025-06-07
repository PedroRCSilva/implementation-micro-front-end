import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'provider_2',
  exposes: {
    './Provider2': './src/components/ProviderComponent.tsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
