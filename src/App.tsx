import React from "react";
import NavBar from "./components/NavBar";
import Browse from "./pages/Browse";

function Routes() {
  return (
    <>
      <Browse />
    </>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
