import { Camera } from "@react-three/fiber";

export interface IMyCanvas{
    camera: React.MutableRefObject <Camera | undefined>
}