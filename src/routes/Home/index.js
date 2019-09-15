import React from 'react';
import './Home.css';
import awwwards from './awwwards.svg';
import creative_bloq from './creative_bloq.svg';
import onextrapixel from './onextrapixel.png';

function Home(props) {
  return <React.Fragment>
    <main className="
      text-left
      align-items-start
    ">
      <h1>
        Andrew McWatters<br />
        <small>Developer. Designer.</small>
      </h1>
      <a href="https://github.com/andrewmcwatters">Follow me on GitHub</a>
    </main>
    <aside className="text-left">
      <h2 className="">
        Featured On
      </h2>
      <div className="
        logos
        justify-content-start
      " style="filter: grayscale(100%); opacity: .26;">
        <div className="text-nowrap d-flex justify-content-center">
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
      </div>
    </aside>
  </React.Fragment>;
}

export default Home;
