export const useTextVariants = () => {
  return {
    title: {
      element: 'h1',
      classes: 'font-medium text-4xl',
    },
    h1: {
      element: 'h1',
      classes: 'font-semibold text-2xl',
    },
    h2: {
      element: 'h2',
      classes: 'font-semibold text-lg',
    },
    body: {
      element: 'p',
      classes: '',
    },
    code: {
      element: 'code',
      classes: 'font-monospace px-1 bg-slate-950 rounded',
    },
  };
};
