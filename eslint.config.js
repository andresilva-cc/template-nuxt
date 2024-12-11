import withNuxt from './.nuxt/eslint.config.mjs';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
import storybook from 'eslint-plugin-storybook';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default withNuxt([
  {
    files: [
      '**/*.js',
      '**/*.mjs',
      '**/*.cjs',
      '**/*.ts',
      '**/*.mts',
      '**/*.cts',
      '**/*.vue',
    ],
  },
  ...pluginVueA11y.configs['flat/recommended'],
  ...storybook.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
]);
