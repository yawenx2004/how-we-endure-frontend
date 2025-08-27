import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router';

import Nav from './components/nav';
import Home from './screens/home';
import Tools from './screens/tools';
import Friends from './screens/friends';

export default function App() {
  return (
    <BrowserRouter>
      <iv>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </iv>
    </BrowserRouter>
  );
}
