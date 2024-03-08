import React, { useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import instance from '../../api/agent'
import { useDispatch } from 'react-redux'
import { setAuth } from './LoginSlice'
export default function Login() {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            username: username,
            password: password
        }

        try {
            const res = await instance.post('Auth/login', payload)
            const { data, exception } = res?.data

            !exception && dispatch(setAuth(data))
            navigation('/')
            localStorage.setItem('token',data.token)
            
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        const token  = localStorage.getItem("token")

        token && navigation("/")
    }, [navigation])

    return (
        <>
            <div className="row min-vh-100 bg-100">
                <div className="col-6 d-none d-lg-block">
                    <div className="bg-holder" style={{ backgroundImage: "url('/assets/img/generic/14.jpg')", backgroundposition: '50% 20%' }}>
                    </div>

                </div>
                <div className="col-sm-10 col-md-6 px-sm-0 align-self-center mx-auto py-5">
                    <div className="row justify-content-center no-gutters">
                        <div className="col-lg-9 col-xl-8 col-xxl-6">
                            <div className="card">
                                <div className="card-header bg-circle-shape text-center p-2"><a className="text-white text-sans-serif font-weight-extra-bold fs-4 z-index-1 position-relative" href="/">Tinda</a></div>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h3>Daxil Ol</h3>
                                    </div>
                                    <form onSubmit={(e) => (handleSubmit(e))}>
                                        <div className="form-group">
                                            <label htmlFor="split-login-email">İstifadəçi Adı</label>
                                            <input value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="split-login-email" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <div className="d-flex justify-content-between">
                                                <label htmlFor="split-login-password">Şifrə</label><a className="fs--1" href="/">Şifrənin Bərpası</a>
                                            </div>
                                            <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="split-login-password" type="password" />
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-primary btn-block mt-3" type="submit" name="submit">Daxil Ol</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
