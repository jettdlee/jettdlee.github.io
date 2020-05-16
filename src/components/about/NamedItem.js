import React from 'react';

function NamedItem(props) {
  const {icon, text} = props;

  return (
    <span id="named_item">
      <span id="named_icon">
        {props.children}
      </span>
      <span id="named_text">
        {text}
      </span>
    </span>
  )
}

export default NamedItem;