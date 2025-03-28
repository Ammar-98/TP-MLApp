import React, { useState } from "react";
import AppContext from "./AppContext";

const AppState = (props: any) => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<any>(false);
  const [isLoading, setIsLoading] = useState<any>(true);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
