/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CabosTv(props) {
  const { nodes, materials } = useGLTF("./CabosTV.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve.geometry}
        material={materials["Material.024"]}
        position={[-9.84103775, 14.10952091, 17.59011459]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.017"]}
        position={[-9.51505852, 14.98855686, 15.86930847]}
        rotation={[2.45346249, 0, 0]}
        scale={-0.15238154}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.017"]}
        position={[9.51665688, 14.99185085, -15.79478455]}
        rotation={[2.45346249, 0, 0]}
        scale={-0.15238154}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.017"]}
        position={[1.66812634, 11.85014153, -0.53083056]}
        rotation={[2.45346249, 0, 0]}
        scale={-0.15238154}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve003.geometry}
        material={materials["Material.024"]}
        position={[9.51430321, 14.96294594, -15.81981277]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve004.geometry}
        material={materials["Material.024"]}
        position={[1.72520137, 11.8061924, -0.53762072]}
        scale={0.92637599}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve001.geometry}
        material={materials["Material.024"]}
        position={[1.72520137, 11.8061924, -0.53762072]}
        scale={0.92637599}
      />
    </group>
  );
}

useGLTF.preload("./CabosTV.glb");
