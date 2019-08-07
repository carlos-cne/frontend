import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import Login from "./Pages/Login";
import Main from "./Pages/Main";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/login" exact component={Login} />
      <Route path="/dev/:id" component={Main} />
    </BrowserRouter>
  );
}
