import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";


export default function Login(props) {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const checkUser = () => {
    const data = JSON.parse(localStorage.getItem("UserData"));

    const email = document.getElementById("Email").value;
    const pass = document.getElementById("Password").value;
    const findUser = data.filter(
      (d) => d.Email === email && d.Password === pass
    );

    if (findUser.length > 0) {
      // alert("Welcome");
      setIsLogin(true);
      return false;
    } else {
      alert("Email or password is not valid");
      return false;
    }
  };
  useEffect(() => {
    if (isLogin) {
      navigate('/Home');
    }
  }, [isLogin,navigate]);

  return (
    <div className="container">
      <h1 className={`form-label text-${
              props.mode === "dark" ? "light" : "dark"
            }`}>Login</h1>
      <form>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className={`form-label text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            aria-describedby="emailHelp"
            style={{
              backgroundColor: props.mode === "dark" ? "#343a40" : "white",
              color: props.mode === "dark" ? "white" : "#343a40",
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1"className={`form-label text-${
              props.mode === "dark" ? "light" : "dark"
            }`}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#343a40" : "white",
              color: props.mode === "dark" ? "white" : "#343a40",
            }}
            id="Password"
          />
        </div>
        <button type="submit" onClick={checkUser} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
