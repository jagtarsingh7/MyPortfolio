import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Mesh, TextureLoader } from 'three';

function Moon () {
 
    const moonRef = useRef<Mesh>(null);
    const moonTexture = useLoader(TextureLoader, '/assets/moon.jpg');
    const moonNormalTexture = useLoader(TextureLoader, '/assets/normal.jpg');
    useEffect(()=>{
      if(moonRef.current){
        moonRef.current.position.set(250, -60, 400);
      }
    })
   // Set the position
    // gltf.scene.position.set(0, 0, 0);
   
    useFrame((state, delta) => {
      if(moonRef.current){
      moonRef.current.rotation.y -= 0.0005 ;
      moonRef.current.rotation.x += 0.0005;
      }
    });
    return (
      <mesh ref={moonRef}>
        <sphereGeometry args={[42, 32, 32]} />
        <meshStandardMaterial map={moonTexture} normalMap={moonNormalTexture} />
      </mesh>
    );
  };
  
  export default Moon;