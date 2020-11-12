import React from 'react';
import './App.scss';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      {routes}
    </div>
  );
}

export default App;
