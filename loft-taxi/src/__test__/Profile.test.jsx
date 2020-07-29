import React from 'react';
import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Profile from '../components/pages/sections/Profile';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store'

test('test card form', () => {
  const { container } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Profile />
      </Provider>
    </BrowserRouter>
  );
  const cardNumber = container.querySelector('input[name="cardnumber"]');
  expect(cardNumber).toBeInTheDocument();
  const cardDate = container.querySelector('input[name="carddate"]')
  expect(cardDate).toBeInTheDocument();
  const cardHolder = container.querySelector('input[name="cardholder"]')
  expect(cardHolder).toBeInTheDocument();
  const cardCVC = container.querySelector('input[name="cardcvc"]')
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
