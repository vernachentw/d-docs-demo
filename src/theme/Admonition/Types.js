import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

const cusStyle = {
  border: `.5px solid #e1e5ef`,
  borderColor: `#e1e5ef #e1e5ef #e1e5ef `,
  borderLeft: `4px solid #6a1b9a`,
  borderRadius: '.4rem',
  padding: 10,
  marginBottom: '1em',
  boxShadow: `0 1px 2px 0 rgba(0, 0, 0, 0.1)`,
};

function MyCustomAdmonition(props) {
  return (
    <div style={cusStyle}>
      <span style={{ fontWeight: 700, textTransform: 'uppercase' }}>
        {props.title}
      </span>
      <div>{props.children}</div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'my-custom-admonition': MyCustomAdmonition,
};

export default AdmonitionTypes;
