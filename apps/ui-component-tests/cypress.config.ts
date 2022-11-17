import { defineConfig } from 'cypress';
import { nxComponentTestingPreset } from '@nrwl/react/plugins/component-testing';

export default defineConfig({
  component: {
    ...nxComponentTestingPreset(__filename),
    specPattern: '../../libs/ui/src/lib/**/*.cy.{js,jsx,ts,tsx}',
  },
});
