import { useEffect, useRef } from "react"
import { Camera, Canvas } from "@react-three/fiber"
import MyCanvas from "./mycanvas";


function Home() {
  const cameraRef = useRef<Camera>(); // Specify the type for cameraRef
  // Set camera position when the canvas is created
  const onCreated = ({ camera }: { camera: Camera }) => {
    if (camera) {
      camera.position.set(4.0, -2.4, 470); // Z-axis
      camera.rotation.y = 0;
      cameraRef.current = camera;
    }
  };

  function handleScroll() {
  
    if (cameraRef.current) 
    {
      const cursorValue=(-window.scrollY * 0.5)+470
      console.log("value",cursorValue )
      console.log("x value",cameraRef.current.position.x )
      console.log("y value",cameraRef.current.position.y )
      cameraRef.current.position.z = cursorValue ;
      
      if(cursorValue>0)
      {
        cameraRef.current.position.x = calculateX(cursorValue);
        cameraRef.current.position.y = -calculateX(cursorValue)*0.5;
        cameraRef.current.rotation.y = -calculateX(cursorValue)*0.007;
      }
    }
  };

  function calculateX(z:any): number   {
    return Math.sin(z / 50) * 200;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '400vh' }} >
      <div className="fixed top-0 h-screen w-screen">
        <Canvas
          onCreated={onCreated}>
          <color attach="background" args={['black']} />
          <ambientLight />
          <MyCanvas camera={cameraRef} />
        </Canvas>
      </div>

    </div>
  )
}
export default Home