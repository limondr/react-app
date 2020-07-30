import React from 'react';
import { render, queryByTestId } from '@testing-library/react';
import FormAfterOrderTaxi from '../components/pages/sections/mapcomponents/FormAfterOrderTaxi';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store'

test(' test form before oder taxi', () => {
    const props = {
        clickCallTaxi: () => true,
      }
    const { container } = render (
        <BrowserRouter>
            <Provider store={store}>
                <FormAfterOrderTaxi {...props}/>
            </Provider>
        </BrowserRouter>
    );

    expect(queryByTestId(container, 'FormAfterOrderTaxi')).toBeInTheDocument();
});