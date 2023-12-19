import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";

export function SuperCone(props) {
  const { nodes, materials } = useGLTF("./SuperCone.glb");
  const [isCollisionSoundPlaying, setIsCollisionSoundPlaying] = useState(false);
  const collisionCooldownRef = useRef(false);
  const hasUserInteracted = useRef(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      hasUserInteracted.current = true;
    };

    window.addEventListener("click", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  const [ref, api] = useCylinder(() => ({
    type: "Dynamic",
    mass: 40,
    position: props.position,
    rotation: [0, 0, 0],
    args: [0.74 * 0.9, 1.34 * 0.9, 3.8 * 0.9, 8],
    linearDamping: 0.5,
    angularDamping: 0.5,
    onCollide: () => {
      if (!isCollisionSoundPlaying && hasUserInteracted.current && !collisionCooldownRef.current) {
        playCollisionSound();
      }
    },
  }));

  const playCollisionSound = () => {
    const audio = new Audio("./sound/soundeffects/collisions/collision1.mp3");

    audio.volume = 0.1;
    audio.play();

    setIsCollisionSoundPlaying(true);

    setTimeout(() => {
      setIsCollisionSoundPlaying(false);
    }, 6000);

    // Set the collision cooldown to true
    collisionCooldownRef.current = true;

    // Reset the collision cooldown after 1 second
    setTimeout(() => {
      collisionCooldownRef.current = false;
    }, 6000);
  };

  return (
    <group ref={ref} api={api} {...props} dispose={null}>
      <group scale={[0.89053506 * 1.1, 0.48320854 * 1.1, 0.71242803 * 1.1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle014.geometry}
          material={materials.orang}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle014_1.geometry}
          material={materials.white}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./SuperCone.glb");
