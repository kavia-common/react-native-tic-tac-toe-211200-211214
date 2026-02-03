import React from "react";
import { createRoot } from "react-dom/client";
import { AppRegistry } from "react-native";
import App from "../App";

// Register the RN root component and mount it to the DOM for web preview.
AppRegistry.registerComponent("main", () => App);

const rootTag = document.getElementById("root");
if (!rootTag) {
  throw new Error("Root element #root not found in index.html");
}

// AppRegistry.runApplication wires RN to the DOM node.
// Note: react-native-web will attach to the provided rootTag.
AppRegistry.runApplication("main", {
  rootTag,
});

// Also ensure React 18/19 root exists for any portal usage.
// (RNW doesn't require this, but it avoids some integrations breaking.)
createRoot(rootTag).render(<></>);
