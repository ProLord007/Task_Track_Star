import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import Landing from "./pages/landing.js";
import Dashboard from "./pages/dashboard.js";
import Auth from "./pages/auth.js";
import Guard from "./utils/Guard.js";
import AuthGuard from "./utils/AuthGuard.js";
import { useDispatch } from "react-redux";
import { setToken, setUserData } from "./slices/userSlice.js";
import { getUserData } from "./services/auth/index.js";
import { AnimatePresence } from "framer-motion";

const Router = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const data = localStorage.getItem("token");
    const getUser = async () => {
      try {
        const response = await getUserData();
        dispatch(setUserData(response));
      } catch (e) {
        console.log(e);
      }
    };
    if (data) {
      dispatch(setToken(data));
      getUser();
    }
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/auth/:component">
        <AuthGuard>
          <Auth />
        </AuthGuard>
      </Route>
      <Route path="/dashboard">
        <Guard>
          <Dashboard />
        </Guard>
      </Route>
      <Route exact path="/">
        <Landing />
      </Route>
    </Switch>
  );
};

export default Router;
