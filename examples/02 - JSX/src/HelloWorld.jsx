/**
 *
 */
import React from 'react';

/**
 *
 */
React.render(
  <p>Hello World!</p>,
  document.getElementById('container')
);

/**
 *
 */
var name = 'Variable';

/**
 *
 */
React.render(
  <p>Hello {name}!</p>,
  document.getElementById('variable-container')
);

/**
 *
 */
var messages = [ 'one', 'two', 'three' ];

var Messages = messages.map(function (message, i) {
  return (
    <li key={i}>{message}</li>
  );
});

var MessageContainer = (
  <div>
    <p>'Hello Loops!'</p>
    <ul>{Messages}</ul>
  </div>
);

React.render(
  MessageContainer,
  document.getElementById('messages-container')
);
