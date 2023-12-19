/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { forwardRef, useEffect, useRef } from 'react';
import { useGLTF } from "@react-three/drei";
import { useBox } from '@react-three/cannon';

export const LotusEspirit = forwardRef(({ args = [6, 3  , 13], mass = 2500, setVisible, ...props }, ref) => {
  const { nodes, materials } = useGLTF("./LotusEspirit.glb");

  const [, api] = useBox(
    () => ({
      mass,
      args,
      allowSleep: false,
      position: [-4, 1,0],
      ...props
    }),
    ref
  );

  return (

    <group  dispose={null} ref={ref} api={api} userData={{ id: 'lotusespirit' }} {...props} scale={4} >
        <group position={[0, 0.02069213, 0]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_2.geometry}
          material={materials.preto}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_3.geometry}
          material={materials.preto2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_4.geometry}
          material={materials.preto3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_5.geometry}
          material={materials.vermei}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_6.geometry}
          material={materials["Material.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_7.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_8.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_9.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_10.geometry}
          material={materials.grade}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_11.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_12.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_13.geometry}
          material={materials.Farol01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_14.geometry}
          material={materials.test}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_15.geometry}
          material={materials["preto.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_16.geometry}
          material={materials.luzfreio}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_17.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_18.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_19.geometry}
          material={materials.farol02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_20.geometry}
          material={materials["Material.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_21.geometry}
          material={materials["Material.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_22.geometry}
          material={materials.laco}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_23.geometry}
          material={materials.TAMPA}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_24.geometry}
          material={materials.cor22}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_25.geometry}
          material={materials.cor3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_26.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_27.geometry}
          material={materials.branco}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_28.geometry}
          material={materials.color}
        />
      </group>
    </group>

 
  );
});

useGLTF.preload("./LotusEspirit.glb");