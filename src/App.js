import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
// import login from "./components/login";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
      <Signup title = "Sign Up"/>
      </div>
    </>
  );
}

export default App;
