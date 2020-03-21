import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  const { getByTestId } = render(<App />);
  const app = getByTestId(/app/i);
  expect(app).toBeInTheDocument();
});
