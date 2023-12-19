/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function   CajadoNatal(props) {
  const { nodes, materials } = useGLTF("./cajado_natal.glb");


  const [ref, api] = useBox(() => ({
    type: "Dynamic",
    mass: 5,
    position: props.position,
    rotation: [0, 0, 0],
    args: [0.5, 3, 2.3],
    linearDamping: 0.5,
    angularDamping: 0.5,
  }));


  return (
    <group ref={ref} api={api} {...props} dispose={null} >
      
      <mesh
      position={[0, -1.8, -1.2]}
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve.geometry}
        material={materials.cajado}
        rotation={[0.5, 0, -Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("./cajado_natal.glb");