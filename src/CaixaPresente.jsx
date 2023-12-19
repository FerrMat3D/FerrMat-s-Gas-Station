import React, { useRef, useMemo, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import * as THREE from 'three';
import { MeshStandardMaterial, Color } from "three";

export function CaixaPresente(props) {
  const { nodes, materials } = useGLTF("./caixa_presente.glb");

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

  const [ref, api] = useBox(() => ({
    type: "Dynamic",
    mass: 5,
    position: props.position,
    rotation: [0, 0, 0],
    args: [2, 2.5, 2],
    linearDamping: 0.5,
    angularDamping: 0.5,
    onCollide: () => {
      if (!isCollisionSoundPlaying && hasUserInteracted.current && !collisionCooldownRef.current) {
        playCollisionSound();
      }
    },
  }));

  const getRandomColorFromPalette = () => {
    const palette = ["#034f1b", "#e6dcb1", "#ceac5c", "#bd3634", "#7e121d"];
    return new Color(palette[Math.floor(Math.random() * palette.length)]);
  };

  const customMaterials = useMemo(() => {
    return {
      cor: new MeshStandardMaterial({
        color: getRandomColorFromPalette(),
      }),
      laco: new MeshStandardMaterial({
        side: THREE.DoubleSide,
        color: getRandomColorFromPalette(),
      }),
      TAMPA: new MeshStandardMaterial({
        color: getRandomColorFromPalette(),
      }),
    };
  }, []);

  useEffect(() => {
    const handleCollisionCooldown = () => {
      collisionCooldownRef.current = true;
      setTimeout(() => {
        collisionCooldownRef.current = false;
      }, 6000);
    };

    if (isCollisionSoundPlaying) {
      handleCollisionCooldown();
    }
  }, [isCollisionSoundPlaying]);

  const playCollisionSound = () => {
    const audio = new Audio("./sound/soundeffects/collisions/collision1.mp3");
    audio.volume = 0.03
    audio.play();

    setIsCollisionSoundPlaying(true);

    setTimeout(() => {
      setIsCollisionSoundPlaying(false);
    }, 6000);
  };

  return (
    <group ref={ref} api={api} {...props} dispose={null}>
      <group position={[0, -2.5 / 2, 0]} rotation={[Math.PI, -1.5e-7, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={customMaterials.cor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={customMaterials.laco}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={customMaterials.TAMPA}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./caixa_presente.glb");
