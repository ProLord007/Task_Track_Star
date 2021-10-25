import React, { useCallback, useEffect } from "react";
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
import {
  isLoading,
  loadingSelector,
  openSnackbar,
  snackbarSelector,
} from "./slices/miscSlice.js";
import Loading from "./utils/Loading.js";
import Snackbar from "./utils/Snackbar.js";
import { AnimatePresence } from "framer-motion";

const Router = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const snackbarData = useSelector(snackbarSelector);

  const getUser = useCallback(
    async (token) => {
      try {
        const response = await getUserData(token);
        if (JSON.parse(response).type === "success") {
          const data = JSON.parse(response).data;
          dispatch(setUserData(data));
          if (data.org_id !== null) {
            const res = await getOrgData(
              {
                org_id: data.org_id,
              },
              token
            );
            if (JSON.parse(res).type === "success") {
              dispatch(setAllData(JSON.parse(res).data));
              dispatch(
                openSnackbar({ title: "Login Successful", type: "success" })
              );
            } else {
              dispatch(
                openSnackbar({ title: JSON.parse(res).message, type: "error" })
              );
              dispatch(isLoading(false));
            }
          } else {
            dispatch(
              openSnackbar({
                title: "Join or Create Organization",
                type: "inform",
              })
            );
          }
          dispatch(isLoading(false));
        }
      } catch (e) {
        dispatch(isLoading(false));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(isLoading(true));
    const data = localStorage.getItem("token");
    if (data) {
      dispatch(setToken(data));
      getUser(data);
    } else {
      dispatch(isLoading(false));
    }
  }, [dispatch, getUser]);

  return (
    <>
      <AnimatePresence>
        {snackbarData.status && (
          <Snackbar title={snackbarData.title} type={snackbarData.type} />
        )}
      </AnimatePresence>
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
