'use client'
import React, { useState, useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

export const Box = ({ starterRotation=[0,1,1], position=[0,0,0,]}) => {
  const [active, setActive] = useState(false);
  const [scale, setScale] = useState(0.1);
  const boxRef = useRef();

  
  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.01;
      boxRef.current.rotation.y -= 0.01;
    }
  });

  const [{ rotation }, setSpring] = useSpring(() => ({
    rotation: starterRotation
  }));
  const springs = useSpring({ scale: active ? 1 : 1, config: config.wobbly });

  return (
    <animated.mesh
      // @ts-ignore
      position={[, 0, 0]}
      rotation={rotation}
      scale={springs.scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setSpring.start()}
      ref={boxRef}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="royalblue" />
    </animated.mesh>
  );
};
