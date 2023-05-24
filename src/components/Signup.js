import React, { useState } from "react";

export default function Signup(props) {
  const storeData = (event) => {
    event.preventDefault();
    // console.log("form submited");
    const name = document.getElementById("UserName").value;
    const email = document.getElementById("Email").value;
    const pass = document.getElementById("Password").value;
    const cpass = document.getElementById("ConfirmPassword").value;

    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
    } else {
      let UserData = JSON.parse(localStorage.getItem("UserData") || "[]");

      const storeValues = {
        Name: name,
        Email: email,
        Password: pass,
      };

      console.log(UserData);

      if (!Array.isArray(UserData)) {
        UserData = [];
      }

      UserData.push(storeValues);

      localStorage.setItem("UserData", JSON.stringify(UserData));
      return false;
    }
  };

  function handelOnName(event) {
    setName(event.target.value);
  }
  function handelOnEmail(event) {
    setEmail(event.target.value);
  }
  function handelOnPass(event) {
    setPassword(event.target.value);
  }
  function handelOnCpass(event) {
    setCPassword(event.target.value);
  }

  const [name, setName] = useState("Shreyas");
  const [Email, setEmail] = useState("shreyas@gmail.com");
  const [Password, setPassword] = useState("Shreyas@1234");
  const [CPassword, setCPassword] = useState("Shreyas@1234");

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
            value={name}
            onChange={handelOnName}
            className="form-control"
            id="UserName"
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
            value={Email}
            onChange={handelOnEmail}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="htmlForm-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={Password}
            onChange={handelOnPass}
            id="Password"
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
            value={CPassword}
            onChange={handelOnCpass}
          />
        </div>
        <button type="submit" onClick={storeData} className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
