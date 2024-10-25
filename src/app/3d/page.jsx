"use client";
import React, { useEffect, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "@react-three/drei";

const ModeloOBJ = () => {
  const obj = useLoader(OBJLoader, "/3d/CERVECERO.obj"); // Ruta al archivo .obj

  console.log("Objeto cargado:", obj);

  useEffect(() => {
    if (obj) {
      console.log("Geometría del objeto:", obj.geometry);
    } else {
      console.log("El objeto no se ha cargado.");
    }
  }, [obj]);

  return <primitive object={obj} />;
};

const ThreeScene = () => {
  return (
    <Canvas style={{ height: "100vh", width: "100%" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <ModeloOBJ />
      <OrbitControls />
    </Canvas>
  );
};

export default function Page() {
  return (
    <div className="flex min-h-screen w-full bg-red-400">
      <ThreeScene />
    </div>
  );
}
