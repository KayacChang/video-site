import React from "react";
import NavBar from "./components/NavBar";
import Browse from "./pages/Browse";
import { SubscriptProvider, useSubscriptState } from "./storages/subscript";

function Routes() {
  const subscript = useSubscriptState();

  return (
    <>
      <Browse />
    </>
  );
}

function App() {
  return (
    <SubscriptProvider init={[]}>
      <div>
        <NavBar />
        <Routes />
      </div>
    </SubscriptProvider>
  );
}

export default App;
