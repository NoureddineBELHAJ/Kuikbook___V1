import '../src/index.css';
import { withRouter } from 'storybook-addon-react-router-v6';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [withRouter];
