# HelloWorld Example

This example uses ES6 syntax and introduces some basic React concepts such as:

- import React with the ES6 modules syntax
- extend the ES6 `React.Component` Class
- define `ReactElement`'s required `render` method
- pass data into a component and access it with `this.props`
- use the built-in React factories for common HTML tags with `React.DOM`
- defining your interface with `propTypes` and `React.PropTypes` validators
- adding `defaultProps` for non-required properties
- using `React.createFactory` to produce custom `ReactElements`
- render React to the DOM with `React.render`

# Building

You will need [node.js](http://nodejs.org/) or [io.js](https://iojs.org/) installed to build this example.

Once installed, from the example directory, run the following command in Terminal:

    npm install && npm start

This will install the project depencencies, build the source and automatically open the example in your default browser.

If you modify the source, you will have to rebuild with the following command in Terminal:

    npm run build

Then refresh the browser to see the updated changes. If you run into errors, check the browser console output for syntax errors.
