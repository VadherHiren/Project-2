import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Registration() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, username, email, password };
    fetch('http://localhost:4000/Login', {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res) {
          alert("Successfully Register...!");
          navigate('/')
        }
      })
  }


  return (

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
            <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
              <form onSubmit={handleSubmit}>

                {/* <!-- Name input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    id="registerName"
                    className="form-control"
                  />
                  <label className="form-label" for="registerName">Name</label>
                </div>

                {/* <!-- Username input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }}
                    id="registerUsername"
                    className="form-control"
                  />
                  <label className="form-label" for="registerUsername">Username</label>
                </div>

                {/* <!-- Email input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    id="registerEmail" className="form-control" />
                  <label className="form-label" for="registerEmail">Email</label>
                </div>

                {/* <!-- Password input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    id="registerPassword" className="form-control" />
                  <label className="form-label" for="registerPassword">Password</label>
                </div>

                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                    aria-describedby="registerCheckHelpText" />
                  <label className="form-check-label" for="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-3">Sign in</button>
              </form>
            </div>
          </div>
          {/* <!-- Pills content --> */}

        </div>
      </div>
    </div >
  )
}

export default Registration
