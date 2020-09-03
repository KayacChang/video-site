import React from "react";
import NavBar from "./components/NavBar";
import Browse from "./pages/Browse";
import { SubscriptProvider, useSubscriptState } from "./storages/subscript";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Nav from "./components/Nav";

function Routes() {
  const subscript = useSubscriptState();
  const { pathname } = useLocation();

  const routes = [
    //
    { key: "Home", path: "/" },
    { key: "My List", path: "my-list" },
  ];

  return (
    <>
      <NavBar>
        {routes.map(({ key, path }) => (
          <Nav to={path} active={pathname === path} key={key}>
            {key}
          </Nav>
        ))}
      </NavBar>
      <Browse />
    </>
  );
}

function App() {
  return (
    <SubscriptProvider init={[]}>
      <Router>
        <Routes />
      </Router>
    </SubscriptProvider>
  );
}

export default App;
