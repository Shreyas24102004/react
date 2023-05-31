import React from "react";
import "./Home.css";

export default function Home(props) {
  return (
    <>
      <div className="containerr">
        <h1 id="Welcometext" className={`text-${props.mode === 'light'?'dark':'light'}`}>
          {" "}
          Welcome To Coding World
        </h1>
      </div>
    </>
  );
}
