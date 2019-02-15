// @flow
import * as React from 'react';
import type { ButtonProps } from './';

export class AuthingLoginForm extends React.Component<Props> {
  componentDidMount() {
    const loginForm = new AuthingForm({
      clientId: '5c344f102e450b000170190a',
      secret: '03bb8b2fca823137c7dec63fd0029fc2',
      mountId: 'login-form',
      title: 'Spectrum',
      hideUP: true,
      logo:
        'https://spectrum.imgix.net/communities/-Kh6RfPYjmSaIWbkck8i/hgrta7Gv1-apple-icon-144x144-precomposed.png?w=256&h=256&expires=1550016000000&ixlib=js-1.2.0&s=b15a590ba2c5cea7cc32bf2b0abe5095',
    });

    loginForm.on('login', function(user) {
      console.log(user);
    });
  }

  render() {
    return <div id="login-form" />;
  }
}
