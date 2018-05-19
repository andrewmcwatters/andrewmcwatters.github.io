import React from 'react';
import './Home.css';
import awwwards from './awwwards.svg';
import creative_bloq from './creative_bloq.svg';
import onextrapixel from './onextrapixel.png';

function Home(props) {
  return <React.Fragment>
    <main>
      <h1>
        <small>Hello, world.</small><br />
        I'm a developer & designer in Phoenix-Mesa-Scottsdale.
      </h1>
      <a href="https://github.com/andrewmcwatters">Follow me on GitHub</a>
    </main>
    <aside>
      <h2>
        Featured On
      </h2>
      <div className="logos">
        <img
          className="logo"
          src={awwwards}
          alt="Awwwards" />
        <span
          className="logo bootstrap-expo">
          Bootstrap Expo
        </span>
        <img
          className="logo"
          src={creative_bloq}
          alt="Creative Bloq" />
        <img
          className="logo"
          src={onextrapixel}
          alt="Onextrapixel" width="201" height="31" />
      </div>
    </aside>
  </React.Fragment>;
}

export default Home;
