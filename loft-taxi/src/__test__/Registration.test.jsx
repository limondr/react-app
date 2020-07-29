import React from 'react';
import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Registration from '../components/pages/Registration';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store'

test('test login form', () => {
  const { container } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Registration />
      </Provider>
    </BrowserRouter>
  );
  const regButton = container.querySelector('div[class="button-reg"]');
  expect(regButton).toBeInTheDocument();
  const email = container.querySelector('input[name="email"]')
  expect(email).toBeInTheDocument();
  const name = container.querySelector('input[name="name"]')
  expect(name).toBeInTheDocument();
  const lastname = container.querySelector('input[name="lastname"]')
  expect(lastname).toBeInTheDocument();
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

  expect(name.value).toBe('')
  act(() => {
    fireEvent.change(name, {
      target: {
        value: 'Test'
      }
    })
  })
  expect(name.value).toBe('Test')

  expect(lastname.value).toBe('')
  act(() => {
    fireEvent.change(lastname, {
      target: {
        value: 'Pupkin'
      }
    })
  })
  expect(lastname.value).toBe('Pupkin')

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
