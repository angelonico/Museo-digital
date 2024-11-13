"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
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

const loadModel = (url) => {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(url, (gltf) => {
      resolve(gltf);
    }, undefined, (error) => {
      reject(error);
    });
  });
};

const Model = ({ url, scale, position }) => {
  const [model, setModel] = React.useState();

  React.useEffect(() => {
    loadModel(url).then(setModel).catch(console.error);
  }, [url]);

  return model ? <primitive object={model.scene} scale={scale} position={position} /> : null;
};

const page = () => {
  const modelId = '2'; // Reemplaza con el ID de tu modelo
  const modelUrl = `http://localhost:4000/object/m/${modelId}`; // Asegúrate de que el puerto y la ruta sean correctos
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="w-3/4 h-full">
          <Canvas>
            <color attach="background" args={["#1a1a1a"]} />
            <Environment preset="sunset" />
            <ambientLight intensity={0.5} />
            <OrbitControls />
            {/*<Model url="/models/pato.glb" scale={[3, 3, 3]} position={[0, -1, 0]} />*/}
            <Model url={modelUrl} scale={[3, 3, 3]} position={[0, -1, 0]} />
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

export default page;