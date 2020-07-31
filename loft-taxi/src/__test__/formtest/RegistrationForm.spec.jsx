import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import RegistrationForm from '../../components/pages/sections/Forms/RegistrationForm';


describe("RegistrationForm", () => {
    describe("on submit", () => {
        it('dispatches registration', async () => {
            const mockDispatch = jest.fn()
            const { queryByTestId } = render(
                <RegistrationForm useDispatchHook={() => mockDispatch}/>
            );
        
            const registrationEmail = queryByTestId('registration-email');
            const registrationName = queryByTestId('registration-name');
            const registrationSurname = queryByTestId('registration-surname');
            const registrationPassword = queryByTestId('registration-password');

            await act( async () => {
                fireEvent.change(registrationEmail, { target: { value: 'email@test.com' } });
                fireEvent.change(registrationName, { target: { value: 'name' } });
                fireEvent.change(registrationSurname, { target: { value: 'surname' } });
                fireEvent.change(registrationPassword, { target: { value: 'password' } });
                
                const registrationSubmit = queryByTestId('registration-submit');
                fireEvent.click(registrationSubmit);
            });

            expect(registrationEmail.value).toBe('email@test.com');
            expect(registrationName.value).toBe('name');
            expect(registrationSurname.value).toBe('surname');
            expect(registrationPassword.value).toBe('password');

            expect(mockDispatch).toBeCalledWith({
                type: 'REGISTRATION',
                payload: {
                    email: 'email@test.com',
                    password: 'password',
                    name: 'name',
                    surname: 'surname'
                }
            })
          });
    })
})