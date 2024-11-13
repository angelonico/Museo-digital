import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Duck(props) {
  const { nodes, materials } = useGLTF('/pato.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rubber_duck_toy.geometry}
        material={materials.rubber_duck_toy}
      />
    </group>
  )
}

useGLTF.preload('/pato.glb')