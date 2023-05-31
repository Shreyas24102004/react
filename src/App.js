import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Firstscreen from "./components/Firstscreen";

function App() {
  const [mode, setMode] = useState("light");

  const onModeChange = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} onModeChange={onModeChange} />
        <Routes>
        <Route
            path="/react"
            element={
              <>
                <Firstscreen></Firstscreen>
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <div className="container">
                  <Signup title="Sign Up" mode={mode} />
                </div>
              </>
            }
          ></Route>
          <Route
            path="/Login"
            element={
              <>
                <Login mode={mode} />
              </>
            }
          ></Route>
          <Route
            path="/Home"
            element={
              <>
                <Home mode={mode} />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
