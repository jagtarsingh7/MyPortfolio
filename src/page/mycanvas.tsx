import Earth from "../components/earth"
import { Cloud, Stars } from "@react-three/drei";
import Moon from "../components/moon";
import Mercury from "../components/mercury";
import Sun from "../components/sun";
import SpaceShip from "../components/spaceship";
import ThreeDText from "../components/text";
import { IMyCanvas } from "../interface/imycanvas";
import Starss from "../components/stars";
import { Color } from "three";
import PlaneWithTexture from "../components/plane";
import { Suspense } from "react";
import Cockpit from "../components/cockpit";

function MyCanvas(props: IMyCanvas) {

    const {camera}=props
    return (
        <Suspense fallback={<ThreeDText pos={[7, 0, 400]} content={'Loading..'} link={''} rotate={0} />} >
            <group >
                {/* <Space/> */}
                <Cockpit camera={camera} />
                <Stars radius={300} factor={10} depth={100} count={10000} speed={2} />
                <Starss />
                <Cloud scale={100} position={[-900, 8, -500]} color={new Color(0.1, 0.1, 0.2)} />
                <Sun />
                <Mercury />
                <Earth />
                <Moon />
                <SpaceShip />
                <ThreeDText pos={[10, 40, 400]} content={"Welcome to Jagtar's Space"} link={""} rotate={-0.03} />

                <ThreeDText pos={[200, -30, 400]} content={"ST 1: Angular Amazon Clone "} link={"main.dfhl2rvhv6vg9.amplifyapp.com"} rotate={43} />
                <ThreeDText pos={[200, -90, 400]} content={"Github"} link={"github.com/jagtarsingh7/Amazon-Clone"} rotate={43} />
                <PlaneWithTexture pos={[200, -60, 400]} image={"amazonClone.png"} rotate={43} link={"main.dfhl2rvhv6vg9.amplifyapp.com"} size={[70, 40]} />

                <ThreeDText pos={[-132, 74, 260]} content={"ST 2: Nextjs Freelance"} link={"virdicon.com"} rotate={0.7} />
                <ThreeDText pos={[-132, 35, 260]} content={"Github"} link={"https://github.com/jagtarsingh7"} rotate={0.7} />
                <PlaneWithTexture pos={[-142, 58, 250]} image={"virdicon.png"} rotate={0.7} link={"virdicon.com"} size={[70, 40]} />

                <ThreeDText pos={[-250, 130, 230]} content={"ST 3: Social Media React App"} link={"sparkup-react.vercel.app"} rotate={1.35} />
                <ThreeDText pos={[-250, 70, 230]} content={"Github"} link={"github.com/jagtarsingh7/SparkUp-React"} rotate={1.35} />
                <PlaneWithTexture pos={[-250, 99, 230]} image={"reactSparkup.png"} rotate={1.35} link={"sparkup-react.vercel.app"} size={[70, 40]} />


                <ThreeDText pos={[280, -59, 70]} content={"ST 4 : Social Media Angular App"} link={"sparkup-angular.vercel.app"} rotate={-1.35} />
                <ThreeDText pos={[245, -129, 80]} content={"Github"} link={"https://github.com/jagtarsingh7/SparkUp-Angular"} rotate={-1.35} />
                <PlaneWithTexture pos={[245, -99, 80]} image={"angularSparkup.png"} rotate={-1.35} link={"sparkup-angular.vercel.app"} size={[70, 40]} />

                <ThreeDText pos={[0, 25, -250]} content={"Click to view Resume"} link={"firebasestorage.googleapis.com/v0/b/portfolio-83db1.appspot.com/o/jagtar_resume.pdf?alt=media&token=e207b092-f25e-4a9a-b5d0-48eb4ee11ed8"} rotate={-0.01} />
                <PlaneWithTexture pos={[0, -5, -250]} image={"resume.png"} rotate={-0.02} link={"firebasestorage.googleapis.com/v0/b/portfolio-83db1.appspot.com/o/jagtar_resume.pdf?alt=media&token=e207b092-f25e-4a9a-b5d0-48eb4ee11ed8"} size={[40, 50]} />

                <ThreeDText pos={[0, 0, -350]} content={"Thank you for visiting"} link={"firebasestorage.googleapis.com/v0/b/portfolio-83db1.appspot.com/o/jagtar_resume.pdf?alt=media&token=e207b092-f25e-4a9a-b5d0-48eb4ee11ed8"} rotate={-0.01} />

            </group>
        </Suspense>
    )
}

export default MyCanvas