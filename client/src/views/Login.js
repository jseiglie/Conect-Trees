import React from 'react'
import AdminFooter from '../components/AdminFooter'
import AdminHeader from '../components/AdminHeader'
import LoginForm from '../components/LoginForm'
import "../styles/Login.css"

const Login = () => {
  return (
    
    <div className='login__wrapper'>

    <AdminHeader/>
    <LoginForm/>
    <AdminFooter/>
    </div>
    
  )
}

export default Login