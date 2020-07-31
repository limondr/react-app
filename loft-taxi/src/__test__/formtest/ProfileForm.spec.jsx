import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import {Provider} from 'react-redux';
import { store } from '../../store';
import ProfileFormWithRedux from '../../components/pages/sections/Forms/ProfileForm';

describe("ProfileForm", () => {
    describe("on submit", () => {
        it("validation profile submitcard", async () => {
            const mockDispatch = jest.fn()
            const { queryByTestId} = render(
                    <Provider store={store}>
                        <ProfileFormWithRedux useDispatchHook={() => mockDispatch}/>                      
                    </Provider>
            );

            const profileCardNumber = queryByTestId('profile-cardNumber');
            const profileCardName = queryByTestId('profile-cardName');
            const profilenExpiryDate = queryByTestId('profile-expiryDate');
            const profilenCvc = queryByTestId('profile-cvc');

            await act( async () => {
                fireEvent.change(profileCardNumber, { target: { value: '1111 1111 1111 1111' } });
                fireEvent.change(profileCardName, { target: { value: 'TEST NAME' } });
                fireEvent.change(profilenExpiryDate, { target: { value: '11/11' } });
                fireEvent.change(profilenCvc, { target: { value: '111' } });

                expect(profileCardNumber.value).toBe('1111 1111 1111 1111');
                expect(profileCardName.value).toBe('TEST NAME');
                expect(profilenExpiryDate.value).toBe('11/11');
                expect(profilenCvc.value).toBe('111');

                const profileSubmit = queryByTestId('profile-submit');
                fireEvent.click(profileSubmit);
            });

            expect(mockDispatch).toBeCalledWith({
                type: 'SUBMITCARD',
                payload: {
                    cardNumber: '1111 1111 1111 1111',
                    cardName: 'TEST NAME',
                    expiryDate: '11/11',
                    cvc: '111',
                    token: ""
                }
            })
        })
    })
})