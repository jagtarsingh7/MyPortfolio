import { useRef, useEffect,  } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";


export default function Sun() {
  const group = useRef();
  const bgroup = useRef<any>();

  const { scene, animations } = useGLTF("/models/thesun/scene.gltf", true);
  const { actions ,mixer } = useAnimations(animations, group);

  scene.scale.set(4, 4, 4);
  scene.position.set(0, 0, -400); // Set the position

  useEffect(() => {
    console.log(actions)
    if (actions.Rot ) {
      actions.Rot.play();
      mixer.timeScale = 0.04;
    }
  }, []);

  return (
    <group ref={bgroup}>
      <primitive ref={group} object={scene} dispose={null} />
      <pointLight position={[5, 30, 120]} color="green" intensity={100} />
      </group>
  )
}

