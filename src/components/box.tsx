
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"

function Box() {
    useFrame(()=>{
        if(earthRef.current)
        {
            earthRef.current.rotation.x+=0.1
            earthRef.current.rotation.y=20
        }
    })
    const earthRef=useRef<Mesh>(null)
    return (
        <mesh ref={earthRef} >
            <boxGeometry args={[1,1,1]} />
            <meshBasicMaterial />
        </mesh>
    )
}
export default Box