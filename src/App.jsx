import React from'react';
import { BrowserRouter, Route, route, Routes } from 'react-router-dom';
import './assets/sass/style.sass';
import My from './assets/pages/my';

function App() {
  return (
    <BrowserRouter>
      <My/>
    </BrowserRouter>
  );
}

export default App;