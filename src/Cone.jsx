import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";

export function Cone(props) {
  const { nodes, materials } = useGLTF("./Cone.glb");
  const [isCollisionSoundPlaying, setIsCollisionSoundPlaying] = useState(false);
  const hasUserInteracted = useRef(false);
  const collisionCooldownRef = useRef(false);

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
    mass: 5,
    position: props.position,
    rotation: [0, 0, 0],
    args: [0.35 * 0.7, 1.55 * 0.7, 3 * 0.7, 8],
    linearDamping: 0.5,
    angularDamping: 0.5,
    onCollide: () => {
      if (!isCollisionSoundPlaying && hasUserInteracted.current && !collisionCooldownRef.current) {
        playCollisionSound();
      }
    },
  }));

  const playCollisionSound = () => {
    const audio = new Audio("./sound/soundeffects/collisions/collision1.mp3"); // Change the collision sound file

    audio.volume = 0.1
    audio.play();

    setIsCollisionSoundPlaying(true);

    setTimeout(() => {
      setIsCollisionSoundPlaying(false);
    },6000);

    // Set the collision cooldown to true
    collisionCooldownRef.current = true;

    // Reset the collision cooldown after 1 second
    setTimeout(() => {
      collisionCooldownRef.current = false;
    }, 6000);
  };

  return (
    <group ref={ref} api={api} {...props} dispose={null}>
      <group
        position={[0, -0.00584147, -0.0001339]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.17091788 * 0.7}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle006.geometry}
          material={materials.orang}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle006_1.geometry}
          material={materials.white}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./Cone.glb");
