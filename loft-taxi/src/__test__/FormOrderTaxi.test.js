import React from 'react';
import { render, queryByTestId } from '@testing-library/react';
import FormOrderTaxi from '../components/pages/sections/mapcomponents/FormOrderTaxi';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store'

test('test form before order taxi', () => {
  const props = {
    data: {
      show: true,
      address1_value: '',
      address2_value: '',
      address1_drop: false,
      address2_drop: false,
      call_taxi: false,
    },
    handleAddressDropdown: () => true,
    handleValueChange: () => true,
    clearInput: () => true,
    filterInputs: () => true,
    handleAddressValue: () => true,
    getRoute: () => true,
    clickCallTaxi: () => true,
  }
    const { container } = render (
        <BrowserRouter>
            <Provider store={store}>
                <FormOrderTaxi {...props}/>
            </Provider>
        </BrowserRouter>
    );

    expect(queryByTestId(container, 'FormOrderTaxi')).toBeInTheDocument();
    
});