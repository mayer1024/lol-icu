import React, { Suspense } from "react";
import "./App.css";
import routeConfig from "./config/routes";
import { Route, Switch } from "react-router-dom";

function App() {
  const RouteComponent = routeConfig.component;
  return (
    <Suspense fallback={<></>}>
      <RouteComponent>
        <Switch>
          {routeConfig.chilldren.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                component={item.component}
              />
            );
          })}
        </Switch>
      </RouteComponent>
    </Suspense>
  );
}

export default App;
