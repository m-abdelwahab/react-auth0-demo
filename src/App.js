import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Landing, Profile } from "./pages";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading, PrivateRoute } from "./components";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div>
        <Switch>
          {!isAuthenticated ? (
            <Route exact path="/" component={Landing} />
          ) : (
            <Route exact path="/" component={Home} />
          )}
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
