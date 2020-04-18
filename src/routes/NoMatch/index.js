import React from 'react';

function NoMatch({ location }) {
  return <div className="NoMatch">
    <main>
      <h3>
        No match for <code>{window.location.pathname}</code>
      </h3>
    </main>
  </div>;
}

export default NoMatch;
