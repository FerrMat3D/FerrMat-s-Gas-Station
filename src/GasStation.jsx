/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { PivotControls, useGLTF , useTexture } from "@react-three/drei";    
import { EffectComposer,Bloom } from '@react-three/postprocessing'
import { MeshPhysicalMaterial } from "three";




export function GasStation(props) {

  const asphaltTexture = useTexture("./Textures/asphalt.jpg")
  const AOMap = useTexture("./Textures/pillar/Pillar_AOMAP.png")
  const normalMap = useTexture("./Textures/pillar/pillar_NormalMAP.png")
  const bumpMap = useTexture("./Textures/pillar/Pillar_SpecularMAP.png")


  const { nodes, materials } = useGLTF("./GasStation.glb");



  return (
    <group {...props} dispose={null}>
   


<mesh

        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
       material={materials["Material.015"]}
        position={[-0.00001526, 7.32205343, -0.00006294]}
        scale={1.05212128}
        >

<meshStandardMaterial map={materials["Material.015"].map}
 roughness={0.1}
  metalness={0.1}
   normalMap={materials["normalpillarmap"].map}
    normalScale={[500, 500]}
     normalMapType={0}
     aoMap={materials["aopillarmap"].map}
     aoMapIntensity={1.0}
      />

        </mesh>


<mesh
        castShadow
        receiveShadow
        geometry={nodes.QUADROLIGHT.geometry}
        material={materials["Material.007"]}
        position={[0, 15.33967972, -16.32473373]}
        rotation={[0.69332089, 0, -Math.PI]}
        scale={[-1, -0.036608, -1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ROOFLIGHT.geometry}
        position={[0, 15.33967972, -16.32473373]}
        rotation={[0.69332089, 0, -Math.PI]}
        scale={[-1, -0.036608, -1]}>

<meshStandardMaterial color={[ 5,5,5]} toneMapped={false}/>

          </mesh>




      <mesh
        name="DIGITAL_LED01"
        castShadow
        receiveShadow
        geometry={nodes.DIGITAL_LED01.geometry}
        material={materials["Material.008"]}
        position={[0, 14.87648201, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={[10.48561764, 0.324, 17.33160019]}
      />

      <group
        name="roof_struct"
        position={[0.01433045, 16.16393661, -5.77713776]}
        rotation={[-Math.PI, 0, 0]}
        scale={[10.48561764, 0.324, 17.33160019]}
      >
        <mesh
          name="Cube018"
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          name="Cube018_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube018_1.geometry}
          material={materials["Material.002"]}
        />
      </group>

      <mesh
        name="bloom_PRT01"
        castShadow
        receiveShadow
        geometry={nodes.bloom_PRT01.geometry}      
        position={[10.35376072, 14.8997097, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={[10.48561764, 0.324, 17.33160019]}
      >

<meshStandardMaterial color={[ 60/4,5/4,60/4]} toneMapped={false}/>


      </mesh>

      { <EffectComposer>
       <Bloom mipmapBlur/>
       </EffectComposer> }



      <mesh
        name="DIGITAL_LED02"
        castShadow
        receiveShadow
        geometry={nodes.DIGITAL_LED02.geometry}
        material={materials["Material.008"]}
        position={[0, 17.06899261, 0.00000268]}
        rotation={[-Math.PI, 0, 0]}
        scale={[10.48561764, 0.324, 17.33160019]}
      >

<meshStandardMaterial color={[0, 247/40, 255/40]} toneMapped={false} />


      </mesh>


      <mesh
        name="roof_bottom"
        castShadow
        receiveShadow
        geometry={nodes.roof_bottom.geometry}
        material={materials["Material.001"]}
        position={[0, 14.19707108, 0]}
        scale={[10.48561764, 0.324, 17.33160019]}
      />
    </group>
  );
}

useGLTF.preload("./GasStation.glb");
