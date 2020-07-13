import React from 'react';
import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import EntranceWithAuth from '../components/pages/Entrance';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store'

test('test login form', () => {
  const { container } = render(
    <BrowserRouter>
      <Provider store={store}>
        <EntranceWithAuth />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = container.querySelector('div[class="button-entr"]');
  expect(loginButton).toBeInTheDocument();
  const email = container.querySelector('input[name="username"]')
  expect(email).toBeInTheDocument();
  const password = container.querySelector('input[name="password"]')
  expect(password).toBeInTheDocument();

  expect(email.value).toBe('')
  act(() => {
    fireEvent.change(email, {
      target: {
        value: 'test@test.ru'
      }
    })
  })
  expect(email.value).toBe('test@test.ru')

  expect(password.value).toBe('')
  act(() => {
    fireEvent.change(password, {
      target: {
        value: '123'
      }
    })
  })
  expect(password.value).toBe('123')
});
