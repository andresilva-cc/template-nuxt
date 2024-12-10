import withNuxt from './.nuxt/eslint.config.mjs';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';

export default withNuxt([
  ...pluginVueA11y.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
]);
