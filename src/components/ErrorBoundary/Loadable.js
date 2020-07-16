/**
 *
 * Asynchronously loads the component for ErrorBoundary
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
