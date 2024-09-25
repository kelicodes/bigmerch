import React, { useState } from 'react'
import './Login.css'
const Loginsignup = () => {
  const [state, setState] = useState("login");
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
    email: ""
  });
  const changehandler = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  }
  const login = async () => {
    console.log("log in fuction executed", formdata);
    let responsedata;
    await fetch('http://localhost:4000/login', {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formdata)
    }).then((response) => response.json()).then((data) => responsedata = data)
    if (responsedata.success) {
      localStorage.setItem("auth-token", responsedata.token);
      window.location.replace('/');
    }
    else {
      alert(responsedata.errors);
    }
  }
  const signup = async () => {
    console.log("signup function executed", formdata);
    let responsedata;
    await fetch('http://localhost:4000/signup', {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formdata)
    }).then((response) => response.json()).then((data) => responsedata = data)
    if (responsedata.success) {
      localStorage.setItem("auth-token", responsedata.token);
      window.location.replace('/');
    }
    else {
      alert(responsedata.errors);
    }

  }
  return (
    <div className='loginsignup'>
      <div className="logincontainer">
        <h1>{state}</h1>
        <div className="loginfields">
          {state === "signup" ? <input name="username" value={formdata.username} onChange={changehandler} type="text" placeholder='Name' /> : <></>}
          <input type="email" name="email" value={formdata.email} onChange={changehandler} placeholder='Email Adress' />
          <input name="password" value={formdata.password} onChange={changehandler} type="password" placeholder='Enter password' />
        </div>
        <button onClick={() => { state === 'login' ? login() : signup() }}>Continue</button>
        {state === "signup" ? <p className="loginsighnuplog">Already have an account?
          <span onClick={() => setState("login")}>Login Here</span>
        </p> : <p className="loginsighnuplog">Create an account?
          <span onClick={() => (setState("signup"))}>Click Here</span>
        </p>}
        <div className="loginsignupagree">
          <input type="checkbox" name='' id='' />
          <p>By continuing I agree to use the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup
