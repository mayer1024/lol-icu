import * as React from "react";
import BasicLayout from "../layout/BasicLayout";

const Home = React.lazy(() => import("../page/home"));
const UserList = React.lazy(() => import("../page/userList"));

const routeConfig = {
  path: "/",
  component: BasicLayout,
  chilldren: [
    { path: "/home", component: Home },
    { path: "/userList", component: UserList },
  ],
};
export default routeConfig;
