import { useRef } from "react"
import { Camera, Canvas, useThree } from "@react-three/fiber"
import Earth from "../components/earth"
import SpaceShip from "../components/space-ship";
import { Stars } from "@react-three/drei";
import Moon from "../components/moon";
import ThreeDText from "../components/text";

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
        <div className="h-screen w-screen  ">       
        <Canvas onCreated={onCreated} className="border-8 border-red-950 h-full w-full">
            <color attach="background" args={['black']} />
            <ambientLight />
            <Moon />
            <Stars/>
            <ThreeDText pos={[1,2,2]} content={"Heeloooo"}/>
            <ThreeDText pos={[-20,3,-10]} content={"Heyyyyyy"}/>
        </Canvas>
        </div>
    )
}

export default Home