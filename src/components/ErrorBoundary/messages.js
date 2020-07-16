/*
 * ErrorBoundary Messages
 *
 * This contains all the text for the ErrorBoundary component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'src.components.ErrorBoundary';

export default defineMessages({
  errorTitle: {
    id: `${scope}.errorTitle`,
    defaultMessage: 'An unrecoverable error has occurred',
  },
  errorBody: {
    id: `${scope}.errorBody`,
    defaultMessage: 'Please refresh the page or navigate to another page',
  },
  reloadPage: {
    id: `${scope}.reloadPage`,
    defaultMessage: 'Refresh page',
  },
});
