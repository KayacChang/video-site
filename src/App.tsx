import React from "react";
import { SubscriptProvider } from "./storages/subscript";
import { VideoProvider } from "./storages/video";
import {
  BrowserRouter as Router,
  useLocation,
  Switch,
  Route,
} from "react-router-dom";
import Nav from "./components/Nav";
import NavBar from "./components/NavBar";
import Browse from "./pages/Browse";
import MyList from "./pages/MyList";

function Routes() {
  const { pathname } = useLocation();

  const routes = [
    //
    { key: "My List", path: "/my-list", page: <MyList /> },
    { key: "Home", path: "/", page: <Browse /> },
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

      <Switch>
        {routes.map(({ key, path, page }) => (
          <Route key={key} path={path}>
            {page}
          </Route>
        ))}
      </Switch>
    </>
  );
}

function App() {
  return (
    <VideoProvider init={{}}>
      <SubscriptProvider init={[]}>
        <Router>
          <Routes />
        </Router>
      </SubscriptProvider>
    </VideoProvider>
  );
}

export default App;
