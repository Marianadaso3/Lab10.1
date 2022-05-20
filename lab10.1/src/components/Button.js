/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function Button({
  content, id, onButtonClick, type,
}) {
  return (
    <div
      id={`id${id}`}
      className={`Button ${content === '0' ? 'zero' : ''} ${type || ''}`}
      onClick={onButtonClick(content)}
    >
      {content}
    </div>
  );
}

export default Button;
