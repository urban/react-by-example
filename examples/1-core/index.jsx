// Use ES6 module syntax to import the React library
import React from 'react';

/**
 * In React ^0.13.0 you can use ES6 classes to define your React components.
 *
 * ES6 classes are a simple sugar over prototype-based Object Orientated
 * pattern. Classes support prototype-based inheritance, super calls, instance
 * and static methods and constructors.
 */
class HelloMessage extends React.Component {
  /**
   * A React component must implement a `render` method which returns **one
   * single** child. That child may have an arbitrarily deep child structure.
   *
   * A `render()` function should be *pure*, meaning it renders the same result
   * each time it's invoked.
   *
   * The render method can return either:
   *  - a ReactElements
   *  - a string (aka ReactText)
   *  - a number (aka ReactText)
   *  - null or false (indicates that nothing should render)
   *
   */
  render() {
    return React.DOM.div(null, 'Hello ', this.props.name,
      React.DOM.strong(null, '!')
    );
  }
}

let HelloMessageFactory = React.createFactory(HelloMessage);
// Use `React.render` to render a component into the DOM.
//
React.render(
  <HelloMessage name="Urban" />,
  document.querySelector('#react-mount-point')
);
