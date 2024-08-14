
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import React, { useRef, useEffect } from "react";
import { ShaderMaterial } from 'three';





export default function SheilaThree(props) {

  const { nodes, materials } = useGLTF("./model/christmas tree8.glb");


  const material = new ShaderMaterial({
    side: THREE.DoubleSide,  // Adicione esta linha para renderizar de ambos os lados
    uniforms: {
      colorStart: { value: new THREE.Vector3(-550, -550, -300) },
      colorEnd: { value: new THREE.Vector3(0, 0, 0) },
      time: { value: 0.0 },
    },
    vertexShader: `
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 colorStart;
      uniform vec3 colorEnd;
  
      void main() {
        // Use a função sin para criar uma transição suave com fade in e fade out
        float transition = clamp(sin(time * 3.14159265359), 0.0, 1.0);
  
        // Interpole entre as cores de início e fim com base na transição
        vec3 color = mix(colorStart, colorEnd, transition);
  
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });
  
  const currentTimeRef = useRef(0);
    
    useEffect(() => {
      let animationFrameId;
    
      const updateMaterialTime = () => {
        const time = (performance.now() % 2000) / 500;
        currentTimeRef.current = time;
        material.uniforms.time.value = time;
        animationFrameId = requestAnimationFrame(updateMaterialTime);
      };
    
      updateMaterialTime();
    
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    },  [material]); // Executa apenas uma vez ao montar o componente
  

    const material2 = new ShaderMaterial({
      side: THREE.DoubleSide,  // Adicione esta linha para renderizar de ambos os lados
      uniforms: {
        colorStart: { value: new THREE.Vector3(-100, -100, -550) },
        colorEnd: { value: new THREE.Vector3(0, 0, 0) },
        time: { value: 0.0 },
      },
      vertexShader: `
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 colorStart;
        uniform vec3 colorEnd;
    
        void main() {
          // Use a função sin para criar uma transição suave com fade in e fade out
          float transition = clamp(sin(time * 3.14159265359), 0.0, 1.0);
    
          // Interpole entre as cores de início e fim com base na transição
          vec3 color = mix(colorStart, colorEnd, transition);
    
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });
    
      
      useEffect(() => {
        let animationFrameId;
      
        const updateMaterialTime = () => {
          const time = (performance.now() % 1000) / 100;
          currentTimeRef.current = time;
          material2.uniforms.time.value = time;
          animationFrameId = requestAnimationFrame(updateMaterialTime);
        };
      
        updateMaterialTime();
      
        return () => {
          cancelAnimationFrame(animationFrameId);
        };
      },  [material2]); // Executa apenas uma vez ao montar o componente


      const material3 = new ShaderMaterial({
        side: THREE.DoubleSide,  // Adicione esta linha para renderizar de ambos os lados
        uniforms: {
          colorStart: { value: new THREE.Vector3(-550, -100, -100) },
          colorEnd: { value: new THREE.Vector3(0, 0, 0) },
          time: { value: 0.0 },
        },
        vertexShader: `
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 colorStart;
          uniform vec3 colorEnd;
      
          void main() {
            // Use a função sin para criar uma transição suave com fade in e fade out
            float transition = clamp(sin(time * 3.14159265359), 0.0, 1.0);
      
            // Interpole entre as cores de início e fim com base na transição
            vec3 color = mix(colorStart, colorEnd, transition);
      
            gl_FragColor = vec4(color, 1.0);
          }
        `,
      });
      
        
        useEffect(() => {
          let animationFrameId;
        
          const updateMaterialTime = () => {
            const time = (performance.now() % 3000) / 50;
            currentTimeRef.current = time;
            material3.uniforms.time.value = time;
            animationFrameId = requestAnimationFrame(updateMaterialTime);
          };
        
          updateMaterialTime();
        
          return () => {
            cancelAnimationFrame(animationFrameId);
          };
        },  [material3]); // Executa apenas uma vez ao montar o componente

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={materials["fabric material"]}
        position={[0, 0.011, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Star.geometry}
        material={materials.star}
        position={[0, 0.838, 0]}
        rotation={[Math.PI / 2, -0.279, 0]}
        scale={1.006}
      />
      <group position={[0, 0.739, 0]} scale={1.031}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spiral001.geometry}
          material={materials.Wire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spiral001_1.geometry}
          material={materials.glass}
        />


        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spiral001_2.geometry}
          material={material}
        />





      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.guirlande.geometry}
        material={materials.star}
        scale={[1.117, 1, 1.117]}
      />
      <group
        position={[0.005, 0.668, 0.007]}
        rotation={[0, 0.606, 0]}
        scale={0.876}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spiral002.geometry}
          material={materials.Wire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spiral002_1.geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spiral002_2.geometry}
   

          material={material2}





          
        />



      </group>
      <group
        position={[0.005, 0.683, 0.007]}
        rotation={[0, 1.297, 0]}
        scale={0.978}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spiral003.geometry}
          material={materials.Wire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spiral003_1.geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spiral003_2.geometry}
          material={material3}
        />
   




      </group>
      <group
        position={[-0.096, 0.624, 0.053]}
        rotation={[-0.025, -0.022, -0.044]}
        scale={1.008}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.String}
        />
      </group>
      <group
        position={[0.088, 0.577, 0.077]}
        rotation={[-0.925, -1.528, -0.916]}
        scale={1.001}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_1.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_2.geometry}
          material={materials.String}
        />
      </group>
      <group position={[-0.113, 0.309, 0.206]} rotation={[0.023, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.String}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials["star.001"]}
        />
      </group>
      <group position={[0.02, 0.513, -0.107]} rotation={[3.119, 0.08, -3.14]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials.String}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={materials["star.001"]}
        />
      </group>
      <group position={[0.071, 0.387, 0.08]} rotation={[0, -0.997, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001.geometry}
          material={materials["Ornament Random Colors"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_1.geometry}
          material={materials.hook}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_2.geometry}
          material={materials.String}
        />
      </group>
      <group position={[-0.133, 0.346, 0.154]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere008.geometry}
          material={material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere008_1.geometry}
          material={materials.hook}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere008_2.geometry}
          material={materials.String}
        />
      </group>
      <group position={[0.138, 0.415, 0.067]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.String}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials["Ornament Bumpy"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_2.geometry}
          material={materials.hook}
        />
      </group>
      <group position={[0.133, 0.453, -0.078]} rotation={[0, -0.196, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.String}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials["Ornament Bumpy"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials.hook}
        />
      </group>
      <group position={[-0.007, 0.482, 0.103]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere007.geometry}
          material={materials["Ornament Diamond"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere007_1.geometry}
          material={materials.hook}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere007_2.geometry}
          material={materials.String}
        />
      </group>
      <group position={[0.115, 0.266, -0.198]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002.geometry}
          material={materials["Ornament Diamond"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002_1.geometry}
          material={materials.hook}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002_2.geometry}
          material={materials.String}
        />
      </group>
      <group position={[-0.208, 0.235, -0.067]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere003.geometry}
          material={materials["Ornament Random Colors"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere003_1.geometry}
          material={materials.hook}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere003_2.geometry}
          material={materials.String}
        />
      </group>
      <group position={[-0.189, 0.408, 0.009]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004.geometry}
          material={materials["Ornament Random Colors"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004_1.geometry}
          material={materials.hook}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004_2.geometry}
          material={materials.String}
        />
      </group>
      <group position={[-0.084, 0.463, -0.127]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere005.geometry}
          material={materials["Ornament Random Colors.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere005_1.geometry}
          material={materials.hook}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere005_2.geometry}
          material={materials.String}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.trunk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
        material={materials.needle}
      />
    </group>
  );

}

useGLTF.preload("./model/christmas tree8.glb");