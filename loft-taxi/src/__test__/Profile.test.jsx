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
  const divReg = container.querySelector('div.main_reg_entr');
  expect(divReg).toBeInTheDocument();
  const cardPlashka = container.querySelector('div.card_plashka');
  expect(cardPlashka).toBeInTheDocument();

 });
