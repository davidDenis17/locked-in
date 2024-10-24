import React from 'react';

function Connections() {
  return (
    <aside className="connections-sidebar">
      <h4>People you may know</h4>
      <div className="connection">
        <img src="profile-pic-3.jpg" alt="Connection" className="connection-pic" />
        <div>
          <h5>Leonardo Cobaleda</h5>
          <p>Software Engineer at Google</p>
          <button>Connect</button>
        </div>
      </div>
      <div className="connection">
        <img src="profile-pic-4.jpg" alt="Connection" className="connection-pic" />
        <div>
          <h5>Oscar Delapresa</h5>
          <p>AI Researcher</p>
          <button>Connect</button>
        </div>
      </div>
    </aside>
  );
}

export default Connections;
