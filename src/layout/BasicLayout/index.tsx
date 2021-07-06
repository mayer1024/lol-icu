import { Layout } from "antd";
import { Header } from "antd/lib/layout/layout";
import * as React from "react";

export default class BasicLayout extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Layout.Header>demo</Layout.Header>
        <Layout>
          <Layout.Sider>aside</Layout.Sider>
          <Layout.Content>{this.props.children}</Layout.Content>
        </Layout>
      </Layout>
    );
  }
}
