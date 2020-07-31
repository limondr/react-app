import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import {Provider} from 'react-redux';
import { store } from '../../store';
import FormOrderTaxi from '../../components/pages/sections/Forms/FormOrderTaxi';

global.document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });

describe("OrderTaxiForm", () => {
    describe("on submit", () => {
        it("validation order taxi dispatching", async () => {
            const mockDispatch = jest.fn()
            const { queryByTestId } = render(
                <Provider store={store}>
                    <FormOrderTaxi useDispatchHook={() => mockDispatch} disableValidation={true}/>
                </Provider>
            );

            const callTaxi = queryByTestId('ordertaxi-submit');
            await act(async () => {
                fireEvent.click(callTaxi);
            })
            expect(mockDispatch).toBeCalledWith({
                type: 'GET_ROUTE',
                payload: {
                    address1: '',
                    address2: ''
                }
            })
        })
    })

    describe("on change", () => {
        it("validation order taxi forms", async () => {
            const mockDispatch = jest.fn()
            const { getByLabelText } = render(
                <Provider store={store}>
                    <FormOrderTaxi useDispatchHook={() => mockDispatch} disableValidation={true}/>
                </Provider>
            );

            const address1 = getByLabelText('Откуда');
            const address2 = getByLabelText('Куда');
            await act(async () => {
                fireEvent.change(address1, { target: { value: 'Пулково (LED)' } });
             }).then(async () => {
                expect(address1.value).toBe('Пулково (LED)');
                await act(async () => {
                    fireEvent.change(address2, { target: { value: 'Волковское кладбище' } });
                 }).then(async () => {
                    expect(address2.value).toBe('Волковское кладбище');
                 });
             });
        })
    })
})