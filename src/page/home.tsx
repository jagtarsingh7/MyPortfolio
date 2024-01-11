import { useRef } from "react"
import { Camera, Canvas, useThree } from "@react-three/fiber"
import Earth from "../components/earth"

function Home() {
    const cameraRef = useRef<Camera>(); // Specify the type for cameraRef
  // Set camera position when the canvas is created
  const onCreated = ({ camera }: { camera: Camera }) => {
    if (camera) {
      camera.position.set(0, 0, 30); // Z-axis
      camera.position.setX(-3); // X-axis
      cameraRef.current = camera;
    }
  };
    return (
        <div className="h-screen w-screen">       
        <Canvas onCreated={onCreated} className="border-8 border-red-200">
            <color attach="background" args={['black']} />
            <ambientLight />
            <Earth />
        </Canvas>
        </div>
      
    )
}

export default Home