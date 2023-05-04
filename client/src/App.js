// import react
import React from 'react';
import {Routes, Route} from 'react-router-dom';

// components
import Layout from './components/Layout';

// pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';

// app component.
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/update" element={<Settings />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};
