import React from 'react'

export default function login() {

    const checkUser = () => {
        const data = localStorage.getItem('UserData');

        const email = document.getElementById('Email').value;
        const pass = document.getElementById('Password').value;
        const findUser = data.filter((d)=>d.Email === email && d.Password === pass);

        if(findUser.length > 0){
            alert("Welcome");
        }else{
            alert("Email or password is not valid");
        }
    }

  return (
  <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="Email" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="Password"/>
    </div>
    <button type="submit" onClick={checkUser} className="btn btn-primary">Submit</button>
  </form>
  )
}
