// Rain.js

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RainDrop = ({ position }) => {
  const dropRef = useRef();

  useFrame(() => {
    // Move a gota para baixo
    dropRef.current.position.y -= 0.2;

    // Se a gota atingir o solo, resete a posição para cima
    if (dropRef.current.position.y < -5) {
      dropRef.current.position.y = 100;
    }
  });

  return (
    <mesh ref={dropRef} position={position}  >
      <planeGeometry attach="geometry" args={[0.2, 0.2]} />
      <meshBasicMaterial attach="material" color="white" transparent opacity={0.2} side={THREE.DoubleSide}/>
    </mesh>
  );
};

const Rain = () => {
  const rainDrops = Array.from({ length: 1500 }, (_, index) => (
    <RainDrop
      key={index}
      position={[
        Math.random() * 500 - 200, // X
        Math.random() * 200, // Y (começando de uma altura maior)
        Math.random() * 500 - 200, // Z
      ]}
    />
  ));

  return <>{rainDrops}</>;
};

export default Rain;