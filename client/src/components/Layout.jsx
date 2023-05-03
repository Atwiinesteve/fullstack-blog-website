// react imports
import React from 'react'
import { Outlet } from 'react-router-dom';

// component imports
import Topbar from './topbar/Topbar'

// layout
export default function Layout() {
  return (
    <>
        <Topbar />
        <Outlet />
    </>
  )
};