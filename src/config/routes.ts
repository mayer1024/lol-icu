import * as React from "react";
import { IRouteConfig } from "../interface/type";
import BasicLayout from "../layout/BasicLayout";

const Home = React.lazy(() => import("../page/home"));
const UserList = React.lazy(() => import("../page/userList"));

const routeConfig: IRouteConfig = {
  path: "/",
  component: BasicLayout,
  children: [
    // { path: "/", autoRedirect: true },
    { path: "/home", component: Home },
    { path: "/userList", component: UserList },
  ],
};
export default routeConfig;
