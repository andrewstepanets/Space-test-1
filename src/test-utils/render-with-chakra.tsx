import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// Custom render function
// It's often useful to define a custom render method that includes things like
// global context providers, data stores, etc. To make this available globally,
// one approach is to define a utility file that re-exports everything from React Testing Library.
// Reference: https://testing-library.com/docs/react-testing-library/setup/#custom-render

const renderWithChakra = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: ChakraProvider, ...options });

// override render method

export { renderWithChakra as render };
