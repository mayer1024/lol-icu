import * as React from "react";
import { Layout, Menu } from "antd";
import styles from "./index.module.css";
import menuConfig from "../../config/menu";
import { Link } from "react-router-dom";

export default class BasicLayout extends React.PureComponent {
  render() {
    return (
      <Layout className={styles.root}>
        <Layout.Sider>
          <Menu theme="dark">
            {menuConfig.map((item) => {
              return (
                <Menu.Item icon={item.icon} key={item.path}>
                  <Link to={item.path}>{item.name}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Header className={styles.header}>
            <div>demo</div>
          </Layout.Header>
          <Layout>
            <Layout.Content className={styles.content}>
              {this.props.children}
            </Layout.Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
