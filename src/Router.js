import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/landing.js";
import Dashboard from "./pages/dashboard.js";
import Auth from "./pages/auth.js";
import Guard from "./utils/Guard.js";
import AuthGuard from "./utils/AuthGuard.js";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUserData } from "./slices/userSlice.js";
import { getUserData } from "./services/auth/index.js";
import Organization from "./pages/org.js";
import { setAllData } from "./slices/orgsSlice.js";
import { getOrgData } from "./services/organizations/index.js";
import GuestGuard from "./utils/GuestGuard.js";
import { isLoading, loadingSelector } from "./slices/miscSlice.js";
import Loading from "./utils/Loading.js";

const Router = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  useEffect(() => {
    dispatch(isLoading(true));
    const data = localStorage.getItem("token");
    const getUser = async () => {
      try {
        const response = await getUserData();
        dispatch(setUserData(response));
        if (JSON.parse(response).org_id) {
          const res = await getOrgData({ org_id: JSON.parse(response).org_id });
          dispatch(setAllData(JSON.parse(res)));
          if (res) dispatch(isLoading(false));
        }
      } catch (e) {
        console.log(e);
        dispatch(isLoading(false));
      }
    };
    if (data) {
      dispatch(setToken(data));
      getUser();
    }
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading type="Loading..." />
      ) : (
        <Switch>
          <Route path="/auth/:component">
            <AuthGuard>
              <Auth />
            </AuthGuard>
          </Route>
          <Route path="/dashboard">
            <Guard>
              <GuestGuard>
                <Dashboard />
              </GuestGuard>
            </Guard>
          </Route>
          <Route path="/org/:orgName">
            <Guard>
              <Organization />
            </Guard>
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      )}
    </>
  );
};

export default Router;
