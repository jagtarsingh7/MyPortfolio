import { useEffect, useState } from 'react';
import { Text } from '@react-three/drei';
import { IText } from '../interface/itext';

function ThreeDText(props: IText) {
    const {rotate, link, pos, content } = props
    const [screenSize, setScreenSize] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 767) {
                setScreenSize(2); // Mobile screen
            } else if (window.innerWidth <= 1024) {
                setScreenSize(3); // iPad or tablet
            } else {
                setScreenSize(5); // Larger screen (lg screen)
            }
        };

        // Initial setup
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures that this effect runs once on mount

    return (
        <Text 
            onPointerUp={() => { window.location.href = `https://${link}` }}
            position={pos}
            fontSize={screenSize}
            font="bold"
            color="white"
            anchorX="center"
            anchorY="middle"
            rotation={[0,rotate,0]}
        >
            {content}
        </Text>
    )
};

export default ThreeDText
