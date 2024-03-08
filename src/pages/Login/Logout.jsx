import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {

    const navigation = useNavigate();
    const logOut = () => {
        localStorage.clear()
        sessionStorage.clear()
        navigation('/Login')
    }

    const redirectHome = () => {
        navigation('/')
    }
    return (
        <div>
            <h1>çışıx etmək istədiyinizdən əminziniz mi?</h1>
            <button onClick={() => (logOut())} >Çışıx Et</button>
            <button onClick={() => (redirectHome())} >Əsas səhifəyə qayıt.</button>


        </div>
    )
}
