import React, { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';

const ArvoreNatalBrilhante = ({ color, position, scale, velocidade }) => {
  const treeGroup = useRef();

  // Função para gerar os pontos brilhantes da árvore
  const generatePoints = () => {
    const points = [];

    for (let i = 0; i < 50; i++) {
      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      for (let j = 0; j < 100; j++) {
        const angle = (j / 100) * Math.PI * 2;
        const radius = i * 0.07;
        const x = Math.cos(angle) * radius;
        const y = i * 0.2;
        const z = Math.sin(angle) * radius;

        vertices.push(x, y, z);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      points.push(
        <points key={i}>
          <bufferGeometry attach="geometry" {...geometry} />
          <pointsMaterial size={0.01} color={color} />
        </points>
      );
    }

    return points;
  };

  const points = useMemo(() => generatePoints(), [color]);

  // Adicionando animação de piscar aos pontos
  useEffect(() => {
    const animatePoints = () => {
      const time = Date.now() * 0.002 * velocidade; // Multiplicar pela velocidade

      treeGroup.current.children.forEach((point, index) => {
        const material = point.material;
        const distanceToTop = Math.abs(point.position.y);
        const delay = (1 - distanceToTop / 50) * 0.5;

        // Adicionando um atraso personalizado para cada ponto
        const intensity = Math.max(0, Math.sin(time + index * 0.1 - delay)) * 0.8 + 0.0000001;
        material.size = intensity * 0.2 + 0.1;
      });

      requestAnimationFrame(animatePoints);
    };

    animatePoints();
  }, [velocidade]);

  return (
    <group position={position} scale={[scale, -scale, scale]}>
      <group ref={treeGroup}>{points}</group>
    </group>
  );
};

export default ArvoreNatalBrilhante;
