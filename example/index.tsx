import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../src";

const App = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1>Button 组件示例</h1>
      <div style={{ display: "flex", gap: 8 }}>
        <Button type="default">Default Button</Button>
        <Button type="primary">Primary Button</Button>
        <Button type="dashed">Dashed Button</Button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
