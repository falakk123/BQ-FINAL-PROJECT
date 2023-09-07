import React, { useState } from 'react'
import '../Pages/loginsignup.css'
import axios from 'axios';
import { useContext } from 'react';
import Cookies from 'js-cookie';
import { GlobalContext } from '../../Context/context'
import { AppRoute } from '../../App';


export default function LoginSignup() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [username, setUsername] = useState("")
  // const [confirmPassword, setConfirmPassword] = useState("")
  const { user_state, user_dispatch } = useContext(GlobalContext)

  //  const [loader, setLoader] = useState(true)
  
  const LoginUser = (e) => {
    e.preventDefault();
    const payload = { email, password }
    console.log(payload)
    axios.post(`${AppRoute}api/login`, payload)
      .then((json) => {
        Cookies.set('token',json.data.token)
        user_dispatch({
          type: "USER_LOGIN",
          token: json.data.token
        })
      })
      .catch(err => console.log(err))
 
  }
  return (
    <>
      <div className="bg-dark">
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>

          <div>
            <div className="formContainer">
              <input type="checkbox" id="signup_toggle" />
              <form className="form1" >
                <div className="form1_front">
                  <div className="form1_details">Login</div>
                  <input placeholder="Email" className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                  <input placeholder="Password" className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                  <button className="btns" onClick={LoginUser}>Login</button>
                  <span className="switch">
                    Don't have an account?
                    <label className="signup_tog" htmlFor="signup_toggle"> 
                    Login
                    </label>
                  </span>
                
                </div>
              </form>
              
            </div>

          </div>


        </div>
      </div>


    </>
  )
}



