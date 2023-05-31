import React from "react";
import { Link } from "react-router-dom";

function time() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const min = date.getMinutes();
  const hours = date.getHours();
  const sec = date.getSeconds();

  document.getElementById("time").innerHTML =
    day + "-" + month + "-" + year + "  " + hours + ":" + min + ":" + sec;
}

setInterval(time, 1000);

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <div className="container-fluid">
            <Link
              className={`navbar-brand text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              to="/react"
            >
              Shreyas
            </Link>
          <button
            className={`navbar-toggler border border-${
              props.mode === "light" ? "dark" : "light"
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon`}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              // style="--bs-scroll-height: 100px;"
            >
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  aria-current="page"
                  to="/Home"
                >
                  Home
                </Link>
              </li>
            </ul>
            <p className="mx-5 my-2 d-flex" id="time">
              {" "}
            </p>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.onModeChange}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable DarkMode
              </label>
            </div>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}
