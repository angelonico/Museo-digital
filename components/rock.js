import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Roca(props) {
  const { nodes, materials } = useGLTF('/Format2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock_lp.geometry}
        material={materials.Material}
        rotation={[Math.PI, -0.849, Math.PI]}
      />
    </group>
  )
}

useGLTF.preload('/Format2.glb')