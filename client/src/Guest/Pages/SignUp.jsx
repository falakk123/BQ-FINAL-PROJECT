import React, { useState } from 'react'
import '../Pages/loginsignup.css'
import axios from 'axios';
import { AppRoute } from '../../App';
import Swal from 'sweetalert2'



export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    // const { user_state, user_dispatch } = useContext(GlobalContext)

    const signUpUser = (e) => {
        e.preventDefault();
        const payload = { email, password, username }
        console.log(payload)
        setEmail(''),setPassword(''),setUsername('')
        axios.post(`${AppRoute}api/signup`, payload)
            .then((json) => 
                console.log(json.data))
                .catch(err => console.log(err))

                Swal.fire({
                    title: 'Succesfully Signup',
                    text: 'ThankYou For Connecting With Us',
                    icon: 'success',
                    confirmButtonText: 'Done!'
                  })   
          
    }


    

    return (
        <>


            <div className="bg-dark">
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>

                    <div>
                        <div className="formContainer">
                            <input type="checkbox" id="signup_toggle" />
                            <form className="form1" onSubmit={signUpUser}>
                                <div className="form1_front">
                                    <div className="form1_details">Signup</div>
                                    <input placeholder="username" className="input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    <input placeholder="Email" className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <input placeholder="Password" className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <button className="btns">SignUp</button>
                                    <span className="switch">
                                        Don't have an account?
                                        <label className="signup_tog" htmlFor="signup_toggle">
                                            Sign Up
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



