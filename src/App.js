import React from 'react';
import Finale from './Finale';
import Navigator from './Navigator';
import Sponsors from './Sponsers';
import Winners from './Winners';
import Gallery from './Gallery';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
      }}
    >
      <Navigator />
      <Finale />
      <Winners />
      <Gallery />
      <Sponsors />
    </div>
  );
}

export default App;
