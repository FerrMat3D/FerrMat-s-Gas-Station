/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState, useEffect  } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useVideoTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useThree } from "@react-three/fiber";



export function Tvs2({ onMeshClick, ...props }) {
  const { nodes, materials } = useGLTF("./Tvs2.glb");






  const luan_videoPath = './Textures/videoTextures/01.mp4';
  const luan_video = useVideoTexture(luan_videoPath);

  const greenday_videoPath = './Textures/videoTextures/02.mp4';
  const greenday_video = useVideoTexture(greenday_videoPath);

  const pantural_videoPath = './Textures/videoTextures/03.mp4';
  const pantural_video = useVideoTexture(pantural_videoPath);


  const hitboxRefs = useRef([]);
  const [telaTexture, setTelaTexture] = useState(materials.ABOUT);

  const handleButtonClick = (texture) => {
    console.log(texture);
    setTelaTexture(texture);
  };

  useFrame(({ raycaster, camera }) => {
    const intersects = hitboxRefs.current
      .map((hitbox) => raycaster.intersectObject(hitbox))
      .flat();

    if (intersects.length > 0) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "auto";
    }
  });



  const meshRef = useRef();

  // Access the geometry
  const geometry = nodes.TELA_01.geometry;
  nodes.TELA_04.geometry = geometry;
  nodes.TELA_02.geometry = geometry;


  const tela04Ref = useRef();

  useEffect(() => {
    // Ajuste os valores de rotação conforme necessário
    if (tela04Ref.current) {
      tela04Ref.current.rotation.x = Math.PI / 1.6399991 ;

    }
  }, []);



  // Ensure the geometry has UVs
  if (!geometry.attributes.uv) {
    console.error('Geometry does not have UVs');
    return null;
  }

  useEffect(() => {
    // Garante que o código abaixo só é executado após o carregamento completo dos elementos
    const uvAttribute = geometry.attributes.uv;

    // Modifica UVs para um plano com 4 polígonos
    for (let i = 0; i < uvAttribute.array.length; i += 2) {
      uvAttribute.array[i] = 1 - uvAttribute.array[i]; // Troca X
      uvAttribute.array[i + 1] = 1 - uvAttribute.array[i + 1]; // Troca Y

      uvAttribute.array[i] += -0; // Translação X
      uvAttribute.array[i + 1] += 0.13; // Translação Y
    }

    // Marca o atributo como precisando de uma atualização
    uvAttribute.needsUpdate = true;
  }, [geometry]); // Certifique-se de incluir geometry como uma dependência


  
  // Other mesh properties
  const meshProps = {
    castShadow: true,
    receiveShadow: true,
    geometry: nodes.TELA_01.geometry,
    position: [8.30780506, 14.6880188, -17.9283638],
    rotation: [1.22173044, -Math.PI / 2, 0],
  };

  // Use useFrame to perform animation/update logic
  useFrame(() => {
 


  });



  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suporte01.geometry}
        material={materials["Material.034"]}
        position={[0.1518383, 10.75183868, -0.55550289]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suporte02.geometry}
        material={materials["Material.034"]}
        position={[0.00212689, 10.75183773, 0.5555799]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TV_04.geometry}
        material={materials["Material.031"]}
        position={[-8.14573669, 14.70111275, 17.89239883]}
        rotation={[1.22173044, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suporte04.geometry}
        material={materials["Material.034"]}
        position={[8.4561615, 15.24918747, -17.42459297]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suporte03.geometry}
        material={materials["Material.034"]}
        position={[-8.29545307, 15.24918747, 17.42461205]}
      />



      
<mesh
  ref={meshRef} {...meshProps}
>
<meshBasicMaterial map={luan_video} side={THREE.DoubleSide} />


</mesh>



      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TV_01.geometry}
        material={materials["Material.031"]}
        position={[8.45616341, 14.70111179, -17.8923912]}
        rotation={[1.22173044, -Math.PI / 2, 0]}
      />



      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TELA_02.geometry}
        material={materials.ABOUT}
        position={[0.00348248, 10.19066906, -1.05927157]}
        rotation={[1.22173044, -Math.PI / 2, 0]}
      >


<meshBasicMaterial map={pantural_video} side={THREE.DoubleSide} />

      </mesh>




      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TV_02.geometry}
        material={materials["Material.031"]}
        position={[0.15183826, 10.20376015, -1.02330542]}
        rotation={[1.22173044, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TELA_ABOUT.geometry}
        material={telaTexture}
        position={[0.00348234, 10.19066906, 1.05935001]}
        rotation={[1.22173044, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TV_03.geometry}
        material={materials["Material.031"]}
        position={[0.1518383, 10.20376015, 1.02338505]}
        rotation={[1.22173044, -Math.PI / 2, 0]}
      />



      <mesh
        ref={tela04Ref}
        castShadow
        receiveShadow
        geometry={nodes.TELA_04.geometry}
        material={materials.ABOUT}
        position={[-8.29409313, 14.68802261, 17.92836761]}
        rotation={[1.22173044, -Math.PI / 2, 0]}
      >

<meshBasicMaterial map={greenday_video} side={THREE.DoubleSide} />

      </mesh>




      <mesh
             onClick={() => handleButtonClick(materials.ABOUT)}
        castShadow
        receiveShadow
        geometry={nodes.hitbox_tv_about.geometry}
        material={materials["Material.032"]}
        position={[-1.63449621, 10.14745903, 1.04845035]}
        rotation={[Math.PI / 9, 0, 0]}
        scale={[0.05763757, 0.05115084, 0.03120152]}
        ref={(ref) => (hitboxRefs.current[0] = ref)}
      />
      <mesh
             onClick={() => handleButtonClick(materials.SKILLS)}
        castShadow
        receiveShadow
        geometry={nodes.hitbox_tv_skills.geometry}
        material={materials["Material.032"]}
        position={[-0.80929679, 9.31726933, 0.76145285]}
        rotation={[Math.PI / 9, 0, 0]}
        scale={[0.05763757, 0.05115084, 0.03120152]}
        ref={(ref) => (hitboxRefs.current[1] = ref)}
       
      />
      <mesh
             onClick={() => handleButtonClick(materials.EXP)}
        castShadow
        receiveShadow
        geometry={nodes.hitbox_tv_xp.geometry}
        material={materials["Material.032"]}
        position={[0.01241183, 10.06624126, 1.03024566]}
        rotation={[Math.PI / 9, 0, 0]}
        scale={[0.05763757, 0.05115084, 0.03120152]}
        ref={(ref) => (hitboxRefs.current[2] = ref)}
      />
      <mesh
       onClick={onMeshClick}
        castShadow
        receiveShadow
        geometry={nodes.hitbox_tv_back.geometry}
        material={materials["Material.032"]}
        position={[-1.1946249, 11.0292387, 1.37631559]}
        rotation={[Math.PI / 9, 0, 0]}
        scale={[0.05763757, 0.05115084, 0.03120152]}
        ref={(ref) => (hitboxRefs.current[3] = ref)}
     
      />
      <mesh
       onClick={() => {
        window.open("https://www.instagram.com/ferrmat3d", "_blank");
      }}
        castShadow
        receiveShadow
        geometry={nodes.hitbox_tv_INSTA.geometry}
        material={materials["Material.032"]}
        position={[-1.14335859, 10.4340086, 1.1549387]}
        rotation={[Math.PI / 9, 0, 0]}
        scale={[0.02093917, 0.05115084, 0.03120151]}
        ref={(ref) => (hitboxRefs.current[4] = ref)}
   
      />
      <mesh
            onClick={() => {
              window.open("https://www.linkedin.com/in/matheus-ferreira-1416132a5", "_blank");
            }}
        castShadow
        receiveShadow
        geometry={nodes.hitbox_tv_linkedin.geometry}
        material={materials["Material.032"]}
        position={[-0.46837205, 10.5316906, 1.19689357]}
        rotation={[Math.PI / 9, 0, 0]}
        scale={[0.02093917, 0.05115084, 0.03120151]}
        ref={(ref) => (hitboxRefs.current[5] = ref)}
    
      />
      <mesh
       onClick={() => {
        window.open("https://github.com/FerrMat3D", "_blank");
      }}
        castShadow
        receiveShadow
        geometry={nodes.hitbox_tv_github.geometry}
        material={materials["Material.032"]}
        position={[-1.11389554, 9.86091423, 0.96004117]}
        rotation={[Math.PI / 9, 0, 0]}
        scale={[0.02093917, 0.05115084, 0.03120151]}
        ref={(ref) => (hitboxRefs.current[6] = ref)}
    
      />
      <mesh
       onClick={() => {
        window.location.href = "mailto:ferrmatstudio@gmail.com";
      }}
        castShadow
        receiveShadow
        geometry={nodes.hitbox_tv_gmail.geometry}
        material={materials["Material.032"]}
        position={[-0.50309128, 9.86091423, 0.96004117]}
        rotation={[Math.PI / 9, 0, 0]}
        scale={[0.02093917, 0.05115084, 0.03120151]}
        ref={(ref) => (hitboxRefs.current[7] = ref)}
       
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TELA_SKILLS.geometry}
        material={materials.SKILLS}
        position={[0.00348234, -6.37251186, 1.05935001]}
        rotation={[1.22173044, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TELA_EXP.geometry}
        material={materials.EXP}
        position={[4.51561403, -6.37251186, 1.05935001]}
        rotation={[1.22173044, -Math.PI / 2, 0]}
      />
    </group>
  );

}

useGLTF.preload("./Tvs2.glb");
