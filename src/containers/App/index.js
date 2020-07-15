/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

// set the custom theme colors
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#ffffff',
    },
  },
});

export default function App() {
  return (
    <AppWrapper>
      <MuiThemeProvider theme={theme}>
        <Helmet
          titleTemplate="%s - React.js Starter Kit"
          defaultTitle="React.js Starter Kit"
        >
          <meta
            name="description"
            content="A React.js Starter Kit application"
          />
        </Helmet>
        <NavBar>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/features" component={FeaturePage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
          <Footer />
        </NavBar>
        <GlobalStyle />
      </MuiThemeProvider>
    </AppWrapper>
  );
}
