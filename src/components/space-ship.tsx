
import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function SpaceShip () {
  const modelRef = useRef();
  // Load the GLTF model using the GLTFLoader
  const gltf = useLoader(GLTFLoader, '/models/spaceship_-_cb1/scene.gltf');
  const spaceShipModel = gltf.scene;
  // Adjust position, rotation, and scale
  spaceShipModel.position.set(-10, 0, 40); // Set the position
  spaceShipModel.rotation.set(0, 1, 0); // Set the rotation
  spaceShipModel.scale.set(0.8, 0.8, 0.8);
  gltf.scene.position.set(0, 0, 0);
  
  useFrame((state, delta) => {
    // Rotate the model around the Y-axis
    spaceShipModel.rotation.y += 0.01 * 2;
  });

  return <primitive ref={modelRef} object={gltf.scene} />;
};
export default SpaceShip


