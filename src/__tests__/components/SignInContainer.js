import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignIn/SignInContainer';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);

      const username = getByTestId('usernameInput');
      const password = getByTestId('passwordInput');
      const signIn = getByTestId('signInButton');

      fireEvent.changeText(username, 'kalle');
      fireEvent.changeText(password, 'password');
      fireEvent.press(signIn);
      
      await waitFor(() => {
        // onSubmit handler is called once
        expect(onSubmit).toHaveBeenCalledTimes(1);
        // onSubmit.mock.calls[0][0] contains the first argument of the first call
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        });
      });
    });
  });
});