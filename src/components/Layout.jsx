import React from 'react'
import Side from './Side'
import TopNavBar from './TopNavBar'
import { Outlet } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

export default function Layout() {
    return (
        <PrivateRoute>
            <Side />
            <div className="content">
                <TopNavBar />
                <Outlet/>
            </div>
            </PrivateRoute>
    )
}
