import { Vector3 } from "@react-three/fiber";

export interface IText{
    pos:Vector3 | undefined,
    content:string
    link:string
    rotate:number
    small:boolean
    newpos: Vector3 | undefined
}