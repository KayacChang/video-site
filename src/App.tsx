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
import { VideoPlayerProvider } from "./pages/VideoPlayer";

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

type Props = {
  subscript: string[];
};
function App({ subscript }: Props) {
  return (
    <VideoPlayerProvider>
      <VideoProvider init={{}}>
        <SubscriptProvider init={subscript}>
          <Router>
            <Routes />
          </Router>
        </SubscriptProvider>
      </VideoProvider>
    </VideoPlayerProvider>
  );
}

export default App;
