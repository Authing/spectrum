// @flow
import * as React from 'react';
import type { ButtonProps } from './';

export class AuthingLoginForm extends React.Component<Props> {
  componentDidMount() {
    const loginForm = new AuthingForm({
      clientId: '5c668c712e450b00017af455',
      secret: 'adafbe8412cb43293f4f739a5e9ef709',
      mountId: 'login-form',
      title: 'Spectrum',
      hideUP: true,
      logo:
        'https://spectrum.imgix.net/communities/-Kh6RfPYjmSaIWbkck8i/hgrta7Gv1-apple-icon-144x144-precomposed.png?w=256&h=256&expires=1550016000000&ixlib=js-1.2.0&s=b15a590ba2c5cea7cc32bf2b0abe5095',
    });
  }

  render() {
    return <div id="login-form" />;
  }
}
