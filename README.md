# Nuxt Template

**⚠️ This template is still being worked on ⚠️**

This template will help you kickstart your new Nuxt 3 project. Don't forged to check the [official Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## What's included

- pnpm (you can change to your prefered package manager)
- Linting / Code formatting
  - Prettier for code formatting
  - ESLint for JS
  - Stylelint for CSS
  - commitlint for commit messages
- Git hooks
  - Husky to use the hooks
  - lint-staged to lint only staged files
- Testing
  - Vitest
  - Nuxt Test Utils
- Typechecking (through `vue-tsc`)
- Tailwind CSS
- Storybook
- ... (soon)

## Known issues

- https://github.com/nuxt-modules/tailwindcss/issues/927
- https://github.com/nuxt-modules/storybook/issues/835

## To-do

PS: not in a specific order

- Service pattern
- Repository pattern
- Docker integration
- Analytics (GA4?)
- Pinia
- Runtime Config (with `.env`)
- Examples (pages, repositories, stores, tests, stories, etc...)
- Layers (to implement modular architecture)

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
