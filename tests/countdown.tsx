import 'jest';
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Countdown from '../src/countdown';

it('renders welcome message', () => {
  const { getByTestId } = render(<Countdown />);
  expect(getByTestId('countdown').textContent).toBe('Hello world !!!!!!')
});