import { useRef } from 'react';
import { Text } from '@react-three/drei';
import { IText } from '../interface/itext';

function ThreeDText (props:IText) {
    const {pos,content}=props
    return (
        <Text
            position={pos}
            fontSize={3}
            color="white"
            anchorX="center"
            anchorY="middle"
        >
           {content}
        </Text>
    )
};

export default ThreeDText
