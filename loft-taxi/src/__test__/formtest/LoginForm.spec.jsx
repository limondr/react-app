import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import LoginForm from '../../components/pages/sections/Forms/LoginForm';

describe("LoginForm", () => {
    describe("on submit", () => {
        it('dispatches log in credentials', async () => {
            const mockDispatch = jest.fn()
            const { queryByTestId } = render(
                <LoginForm useDispatchHook={() => mockDispatch}/>
            ); 
        
            const loginName = queryByTestId('login-name');
            const loginPassword = queryByTestId('login-password');

            await act(async () => {
                fireEvent.change(loginName, { target: { value: 'test@email.com' } });
                fireEvent.change(loginPassword, { target: { value: 'testpassword' } });

                const loginSubmit = queryByTestId('login-submit');
                fireEvent.click(loginSubmit);
             });

             expect(loginName.value).toBe('test@email.com');
             expect(loginPassword.value).toBe('testpassword');

             expect(mockDispatch).toBeCalledWith({
                type: "AUTHENTICATE",
                payload: {
                    email: 'test@email.com',
                    password: "testpassword"
                }
            })
          });      
    })
})