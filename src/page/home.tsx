import { useEffect, useRef, useState } from "react"
import { Camera, Canvas } from "@react-three/fiber"
import MyCanvas from "./mycanvas";

function Home() {
  const[load,setLoad]=useState(false)
  const cameraRef = useRef<Camera>(); // Specify the type for cameraRef
  // Set camera position when the canvas is created
  const onCreated = ({ camera }: { camera: Camera }) => {
    if (camera) {
      camera.position.set(139, -70, 433); // Z-axis
      camera.rotation.y = -0.97;
      cameraRef.current = camera;
    }
  };

  function handleScroll() {
    if (cameraRef.current) 
    {
      const cursorValue=(-window.scrollY * 0.5)+433
      console.log("value",cursorValue )
     
      cameraRef.current.position.z = cursorValue ;
      if(cursorValue>0)
      {
        cameraRef.current.position.x = calculateX(cursorValue);
        cameraRef.current.position.y = -calculateX(cursorValue)*0.5;
        cameraRef.current.rotation.y = -calculateX(cursorValue)*0.007;
        console.log("value pos x",cameraRef.current.position.x )
        console.log("value pos y",cameraRef.current.position.y )
        console.log("value rot y",cameraRef.current.rotation.y )
      }
    }
  };

  function calculateX(z:any): number   {
    return Math.sin(z / 50) * 200;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
      setLoad(true)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    load?(
    <div style={{ height: '400vh' }} >
      <div className="fixed top-0 h-screen w-screen" >
        <Canvas
          onCreated={onCreated}>
          <color attach="background" args={[1.5/255, 1/255, 1.5/ 255]}/>
          <ambientLight />
          <MyCanvas camera={cameraRef} />
        </Canvas>
      </div>
    </div>
    ):
    (<div className="flex text-black justify-center font-thin items-center text-2xl h-screen w-screen animate-bounce duration-1000"> Loading...</div>)
  )
}
export default Home