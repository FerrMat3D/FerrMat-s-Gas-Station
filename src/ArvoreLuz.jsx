import React, { useRef, useEffect } from "react";
import { Wireframe, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { ShaderMaterial } from "three";
import { useBox } from "@react-three/cannon";

export function ArvoreLuz(props) {
  const { nodes, materials } = useGLTF("./ArvoreLuz.glb");

  // Adicione o prop usePhysics (padrão para true)
  const { usePhysics = true, position, rotation, colorStart } = props;

  // Condicionalmente useBox com base em usePhysics
  const [ref, api] = usePhysics
    ? useBox(() => ({
        type: "Dynamic",
        mass: 5,
        position,
        rotation,
        args: [0.3, 9, 4],
        linearDamping: 0.5,
        angularDamping: 0.5,
      }))
    : [null, null]; // Valores falsos se usePhysics for falso

  const material = new ShaderMaterial({
    uniforms: {
      colorStart: {
        value: new THREE.Vector3(colorStart[0], colorStart[1], colorStart[2]),
      },
      colorEnd: { value: new THREE.Vector3(0, 0, 0) },
      time: { value: 0.0 }, // Inicialmente, o tempo é 0
    },
    vertexShader: `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    uniform float time; // Um valor entre 0 e 1 controlando a transição
    uniform vec3 colorStart; // Cor inicial [10, 0, 10]
    uniform vec3 colorEnd; // Cor final [1, 0, 1]

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
      const time = (performance.now() % 150) / 500;
      currentTimeRef.current = time;
      material.uniforms.time.value = time;
      animationFrameId = requestAnimationFrame(updateMaterialTime);
    };

    updateMaterialTime();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [material, usePhysics]); // Adicione usePhysics como dependência

  return (
    <group ref={ref} api={api} {...props} dispose={null}>
      <group
        position={[0, -1, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.46066129, 1, 1.46066129]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_2.geometry}
          material={material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_3.geometry}
          material={material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_4.geometry}
          material={material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_5.geometry}
          material={material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./ArvoreLuz.glb"); 