import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <div>
      page app <Link to="app1">aaa</Link>
      <div>
        page app <Link to="app1">aaa</Link>
      </div>
    </div>
  );
};

export default App;
