import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/home";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesScreen from "./screens/notes/index";
import UserEditScreen from "./screens/users/edit";

import PrivateRoute from "./components/auth/private_route";

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/register" component={RegisterScreen} />
      <Route exact path="/login" component={LoginScreen} />
      <PrivateRoute exact path="/notes" component={NotesScreen} />
      <PrivateRoute exact path="/users/edit" component={UserEditScreen} />
      {/* <Route element={<PrivateRoute />}>
        <Route exact path="/notes" element={<NotesScreen />} />
        <Route exact path="/user/edit" element={<UserEditScreen />} />
      </Route> */}
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
