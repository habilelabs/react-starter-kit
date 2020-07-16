/**
 *
 * ErrorMessage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const IconContainer = styled.div`
  && > * {
    width: 500px;
    height: 500px;
    font-size: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -250px;
    opacity: 0.1;
    user-select: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  overflow: hidden;
`;

const Content = styled.div`
  width: 500px;
  text-align: center;
`;

const Text = styled(Typography)`
  width: 100% !important;
`;

const CtaContainer = styled.div`
  margin-top: 20px;
`;

function ErrorMessage(props) {
  return (
    <Container id={props.id}>
      {props.icon && <IconContainer>{props.icon}</IconContainer>}
      <Content>
        {props.title && (
          <Text variant="h5" component="h5" gutterBottom>
            {props.title}
          </Text>
        )}
        {props.body && <Text gutterBottom>{props.body}</Text>}
        {props.children && <CtaContainer>{props.children}</CtaContainer>}
      </Content>
    </Container>
  );
}

ErrorMessage.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  body: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.node,
  id: PropTypes.string,
};

export default ErrorMessage;
