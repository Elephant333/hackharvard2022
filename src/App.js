import React from 'react';
import Welcome from './Welcome';
import Tracks from './Tracks';
import Schedule from './Schedule';
import Faq from './Faq';
import Speakers from './Speakers';
import Sponsors from './Sponsors';
import Home from './Home';
import Apply from './Apply';
import Prizes from './Prizes';
import Navigator from './Navigator';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
      }}
    >

      <Navigator />
      {/* Home stripes also might not be playing nice */}
      <div id="home" style={{ position: 'relative' }}>
        <Home />
      </div>
      <div id="welcome" style={{ position: 'relative' }}>
        <Welcome />
      </div>
      <div id="apply" style={{ position: 'relative' }}>
        <Apply />
      </div>
      {/* tracks isn't playing nice on mobile */}
      <div id="tracks" style={{ position: 'relative' }}>
        <Tracks />
      </div>
      <div id="prizes" style={{ position: 'relative' }}>
        <Prizes />
      </div>
      <div id="schedule" style={{ position: 'relative' }}>
        <Schedule />
      </div>
      {/* faq also isn't playing nice on mobile */}
      <div id="faq" style={{ position: 'relative' }}>
        <Faq />
      </div>
      <div id="speakers" style={{ position: 'relative' }}>
        <Speakers />
      </div>
      <div id="sponsors" style={{ position: 'relative' }}>
        <Sponsors />
      </div>
    </div>
  );
}

export default App;
