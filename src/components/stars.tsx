import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color, MathUtils, Mesh } from 'three';

const Star = () => {
  const starRef = useRef<Mesh>(null);

  const [x, y, z] = Array(3).fill(3).map(() => MathUtils.randFloatSpread(100));

  // Generate random RGB components for the color
  const randomColor = new Color(
    Math.random(),  // Red component
    Math.random(),  // Green component
    Math.random()   // Blue component
  );

  useFrame(() => {
    if (starRef.current) {
      starRef.current.position.set(x*2 , y*y, z*z );
    }
  });

  return (
    <mesh ref={starRef}>
      <sphereGeometry args={[0.25, 24, 24]} />
      <meshStandardMaterial emissive={[0.7, 0.5, 0.2]} color={randomColor} />
    </mesh>
  );
};

function Starss() {
  const numberOfStars = 200;
  return (
    <group>
      {Array.from({ length: numberOfStars }, (_, index) => (
        <Star key={index} />
      ))}
    </group>
  );
}

export default Starss;
