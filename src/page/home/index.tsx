import * as React from "react";
import { Button } from "antd";

const Home = React.memo(() => {
  return (
    <div>
      <Button type="primary">按钮</Button>
    </div>
  );
});

export default Home;
