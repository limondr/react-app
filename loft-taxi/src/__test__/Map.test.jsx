import React from 'react';
import { render, screen } from '@testing-library/react';
import Map from '../components/pages/sections/Map';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { store } from '../store'
import * as types from '../actions'
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/dom';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  GeolocateControl: jest.fn(),
  Map: jest.fn(() => ({
    addControl: jest.fn(),
    on: jest.fn(),
    remove: jest.fn(),
    flyTo: jest.fn(),
    getLayer: jest.fn(),
    getSource: jest.fn(),
    removeLayer: jest.fn(),
    removeSource: jest.fn(),
    addLayer: jest.fn(),
  })),
  NavigationControl: jest.fn(),
}));

test('testing map loading', () => {
  const { container } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Map />
      </Provider>
    </BrowserRouter>
  );

  const map = screen.getByTestId('map')
  expect(map).toBeInTheDocument();

  const taxiForm = container.querySelector('div[class="start_taxi"]');
  expect(taxiForm).toBeInTheDocument();

  const btn = taxiForm.querySelector('div.box_btn_taxxxi')
  expect(btn).toBeInTheDocument();
  expect(btn.querySelector('div').innerHTML).toEqual('Перейти в профиль');

  store.dispatch(types.saveCard({
    cardNumber: '123',
    expiryDate: '123',
    cardName: '123',
    cvc: '123'
  }))

  expect(store.getState().profile).toEqual({
    cardNumber: '123',
    expiryDate: '123',
    cardName: '123',
    cvc: '123'
})

  const address_form = taxiForm.querySelector('div.search_adress')
  expect(address_form).toBeInTheDocument();

  let getTaxiButton = taxiForm.querySelector('div.btn_taxi_grey');
  expect(getTaxiButton).toBeInTheDocument();
  expect(getTaxiButton.querySelector('div').innerHTML).toEqual('Выберите адреса');
  let address1 = taxiForm.querySelector('input[name="address1_value"]')
  expect(address1).toBeInTheDocument();
  const address2 = taxiForm.querySelector('input[name="address2_value"]')
  expect(address2).toBeInTheDocument();

  
  expect(address1.value).toBe('')
  act(() => {
    fireEvent.change(address1, {
      target: {
        value: 'test_address1'
      }
    })
  })
  expect(address1.value).toBe('test_address1')

  expect(address2.value).toBe('')
  act(() => {
    fireEvent.change(address2, {
      target: {
        value: 'test_address2'
      }
    })
  })
  expect(address2.value).toBe('test_address2')

  getTaxiButton = taxiForm.querySelector('div.btn_taxi_yellow');
  expect(getTaxiButton).toBeInTheDocument();
  expect(getTaxiButton.querySelector('div').innerHTML).toEqual('Вызвать такси');
  act(() => {
    fireEvent.click(getTaxiButton)
  })

  store.dispatch(types.setRoute([[1,1],[2,2],[3,3]]))

  expect(store.getState().map).toEqual({
    addresses: [],
    coordinates: [[1,1],[2,2],[3,3]]
  })

  expect(address1).not.toBeInTheDocument();

  const newCall_btn = taxiForm.querySelector('div.btn_taxi_yellow > div');
  expect(newCall_btn.innerHTML).toEqual('Сделать новый заказ')
});
