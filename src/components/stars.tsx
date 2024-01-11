
import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Color, MathUtils, Mesh } from 'three';
const Star = () => {
    const starRef = useRef<Mesh>(null);
    const [x, y, z] = Array(3).fill(3).map(() => MathUtils.randFloatSpread(100)); // random number from -100 to +100
    useFrame(() => {
        if (starRef.current) {
            starRef.current.position.set(x * y, y, z * 2);
        }
    });
    return (
        <mesh ref={starRef}>
            <sphereGeometry args={[0.25, 24, 24]} />
            <meshStandardMaterial color={new Color(0xffffff)} />
        </mesh>
    );
};

function Stars() {
    const numberOfStars = 150;
    return (
        <group>
            {Array.from({ length: numberOfStars }, (_, index) => (
                <Star key={index} />
            ))}
        </group>
    )
}
export default Stars


