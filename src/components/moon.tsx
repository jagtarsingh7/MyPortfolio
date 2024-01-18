
import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Moon() {
  const modelRef = useRef();
  // Load the GLTF model using the GLTFLoader
  const gltf = useLoader(GLTFLoader, '/models/moon/scene.gltf');
  const moon = gltf.scene;
  // Adjust position, rotation, and scale
  moon.rotation.set(0, 0, 0); // Set the rotation
  moon.scale.set(0.0005, 0.0005, 0.0005);
  moon.position.set(7, -3, 468); // Set the position
  // gltf.scene.position.set(0, 0, 0);
  useFrame((state, delta) => {
    // Rotate the model around the Y-axis
    moon.rotation.y += 0.0005 ;
    moon.position.x-= 0.0001 
  });
  return <primitive ref={modelRef} object={gltf.scene} />;
};
export default Moon


