import * as BABYLON from 'babylonjs';

const ModeloGLTF = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new BABYLON.Engine(canvas, true);

    const createScene = () => {
      const scene = new BABYLON.Scene(engine);

      // Crear una cámara
      const camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 20, new BABYLON.Vector3(0, 0, 0), scene);
      camera.attachControl(canvas, true);

      // Crear una luz
      const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

      // Cargar el modelo GLTF
      BABYLON.SceneLoader.ImportMeshAsync("", "/3d/gltf/", "scene.gltf", scene)
      .then((result) => {
          // Ajustar la posición y escala del modelo
          result.meshes[0].position.x = 0; // Centrar el modelo en el eje X
          result.meshes[0].position.y = 0; // Centrar el modelo en el eje Y
          result.meshes[0].scaling = new BABYLON.Vector3(0.5, 0.5, 0.5); // Ajustar el tamaño del modelo
      });

    return scene;
    };

    const scene = createScene();

    engine.runRenderLoop(() => {
      scene.render();
    });
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

// Resto de tu componente ThreeScene y Page


import React from 'react';
import Box from '../components/3d/Box';
import ModeloGLTF from '../3d/page';

export default function Page() {
  return (
    <div className="h-screen flex">
      {/* Modelo 3D */}
      <div className="bg-black h-full w-3/4 flex items-center justify-center">
        <Box />
      </div>

      {/* Descripcion */}
      <div className="flex flex-col text-black w-1/4 p-4">
        <h1 className="text-xl font-bold">Titulo del objeto</h1>
        <p>Otros nombres...</p>
      </div>
    </div>
  );
}
