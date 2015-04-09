/**
 * Use ES6 module syntax to import the React library
 */
import React from 'react';

/**
 * In React ^0.13.0 you can use ES6 Classes or `React.createClass` to define
 * your React components.
 *
 * ES6 classes are a simple sugar over prototype-based Object Orientated
 * pattern. Classes support prototype-based inheritance, super calls, instance
 * and static methods and constructors.
 *
 * Note: Using ES6 Classes is a more idiomatic JavaScript approach however
 * you can not use mixins because there is no standard way to defining them in
 * JavaScript. Try to not use mixins however, if you need them, use `React.
 * createClass` instead of ES6 Classes.
 */
class HelloMessage extends React.Component {
  /**
   * When using ES6 Classes, you set up your own `state` properties in the
   * constructor.
   */
  constructor(props) {
    /**
     * You must call `super` when you define a constructor for a ES6 Class
     * that extending another ES6 Class.
     */
    super(props);
  }
  /**
   * A React component must implement a `render` method which should examine
   * `this.props` and `this.state` and return **one single** child.
   *
   * The render method can return either:
   *  - null or false (indicates that nothing should render)
   *  - a ReactElement
   *  - a ReactText (string or number)
   *
   * The `render()` function should be *pure*, meaning it renders the same
   * result each time it's invoked and it does not interact with the browser
   * in any way (e.g., use `setTimeout` or manipulate the DOM).
   */
  render() {
    /**
     * You can create `ReactElements` in plain JavaScript using `React.
     * createElement` or use the built-in factories for common HTML tags. A
     * `ReactElement` factory takes a hash of properties as their first
     * argument followed by a variable number of optional child arguments.
     */
    return React.DOM.div(null, 'Hello ', this.props.name,
      React.DOM.strong(null, '!')
    );
  }
}

/**
 * Every component that accepts `props` should have a well-deifined interface
 * specified using the `propTypes` property. This will ensure that your
 * component is used correctly in the future.
 *
 * There are a range of validators available through `React.PropTypes` that
 * can be used to make sure the data recieved is valid and warn in the
 * JavaScript console if an invalid value is provided (in development mode only
 * due to performance).
 *
 * For `props` that are not required, you should define default values for
 * them using the `defaultProps` property.
 *
 * When using ES6 Classes, `propTypes` and `defaultProps` are defined as
 * properties on the constructor.
 */
HelloMessage.propTypes = { name: React.PropTypes.string };
HelloMessage.defaultProps = { name: "Urban" };

/**
 * `React.createFactory` is a convenience method for creating new
 * `ReactElements` of a given ES6 Class.
 */
const HelloMessageFactory = React.createFactory(HelloMessage);

/**
 * To render a component into the DOM, use `React.render`, which takes a
 * `ReactElement` and a `DOMElement` that will act as a `container`. React
 * will replace any existing content within the `container`. React will then
 * perform updates to only mutate the DOM wihin the `container` to reflect the
 * latest state of your React component.
 */
React.render(
  /**
   * When calling our `ReactElement` factory we pass `"World"` as the `name`
   * property. This property is used in our `HelloMessage`'s `render` method.
   */
  HelloMessageFactory({ name: 'World' }),
  document.getElementById('container')
);
