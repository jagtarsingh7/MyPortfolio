import React from 'react';
import { TextureLoader } from 'three';
import { IPlane } from '../interface/iplane';

function PlaneWithTexture (props:IPlane){
  // Load the texture
  const {pos,image,rotate, link}=props
  const texture = new TextureLoader().load(`assets/${image}`);

  return (
    <mesh  position={pos} rotation={[0,rotate,0]} onClick={()=>{window.location.href = `https://${link}`}}>
      {/* Create a plane geometry */}
      <planeGeometry args={[70, 40]} />
      {/* Apply a material with the loaded texture */}
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};
export default PlaneWithTexture