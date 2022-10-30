
import { useGLTF,Clone } from '@react-three/drei'




export const Model = () => {

    const model = useGLTF('./hamburger.glb')

    return <>
    <Clone object={model.scene} scale={0.35} position-x={-4} />
    <Clone object={model.scene} scale={0.35} position-x={0}/>
    <Clone object={model.scene} scale={0.35} position-x={4}/>
    </> 


}

useGLTF.preload('./hamburger-draco.glb')