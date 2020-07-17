/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Toggle from 'components/Toggle';
import Wrapper from './Wrapper';
import messages from './messages';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

// HACK: npm run build gives error for import
const { appLocales } = require('../../i18n');

export function LocaleToggle(props) {
  const locale = useSelector(makeSelectLocale());
  const dispatch = useDispatch();
  const onLocaleToggle = (evt) => dispatch(changeLocale(evt.target.value));

  return (
    <Wrapper>
      <Toggle
        value={locale}
        values={appLocales}
        messages={messages}
        onToggle={onLocaleToggle}
      />
    </Wrapper>
  );
}

export default LocaleToggle;
