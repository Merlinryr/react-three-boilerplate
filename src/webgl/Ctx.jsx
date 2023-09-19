import React, { useRef } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, GradientTexture } from '@react-three/drei'


const Ctx = () => {

    const logo = useRef()

    return (
        <Canvas 
            className='ctx'
            camera={{ position: [0, 0, 5], near: 0.1, far: 100 }}
            gl={{ antialias: true }}
            dpr={window.devicePixelRatio}
        >

            <OrbitControls />
            <ambientLight />

            <pointLight intensity={0.3} position={[ 5, 5, 10 ]} />

            <mesh>
                <planeGeometry args={[5, 5, 10, 10]} />
                <meshBasicMaterial>
                    <GradientTexture
                    stops={[0, 1]} // As many stops as you want
                    colors={['purple', 'hotpink']} // Colors need to match the number of stops
                    size={1024} // Size is optional, default = 1024
                    />
                </meshBasicMaterial>
            </mesh>


        </Canvas>
    )
}

export default Ctx