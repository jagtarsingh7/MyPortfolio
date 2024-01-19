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
        <Suspense fallback={<ThreeDText pos={[185, -70, 400]} content={'Loading..'} link={''} rotate={-0.9} small={false} newpos={undefined} />} >
            <group>
                {/* <Space/> */}
                <Cockpit camera={camera} />
                <Stars radius={300} factor={5} depth={100} count={10000} speed={2} />
                <Starss />
                <Cloud scale={100} position={[-900, 8, -500]} color={new Color(0.1, 0.1, 0.2)} />
                <Sun />
                <Mercury />
                <Earth />
                <Moon />
                <SpaceShip />
                <ThreeDText pos={[190, -60, 400]} content={"Welcome to My Tech Space"} link={""} rotate={-0.94} small={false} newpos={undefined} />
                <ThreeDText pos={[190, -70, 400]} content={"I am Jagtar"} link={""} rotate={-0.94} small={false} newpos={undefined} />
                <ThreeDText pos={[190, -75, 400]} content={"A passionate Full Stack Web Developer"} link={""} rotate={-0.94} small={true} newpos={undefined} />
                <ThreeDText newpos={[195, -80, 390]} content={"LinkedIn"} link={"www.linkedin.com/in/jagtar-singh-matharu/"} rotate={-0.94} small={true} pos={[185, -80, 390]}/>
                <ThreeDText newpos={[195, -79.3, 400]} content={"Github"} link={"github.com/jagtarsingh7"} rotate={-0.94} small={true}  pos={[195, -80, 405]} />

                <ThreeDText pos={[10, 35, 230]} content={"Project 1: Angular Amazon Clone "} link={"main.dfhl2rvhv6vg9.amplifyapp.com"} rotate={-0.05} small={false} newpos={undefined} />
                <ThreeDText pos={[10, -20, 230]} content={"Github"} link={"github.com/jagtarsingh7/Amazon-Clone"} rotate={-0.05} small={false} newpos={undefined} />
                <PlaneWithTexture pos={[10, 7, 230]} image={"amazonClone.png"} rotate={-0.05} link={"main.dfhl2rvhv6vg9.amplifyapp.com"} size={[70, 40]} />

                <ThreeDText pos={[10, 30, 80]} content={"Project 3: Nextjs Freelance"} link={"virdicon.com"} rotate={-0.05} small={false} newpos={undefined} />
                <ThreeDText pos={[10, -20, 80]} content={"Github"} link={"https://github.com/jagtarsingh7"} rotate={-0.05} small={false} newpos={undefined} />
                <PlaneWithTexture pos={[10, 7, 80]} image={"virdicon.png"} rotate={-0.05} link={"virdicon.com"} size={[70, 40]} />

                <ThreeDText pos={[-250, 130, 230]} content={"Project 2: React Social Media App"} link={"sparkup-react.vercel.app"} rotate={1.35} small={false} newpos={undefined} />
                <ThreeDText pos={[-250, 70, 230]} content={"Github"} link={"github.com/jagtarsingh7/SparkUp-React"} rotate={1.35} small={false} newpos={undefined} />
                <PlaneWithTexture pos={[-250, 99, 230]} image={"reactSparkup.png"} rotate={1.35} link={"sparkup-react.vercel.app"} size={[70, 40]} />


                <ThreeDText pos={[280, -59, 70]} content={"Project 4 : Angular Social Media App"} link={"sparkup-angular.vercel.app"} rotate={-1.35} small={false} newpos={undefined} />
                <ThreeDText pos={[245, -129, 80]} content={"Github"} link={"https://github.com/jagtarsingh7/SparkUp-Angular"} rotate={-1.35} small={false} newpos={undefined} />
                <PlaneWithTexture pos={[245, -99, 80]} image={"angularSparkup.png"} rotate={-1.35} link={"sparkup-angular.vercel.app"} size={[70, 40]} />

                <ThreeDText pos={[0, 25, -250]} content={"Click to view Resume"} link={"firebasestorage.googleapis.com/v0/b/portfolio-83db1.appspot.com/o/jagtar_resume.pdf?alt=media&token=e207b092-f25e-4a9a-b5d0-48eb4ee11ed8"} rotate={-0.01} small={false} newpos={undefined} />
                <PlaneWithTexture pos={[0, -5, -250]} image={"resume.png"} rotate={-0.02} link={"firebasestorage.googleapis.com/v0/b/portfolio-83db1.appspot.com/o/jagtar_resume.pdf?alt=media&token=e207b092-f25e-4a9a-b5d0-48eb4ee11ed8"} size={[40, 50]} />

                <ThreeDText pos={[0, 0, -350]} content={"Thank you for visiting"} link={"firebasestorage.googleapis.com/v0/b/portfolio-83db1.appspot.com/o/jagtar_resume.pdf?alt=media&token=e207b092-f25e-4a9a-b5d0-48eb4ee11ed8"} rotate={-0.01} small={false} newpos={undefined} />
                <ThreeDText pos={[0, 0, -400]} content={"Why did the job seeker decline a position on the sun?"} link={""} rotate={0} small={true} newpos={undefined} />
                <ThreeDText pos={[0, -10, -400]} content={"They figured it was too far, and the commute was a real 'burnout'!"} link={""} rotate={0} small={true} newpos={undefined} />
            </group>
        </Suspense>
    )
}

export default MyCanvas