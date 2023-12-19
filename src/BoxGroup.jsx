import React from 'react';
import { useBox } from '@react-three/cannon';

const BoxGroup = ({ positions, sizes, rotations, ...props }) => {
  const boxes = positions.map((position, index) => {
    const [ref] = useBox(() => ({
      type: "Static",
      mass: 1,
      position,
      args: sizes[index],
      rotation: rotations[index] || [0, 0, 0], // Use a rotação correspondente ou [0, 0, 0] se não for especificada
      ...props,
    }));

    return <mesh key={index} ref={ref} />;
  });

  return <group>{boxes}</group>;
};

export default BoxGroup;
