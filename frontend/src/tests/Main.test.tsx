import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../Main';

it('test demo', () => {
  const main = render(<Main />);

  expect(main).toBeTruthy();
});
