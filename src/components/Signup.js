import React, { useState } from "react";

export default function Signup(props) {
  const storeData = (event) => {
    event.preventDefault();
    // console.log("form submited");
    const name = document.getElementById("UserName").value;
    const email = document.getElementById("Email").value;
    const pass = document.getElementById("Password").value;
    const cpass = document.getElementById("ConfirmPassword").value;
    const userData = JSON.parse(localStorage.getItem("UserData"));
    const alredyemail = userData.filter((user) => user.Email === email);
    
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      alert("⚠Error! Email is not valid⚠");
    } else if (
      !pass.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,12}$/)
    ) {
      alert(
        "⚠Error! Password not valid⚠\nPassword must be 6 to 14 characters long and contain at least one uppercase letter, one lowercase letter, one special character, and one number"
      );
    } else if (pass !== cpass) {
      alert("⚠Error! Passwords do not match⚠");
    } else if (alredyemail.length > 1) {
        alert("⚠Error! Email address already exists⚠");
    } else {
      let UserData = JSON.parse(localStorage.getItem("UserData") || "[]");

      const storeValues = {
        Id: Math.random(),
        Name: name,
        Email: email,
        Password: pass,
      };

      console.log(UserData);


      UserData.push(storeValues);

      localStorage.setItem("UserData", JSON.stringify(UserData));
      return false;
    }
  };
  
  const [form,setForm] = useState({name:'',Email:'',Password:'',CPassword:''});

  function handelOnName(event) {
    setForm((prvState)=>{return {...prvState,name:event.target.value}});
    console.log(form);
  }
  function handelOnEmail(event) {
    setForm((prvState)=>{return {...prvState,Email:event.target.value}});
    console.log(form);
  }
  function handelOnPass(event) {
    setForm((prvState)=>{return {...prvState,Password:event.target.value}});
    console.log(form);
  }
  function handelOnCpass(event) {
    setForm((prvState)=>{return {...prvState,CPassword:event.target.value}});
    console.log(form);
  }


  return (
    <>
      <form>
        <h1>{props.title}</h1>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            UserName
          </label>
          <input
            type="text"
            onChange={handelOnName}
            className="form-control"
            id="UserName"
            placeholder="Enter Name..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Email1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            aria-describedby="emailHelp"
            onChange={handelOnEmail}
            placeholder="Enter Email..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="htmlForm-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={handelOnPass}
            id="Password"
            placeholder="Enter Password..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="htmlForm-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="ConfirmPassword"
            onChange={handelOnCpass}
            placeholder="Enter Confirm Password..."
          />
        </div>
        <button type="submit" onClick={storeData} className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
