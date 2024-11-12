import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MedWin(props) {
  const { nodes, materials } = useGLTF('/medievalWin.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[3.695, 0.736, -0.262]} rotation={[-0.016, 0.804, 0.018]} scale={[-1, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials['fallback Material']}
          scale={0.025}
        />
      </group>
      <group position={[3.332, 0.244, 0.022]} rotation={[0, 0.798, 0]} scale={1.048}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box012.geometry}
          material={materials['fallback Material']}
          scale={0.025}
        />
      </group>
      <group position={[3.368, 0.551, -0.033]} rotation={[0, 0.798, 0]} scale={1.068}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line005.geometry}
          material={materials['fallback Material']}
          scale={0.025}
        />
      </group>
      <group position={[3.657, 0.551, -0.329]} rotation={[0, 0.798, 0]} scale={1.077}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line006.geometry}
          material={materials['fallback Material']}
          scale={0.025}
        />
      </group>
      <group position={[3.632, 0.246, -0.285]} rotation={[0, 0.798, 0]} scale={1.048}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box013.geometry}
          material={materials['fallback Material']}
          scale={0.025}
        />
      </group>
      <group position={[3.507, 0.872, -0.18]} rotation={[0, 0.798, 0]} scale={1.161}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line007.geometry}
          material={materials['fallback Material']}
          scale={0.025}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/medievalWin.glb')