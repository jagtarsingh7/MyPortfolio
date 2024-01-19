import { Vector3 } from "@react-three/fiber";

export interface IPlane{
    pos:Vector3 | undefined,
    image:string
    rotate:number,
    link:string
    size:[width?: number | undefined, height?: number | undefined, widthSegments?: number | undefined, heightSegments?: number | undefined] | undefined,
    
}