import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'consumer',
  remotes: {
    remote: 'Provider1@http://localhost:3001/mf-manifest.json',
    remote2: 'Provider2@http://localhost:3002/mf-manifest.json',
  },
  shareStrategy: 'loaded-first',
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
