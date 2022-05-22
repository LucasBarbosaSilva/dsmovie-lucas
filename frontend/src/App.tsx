import React from 'react';
import { 
  BrowserRouter
} from 'react-router-dom';
import { AplicationRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AplicationRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
