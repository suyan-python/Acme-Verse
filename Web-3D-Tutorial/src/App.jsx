import React, { Suspense, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Home from "./Home.jsx";
import Ship from "./ShipModel.jsx";
import Courtyard from "./Courtyard.jsx";
import Model from "./Model.jsx";
import Donut from "./Donut.jsx";
import World from "./World.jsx";

const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Donut />
        <Model />
        <World />
      </Suspense>
      <ambientLight />
    </>
  );
};

const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Scene></Scene>
    </Canvas>
  );
};

export default App;
