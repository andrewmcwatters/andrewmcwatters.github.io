import React from 'react';

function NoMatch({ location }) {
  return <main>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </main>;
}

export default NoMatch;
