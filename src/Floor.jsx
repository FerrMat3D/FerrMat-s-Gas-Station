/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";



export function Floor(props) {
  const { nodes, materials } = useGLTF("./Floor.glb");

  const [ref] = useBox(() => ({
    type: "Static",
    position: [0, 0.1, 0],
    rotation: [0, 0, 0],
    args: [1000, 0.3, 1000],
    
  }));

  return (
    <group  {...props} dispose={null}>
      <group
        position={[2.652359, 12.066101, -0.754242]}
        scale={[316.055847, 316.055847, 333.782654]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane029_1.geometry}
          material={materials.snow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane029_2.geometry}
          material={materials.estrada}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./Floor.glb");