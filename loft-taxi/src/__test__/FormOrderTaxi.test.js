import React from 'react';
import { render, queryByTestId } from '@testing-library/react';
import FormOrderTaxi from '../components/pages/sections/Forms/FormOrderTaxi';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store'

test('test form before order taxi', () => {
    const { container } = render (
      <Provider store={store}>
        <FormOrderTaxi />
      </Provider>
    );

    expect(queryByTestId(container, 'FormOrderTaxi')).toBeInTheDocument();
    
});