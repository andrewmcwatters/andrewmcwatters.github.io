import React from 'react';

function NoMatch({ location }) {
  return <main>
    <h3>
      No match for <code>{window.location.pathname}</code>
    </h3>
  </main>;
}

export default NoMatch;
