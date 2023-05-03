// import react
import React from 'react';
import {Routes, Route} from 'react-router-dom';

// components
import Layout from './components/Layout';
import Home from './pages/home/Home';

// app component.
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
