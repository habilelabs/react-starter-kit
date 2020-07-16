/**
 *
 * ErrorBoundary
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Button } from '@material-ui/core';
import ErrorOutline from '@material-ui/icons/ErrorOutline';

import ErrorMessage from 'components/ErrorMessage/Loadable';
import messages from './messages';

const ErrorContainer = styled.div`
  height: 500px;
  position: relative;
`;

class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch() {
    // TODO: Log the error to an error reporting service
  }

  onRefreshPage() {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorMessage
            icon={<ErrorOutline />}
            title={<FormattedMessage {...messages.errorTitle} />}
            body={<FormattedMessage {...messages.errorBody} />}
          >
            <Button
              color="primary"
              variant="contained"
              onClick={this.onRefreshPage}
            >
              <FormattedMessage {...messages.reloadPage} />
            </Button>
          </ErrorMessage>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
