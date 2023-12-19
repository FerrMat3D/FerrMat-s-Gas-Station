import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import { ShaderMaterial } from 'three';
import { useSphere } from "@react-three/cannon";

export function BolaNatal(props) {
  const { nodes, materials } = useGLTF("./BolaNatal.glb");
  const { usePhysics = true, position, rotation, colorStart, raio } = props;

  const [ref, api] = usePhysics
    ? useSphere(() => ({
        type: "Dynamic",
        mass: 5,
        position,
        rotation,
        args: [raio || 0.2], // Usa o raio fornecido ou 0.2 como padrão
        linearDamping: 0.5,
        angularDamping: 0.5,
      }))
    : [null, null]; // Valores falsos se usePhysics for falso

  const material = new ShaderMaterial({
    uniforms: {
      colorStart: { value: new THREE.Vector3(colorStart[0], colorStart[1], colorStart[2]) },
      colorEnd: { value: new THREE.Vector3(0.5, 0.5, 0.5) },
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
        float transition = clamp(sin(time * 3.14159265359), 0.0, 1.0);
        vec3 color = mix(colorStart, colorEnd, transition);
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });

  const currentTimeRef = useRef(0);

  useEffect(() => {
    let animationFrameId;

    const updateMaterialTime = () => {
      const time = (performance.now() % 1050) / 500;
      currentTimeRef.current = time;
      material.uniforms.time.value = time;
      animationFrameId = requestAnimationFrame(updateMaterialTime);
    };

    updateMaterialTime();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [material]);

  return (
    <group ref={ref} api={api} {...props} dispose={null}>
      {/* Mesh com wireframe para Sphere_1 */}
      <mesh
      
        castShadow
        receiveShadow
        geometry={nodes.Sphere_1.geometry}
        material={material}
      ></mesh>

      {/* Mesh com wireframe para Sphere_2 */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_2.geometry}
        material={material}
      ></mesh>
    </group>
  );
}

useGLTF.preload("./BolaNatal.glb");
