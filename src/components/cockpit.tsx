
import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { IMyCanvas } from '../interface/imycanvas';

function Cockpit(props: IMyCanvas) {
    const {camera}=props
    const modelRef = useRef();
    // Load the GLTF model using the GLTFLoader
    const gltf = useLoader(GLTFLoader, '/models/cockpit/scene.gltf');
    const cockpit = gltf.scene;
    // Adjust position, rotation, and scale
    cockpit.rotation.set(-1.5, 4.725, 0); // Set the rotation
    cockpit.scale.set(10, 10, 12);
    cockpit.position.set(4, -19, 460);

    useFrame(() => {
        if(camera.current)
        { 
            cockpit.position.z=camera.current.position.z-10
            cockpit.position.x=camera.current.position.x
            cockpit.position.y=camera.current.position.y-20
            cockpit.rotation.y=-camera.current.rotation.y-20.44 
        }
    })
    return (

        <primitive ref={modelRef} object={gltf.scene} />
    )
};

export default Cockpit


