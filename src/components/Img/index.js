/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  return (
    <img
      className={props.className}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Img;
