import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routing from './Routing'; // Import the Routing component
import { NavBar } from "./global"

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <NavBar />
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;