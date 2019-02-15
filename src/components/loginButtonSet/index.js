// @flow
import * as React from 'react';
import { getItemFromStorage, storeItem } from '../../helpers/localStorage';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import { CLIENT_URL } from '../../api/constants';
import { Container } from './style';
import { AuthingLoginForm } from './authing';
import { track, events } from 'src/helpers/analytics';

type Props = {
  redirectPath: ?string,
  location: Object,
};

export type ButtonProps = {
  onClickHandler?: ?Function,
  href: string,
  preferred: boolean,
  showAfter: boolean,
};

class LoginButtonSet extends React.Component<Props> {
  saveLoginMethod = (type: string) => {
    track(events.LOGIN_PAGE_AUTH_CLICKED, { provider: type });
    return storeItem('preferred_signin_method', type);
  };

  render() {
    const { redirectPath, location } = this.props;

    let r;
    if (location) {
      const searchObj = queryString.parse(this.props.location.search);
      r = searchObj.r;
    }

    const postAuthRedirectPath =
      redirectPath !== undefined || r !== undefined
        ? // $FlowFixMe
          `?r=${redirectPath || r}`
        : `?r=${CLIENT_URL}/home`;

    const preferredSigninMethod = getItemFromStorage('preferred_signin_method');

    let nonePreferred = false;
    if (!preferredSigninMethod) {
      nonePreferred = true;
    }

    return (
      <Container>
        <AuthingLoginForm />
      </Container>
    );
  }
}

export default withRouter(LoginButtonSet);
