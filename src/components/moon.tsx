
import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import React from 'react';
import { Mesh, TextureLoader } from 'three';

function Moon(){
  const moonRef = useRef<Mesh>(null);
  const moonTexture = useLoader(TextureLoader, '/assets/moon.jpg');
  const moonNormalTexture = useLoader(TextureLoader, '/assets/moon_normal.jpg');

  useFrame((state, delta) => {
    if(moonRef.current)
    moonRef.current.rotation.y += 0.01 * 2;
  });
  return (
    <mesh ref={moonRef}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial map={moonTexture} normalMap={moonNormalTexture} />
    </mesh>
  );
};

export default Moon;



