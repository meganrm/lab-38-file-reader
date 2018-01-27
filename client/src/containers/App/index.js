import React from 'react';
import FontAwesome from 'react-fontawesome';

import FileData from '../FileData';
import Auth from '../Auth';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>

        Visual Files
          <FontAwesome
            name="rocket"
            size="2x"
            spin
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
        </header>
        <main>
          <Auth>
            <FileData />
          </Auth>
        </main>
        <footer />
      </div>
    );
  }
}
