import React from 'react';
import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Profile from '../components/pages/sections/Profile';

test('test card form', () => {
  const { container } = render(
    <Profile />
  );
  const cardNumber = container.querySelector('input[name="card-number"]');
  expect(cardNumber).toBeInTheDocument();
  const cardDate = container.querySelector('input[name="card-date"]')
  expect(cardDate).toBeInTheDocument();
  const cardHolder = container.querySelector('input[name="card-holder"]')
  expect(cardHolder).toBeInTheDocument();
  const cardCVC = container.querySelector('input[name="card-cvc"]')
  expect(cardCVC).toBeInTheDocument();

  expect(cardNumber.value).toBe('')
  act(() => {
    fireEvent.change(cardNumber, {
      target: {
        value: '1111222233334444'
      }
    })
  })
  expect(cardNumber.value).toBe('1111222233334444')

  expect(cardDate.value).toBe('')
  act(() => {
    fireEvent.change(cardDate, {
      target: {
        value: '11/11'
      }
    })
  })
  expect(cardDate.value).toBe('11/11')

  expect(cardHolder.value).toBe('')
  act(() => {
    fireEvent.change(cardHolder, {
      target: {
        value: 'TEST NAME'
      }
    })
  })
  expect(cardHolder.value).toBe('TEST NAME')

  expect(cardCVC.value).toBe('')
  act(() => {
    fireEvent.change(cardCVC, {
      target: {
        value: '123'
      }
    })
  })
  expect(cardCVC.value).toBe('123')
});
