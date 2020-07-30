import React from 'react';
import { render, queryByTestId } from '@testing-library/react';
import FormBeforeOrderTaxi from '../components/pages/sections/mapcomponents/FormBeforeOrderTaxi';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

test(' test form before oder taxi', () => {
    const { container } = render (
        <BrowserRouter>
            <Provider store={store}>
                <FormBeforeOrderTaxi />
            </Provider>
        </BrowserRouter>
    );

    expect(queryByTestId(container, 'FormBeforeOrderTaxi')).toBeInTheDocument();
});