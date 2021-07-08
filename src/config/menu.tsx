import { IAsideMenuConfig } from "../interface/type";
import { PlayCircleOutlined, StepBackwardOutlined } from "@ant-design/icons";

const menuConfig: IAsideMenuConfig[] = [
  {
    name: "主页",
    path: "/home",
    icon: <StepBackwardOutlined />,
  },
  {
    name: "用户页面",
    path: "/userList",
    icon: <PlayCircleOutlined />,
  },
];

export default menuConfig;
