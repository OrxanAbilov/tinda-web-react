import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashBoard from './pages/Dashboard/DashBoard'
import Layout from './components/Layout'
import ESD from './pages/ESD/Root'
import Admin from './pages/Admin/Root'
import AdminEsd from './pages/Admin/ESD/Root'
import DocType from './pages/Admin/ESD/DocType'
import Login from './pages/Login/Login'
import Logout from './pages/Login/Logout'
import Notfound from './components/Notfound'
import AddDocType from './pages/Admin/ESD/AddDocType'
const Income = React.lazy(() => import('./pages/ESD/Income'));
const Outgoing = React.lazy(() => import('./pages/ESD/Outgoing'));
const History = React.lazy(() => import('./pages/ESD/History'));

export default function App() {
    return (
        <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Layout />}>
                <Route path="/Logout" element={<Logout />} />
                <Route path="*" element={<Notfound />} />
                <Route path="/" element={<DashBoard />} />
                <Route path="/esd" element={<ESD />} >
                    <Route path="*" element={<Notfound />} />
                    <Route index element={<Income />} />
                    <Route path="income" element={

                        <React.Suspense fallback={<>Yuklenir..</>}>
                            <Income />
                        </React.Suspense>
                    } />
                    <Route path="outgoing" element={
                        <React.Suspense fallback={<>Yuklenir..</>}>
                            <Outgoing />
                        </React.Suspense>

                    } />

                    <Route path="history" element={
                        <React.Suspense fallback={<>Yuklenir..</>}>
                            <History />
                        </React.Suspense>

                    } />
                </Route>
                <Route path="/Admin" element={<Admin />}>
                    <Route path="esd" element={<AdminEsd />}>
                        <Route index element={<DocType />} />
                        <Route path="doctypes" element={<DocType />} >
                        </Route>
                        <Route path='doctypes/add-doctype' element={<AddDocType />} />

                    </Route>
                </Route>
            </Route>
        </Routes>



    )
}
