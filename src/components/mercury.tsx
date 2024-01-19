
import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Mercury () {
  const modelRef = useRef();
  // Load the GLTF model using the GLTFLoader
  const gltf = useLoader(GLTFLoader, '/models/mercury/scene.gltf');
  const mercury = gltf.scene;
  // Adjust position, rotation, and scale
  mercury.rotation.set(0, 0, 0); // Set the rotation
  mercury.scale.set(4, 4, 4);
  mercury.position.set(-30, 0, -200); // Set the position
  
  useFrame((state, delta) => {
    // Rotate the model around the Y-axis
    mercury.position.x += 0.005 ;
  });

  return <primitive ref={modelRef} object={gltf.scene} />;
};
export default Mercury


