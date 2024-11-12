"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
//import { Duck } from "../../../components/Duck";
import { MedWin } from "../../../components/medievalWindow";
import { Roca } from "../../../components/rock";
import { Scene } from "three";

const InfoSection = () => {
  return (
    <div className="w-full p-4 bg-gray-800 text-white">
      <h2 className="text-xl font-bold">Información sobre el modelo 3D</h2>
      <p>
        Esta roca es un modelo 3D detallado que representa una formación rocosa natural. 
        Es ideal para su uso en simulaciones, videojuegos, y aplicaciones de realidad virtual.
      </p>
    </div>
  );
};

const index = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="w-3/4 h-full">
          <Canvas>
            <color attach="background" args={["#1a1a1a"]} />
            <Environment preset="studio" />
            <ambientLight intensity={0.5} />
            <OrbitControls />
            <Roca position={[0, -1, 0]} scale={[3, 3, 3]} />
          </Canvas>
        </div>
        <div className="w-1/4 h-full flex items-center justify-center">
          Mostrando modelo 3D !
        </div>
      </div>
      <div>
        <InfoSection />
      </div>
    </div>
  );
};

export default index;
