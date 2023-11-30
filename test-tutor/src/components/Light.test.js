import { fireEvent, render, screen } from '@testing-library/react';
import Light from './Light';

it('change from off to on', () => {
  render(<Light name="전원" />);
  const onButtonElement = screen.getByRole('button', { name: 'ON' });
  fireEvent.click(onButtonElement);
  expect(onButtonElement).toBeDisabled();
})