
import {  useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Earth() {
  const modelRef = useRef();
  // Load the GLTF model using the GLTFLoader
  const gltf = useLoader(GLTFLoader, '/models/earthModel/scene.gltf');
  const earthModel = gltf.scene;
  // Adjust position, rotation, and scale
  earthModel.rotation.set(0, 1, 0); // Set the rotation
  earthModel.scale.set(10, 10, 10);
  earthModel.position.set(-205, -95, 150);

  useFrame((state, delta) => {
    // Rotate the model around the Y-axis
    earthModel.rotation.y += 0.0009;
    earthModel.position.x += 0.0007;
  });

  return (

    <primitive ref={modelRef} object={gltf.scene} />
  )
};

export default Earth


