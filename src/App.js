import React from 'react';
import Finale from './Finale';
import Navigator from './Navigator';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
      }}
    >
      <Navigator />
      <Finale />
    </div>
  );
}

export default App;
