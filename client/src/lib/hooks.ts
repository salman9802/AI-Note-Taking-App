import React from "react";

import api, { authApi } from "@/api/api";
import { useAuth } from "@/context/AuthContext";
import { type User } from "./types";

export const useRefreshToken = () => {
  const refresh = async () => {
    const res = await api.get<User>("/user/access", {
      withCredentials: true,
    });
    return res.data;
  };

  return refresh;
};

export const useAuthApi = () => {
  const refresh = useRefreshToken();
  const { user } = useAuth();

  React.useEffect(() => {
    const requestInterceptor = authApi.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${user?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseInterceptor = authApi.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error.response.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const { accessToken } = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return authApi(prevRequest);
        }
        return Promise.reject(error);
      },
    );
    return () => {
      authApi.interceptors.request.eject(requestInterceptor);
      authApi.interceptors.response.eject(responseInterceptor);
    };
  }, [refresh, user]);

  return authApi;
};
