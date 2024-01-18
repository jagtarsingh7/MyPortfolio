
import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Venus () {
  const modelRef = useRef();
  // Load the GLTF model using the GLTFLoader
  const gltf = useLoader(GLTFLoader, '/models/venus/scene.gltf');
  const venus = gltf.scene;
  // Adjust position, rotation, and scale
  venus.rotation.set(0, 0, 0); // Set the rotation
  venus.scale.set(15,15, 15);
  venus.position.set(500, -10, -100); // Set the position

  useFrame((state, delta) => {
    // Rotate the model around the Y-axis
    venus.rotation.y += 0.002 ;
    venus.position.x -= 0.002 ;
  });

  return <primitive ref={modelRef} object={gltf.scene} />;
};
export default Venus


