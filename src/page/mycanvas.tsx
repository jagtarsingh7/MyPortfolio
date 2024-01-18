import Earth from "../components/earth"
import { Cloud, Stars } from "@react-three/drei";
import Moon from "../components/moon";
import Mercury from "../components/mercury";
import Venus from "../components/venus";
import Sun from "../components/sun";
import SpaceShip from "../components/spaceship";
import ThreeDText from "../components/text";
import { IMyCanvas } from "../interface/imycanvas";
import Starss from "../components/stars";
import { Color } from "three";
import PlaneWithTexture from "../components/plane";

function MyCanvas(props:IMyCanvas) {

    const {camera}=props

    return (
        <group >
            {/* <Space/> */}
            <Stars radius={300} factor={5} depth={100} count={10000} speed={2} />
            <Starss/>
            <Cloud scale={100} position={[-900,8,-500]} color={ new Color(0.1,0.1,0.2)} />
            <Sun  />
            <Mercury />
            <Venus />
            <Earth/>
            <Moon />
            <SpaceShip/>
            <ThreeDText pos={[0, 40, 400]} content={"Welcome to My Space"} link={""} rotate={-0.035} />

            <ThreeDText pos={[200, -30, 400]} content={"Project 1: Angular Amazon Clone "} link={"main.dfhl2rvhv6vg9.amplifyapp.com"} rotate={43} />
            <ThreeDText pos={[200, -90, 400]} content={"Github"} link={"github.com/jagtarsingh7/Amazon-Clone"} rotate={43} />
            <PlaneWithTexture pos={[200, -60, 400]} image={"amazonClone.png"} rotate={43} link={"main.dfhl2rvhv6vg9.amplifyapp.com"}/>

            <ThreeDText pos={[-132, 74, 260]} content={"Project 2: Nextjs Freelance"} link={""} rotate={0.7} />
            <ThreeDText pos={[-132, 35, 260]} content={"Github"} link={""} rotate={0.7} />
            <PlaneWithTexture pos={[-142, 58, 250]} image={"virdicon.png"} rotate={0.7} link={""}/>

            <ThreeDText  pos={[-250, 130, 230]} content={"Project 3: Social Media React App"} link={"sparkup-react.vercel.app"} rotate={1.35} />
            <ThreeDText  pos={[-250, 70, 230]} content={"Github"} link={"github.com/jagtarsingh7/SparkUp-React"} rotate={1.35} />
            <PlaneWithTexture pos={[-250, 99, 230]} image={"reactSparkup.png"} rotate={1.35} link={"sparkup-react.vercel.app"}/>


            <ThreeDText  pos={[280, -59, 70]} content={"Project 4 : Social Media Angular App"} link={"sparkup-angular.vercel.app"} rotate={-1.35} />
            <ThreeDText  pos={[245, -129, 80]} content={"Github"} link={"https://github.com/jagtarsingh7/SparkUp-Angular"} rotate={-1.35}/>
            <PlaneWithTexture pos={[245, -99, 80]} image={"angularSparkup.png"} rotate={-1.35} link={"sparkup-angular.vercel.app"}/>
        </group>
    )
}

export default MyCanvas