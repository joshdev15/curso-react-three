import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "three";

import Lienzo from "./components/Lienzo";
import Cubo from "./components/Cubo";
import Esfera from "./components/Esfera";
import { OrbitControls } from "@react-three/drei";

/**
 * [Horizontal, Vertical, Eje Z]
 * [10, 10, 10]
 * [-10, -10, -10]
 */

const App = () => {
  return (
    <div className="App">
      <Lienzo>
        <pointLight color={"white"} position={[0, 10, 5]} intensity={0.3} />
        <pointLight color={"yellow"} position={[0, -10, -5]} intensity={0.05} />
        <OrbitControls />
        <Cubo position={[0.5, 0.5, 0.5]} color={"red"} />
        <Esfera position={[-0.5, -0.5, -0.5]} color={"blue"} />
      </Lienzo>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
