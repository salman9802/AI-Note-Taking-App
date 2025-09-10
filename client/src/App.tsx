import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import NotePage from "./pages/NotePage";
import AuthSwitch from "./components/AuthSwitch";
import { useRefreshToken } from "./lib/hooks";
import { useAuth } from "./context/AuthContext";
import Loader from "./components/Loader";
import axios from "axios";

const App = () => {
  const refresh = useRefreshToken();
  const { setUser } = useAuth();
  const [checkingUser, setCheckingUser] = React.useState(false);

  React.useLayoutEffect(() => {
    (async () => {
      try {
        setCheckingUser(true);
        const user = await refresh();
        setUser(user);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response?.data.message || "Something went wrong");
        } else {
          console.error("Something went wrong");
        }
      } finally {
        setCheckingUser(false);
      }
    })();
  }, []);

  return (
    <div>
      {checkingUser ? (
        <div className="flex min-h-screen w-full items-center justify-center">
          <Loader className="size-10 md:size-20" />
        </div>
      ) : (
        <Routes>
          <Route
            index
            element={
              <AuthSwitch
                ifAuth={<HomePage />}
                ifUnauth={<Navigate to="/register" />}
              />
            }
          />
          <Route
            path="register"
            element={
              <AuthSwitch
                ifAuth={<Navigate to="/" />}
                ifUnauth={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <AuthSwitch
                ifAuth={<Navigate to="/" />}
                ifUnauth={<LoginPage />}
              />
            }
          />

          <Route
            path="/note/:noteId"
            element={
              <AuthSwitch
                ifAuth={<NotePage />}
                ifUnauth={<Navigate to="/register" />}
              />
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
