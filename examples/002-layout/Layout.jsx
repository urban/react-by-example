import React from 'react';
import computeLayout from 'css-layout';

const border = '1px solid #333';

class Layout extends React.Component {

  render() {
    let cssLayout = getLayout();

    return (
      <div>
        <header >Header</header>
        <main>
          Main Content
        </main>
        <footer>Footer</footer>
      </div>
    );
  },

  getLayout() {
    return {
      style: { border },
      children: [
        { style: { border } },
        { style: { border } },
        { style: { border } }
      ]
    };
  }
}

export default Layout;
