import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


function Login() {

  const [email,setemail]=useState('');
    const [password,setpassword]=useState('')
    const navigate = useNavigate()
    const validate =()=>{
        let result = true;
        if(email === null || email === ''){
            result = false ;
            alert('Please Enter Email')
            // toast.warning('please enter email');
        }
        if(password === null || password === ''){
            result = false ;
            alert('Please Enter Password')
            // toast.warning('please enter password');
        }
        return result;
    }
    useEffect(()=>{sessionStorage.clear();},[])
    const proceedlogin = (e) => {
        e.preventDefault();
        if (validate()) {
            axios.get(`http://localhost:4000/Login?email=${email}`)
                .then((response) => {
                    const userData = response.data;
                    if (userData.length === 0) {
                        alert('User not found. Please enter a valid email');
                        // toast.warning('User not found. Please enter a valid email');
                    } else {
                        const user = userData[0];
                        if (user.password === password) {
                            alert('Login success');
                            // toast.success('Login success');
                            sessionStorage.setItem('name', user.name);
                            sessionStorage.setItem('userrole', user.role);
                            navigate('/');
                        } else {
                            alert('Please enter valid credentials');
                            // toast.error('Please enter valid credentials');
                        }
                    }
                })
                .catch((error) => {
                    alert('Login failed due to: ' + error.message);
                    // toast.error('Login failed due to: ' + error.message);
                });
        }
    };


  return (
    
    <div className=''>
      <ToastContainer />
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>

            {/* <!-- Pills navs --> */}
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
              <li className="nav-item login-regis-btn-br">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item login-regis-btn-br">
                <a className="nav-link" href="/registration">Register</a>
              </li>
            </ul>
            {/* <!-- Pills navs --> */}

            {/* <!-- Pills content --> */}
            <div className="tab-content">
              <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <form onSubmit={proceedlogin}>


                  {/* <!-- Email input --> */}
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} className="form-control" />
                    <label className="form-label" for="loginName">Email or username</label>
                  </div>

                  {/* <!-- Password input --> */}
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className="form-control" />
                    <label className="form-label" for="loginPassword">Password</label>
                  </div>

                  {/* <!-- 2 column grid layout --> */}
                  <div className="row mb-4">
                    <div className="col-md-6 d-flex justify-content-center">
                      {/* <!-- Checkbox --> */}
                      <div className="form-check mb-3 mb-md-0">
                        <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                        <label className="form-check-label" for="loginCheck"> Remember me </label>
                      </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center">
                      {/* <!-- Simple link --> */}
                      <a href="#!">Forgot password?</a>
                    </div>
                  </div>

                  {/* <!-- Submit button --> */}
                  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

                  {/* <!-- Register buttons --> */}
                  <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- Pills content --> */}

          </div>
        </div>
      </div >
    </div>

  )
}

export default Login
