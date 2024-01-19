import  { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


export default function SpaceShip() {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/spaceship/scene.gltf", true);
  const { actions } = useAnimations(animations, group);
  scene.scale.set(0.5, 0.5,0.5);
  scene.position.set(165, -76, 420); // Set the position

  useEffect(() => {
    if (actions['Armature.002|Armature.002Action'] ) {
      actions['Armature.002|Armature.002Action'].play();

    }
  }, []);
  
  let move=1
  useFrame(()=>{
    if(move <2000 && move>0){
    if(move<900 && move>0 )
    {
      if(move<500 && move>0)
      {
        if (actions['Armature.002|Armature.002Action'] ) {
          actions['Armature.002|Armature.002Action'].stop();
        }
        scene.rotation.y += 0.0032;
        scene.rotation.x += 0.0005;
        scene.position.z-= 0.02
        scene.position.y+= 0.002
        scene.position.x-= 0.002
       
      }
      else{
        if (actions['Armature.002|Armature.002Action'] ) {
          actions['Armature.002|Armature.002Action'].play();
         
        }
        scene.position.z-=0.01; // Set the position
      }
     
    }
    else{
      if (actions['Armature.002|Armature.002Action'] ) {
        actions['Armature.002|Armature.002Action'].play();
       
      }
      scene.position.y+= 0.01
      scene.position.z-=0.5; // Set the position
    }
    move++
  }
  else
  {
    move=0
    scene.position.y+= 0.2
    scene.position.z-=0.05; // Set the position
  }
  })

  return <primitive  ref={group} object={scene} dispose={null} />;
}
