import { OrbitControls, useHelper } from '@react-three/drei/core'
import { GasStation } from './GasStation'
import { useRef, useState, useEffect  } from 'react'
import { Vector3, Quaternion, Euler, MathUtils } from 'three';
import { PointLight } from 'three'
import { Foliage } from './Foliage'
import { Chargers } from "./Chargers"
import { Letters } from './Letters'
import { Tvs } from './Tvs'
import { Floor } from './Floor'
import { Stats } from '@react-three/drei';
import { Tvs2 } from './Tvs2'
import { useFrame, useThree } from '@react-three/fiber';
import { Physics, useBox,usePlane } from '@react-three/cannon';
import Vehicle from './Vehicle';
import React, { Suspense } from 'react';
import { SuperCone } from './SuperCone';
import { Debug } from '@react-three/cannon';
import { Cone } from './Cone';
import BoxGroup from './BoxGroup';
import { SnowRoofTop } from './SnowRoofTop';
import { BaseDetails } from './BaseDetails';
import { CabosTv } from './CabosTv';










export default function Experience(){

  


  const degreesToRadians = (degrees) => MathUtils.degToRad(degrees);


  const boxPositions = [
    [8.35, 1, 20],
    [-8.35, 1, 20],
    [8.35, 1, -20],
    [-8.35, 1, -20],
    [15.5, 0, -21],
    [-15.5, 0, -21],
    [15.5, 0, 21],
    [-15.5, 0, 21],
    [26.5, 3, -18.3],
  ];

  const boxSizes = [
    [2.2, 8, 17],
    [2.2, 8, 17],
    [2.2, 8, 17],
    [2.2, 8, 17],
    [4, 5, 4],
    [4, 5, 4],
    [4, 5, 4],
    [4, 5, 4],
    [1, 5, 1],
  ];

  const boxRotations = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  
  


  const orbitControlsRef = useRef();

    const directionalLight = useRef();
   // useHelper(directionalLight, THREE.DirectionalLightHelper,5);


   const [orbitControlsEnabled, setOrbitControlsEnabled] = useState(true);

   const [animateCamera, setAnimateCamera] = useState(false);
   const [cameraIndo_about, setCameraIndo_about] = useState(true);

   const { camera } = useThree();
  
 
   const AnimatedCamera = ({ targetPosition, targetRotation, onAnimationComplete }) => {
    const { camera } = useThree();
    const animationComplete = useRef(false);
  
    useEffect(() => {
      animationComplete.current = false;
  
      const animate = () => {
        if (!animationComplete.current) {
          camera.position.lerp(targetPosition, 0.1);
          camera.quaternion.slerp(targetRotation, 0.1);
  
          const distance = camera.position.distanceTo(targetPosition);
          if (distance < 0.2) {
            animationComplete.current = true;
            
            onAnimationComplete();
          }
  
          requestAnimationFrame(animate);
        }
      };
  
      animate();
  
      return () => {
        // Cleanup if needed
      };
    }, [camera, targetPosition, targetRotation, onAnimationComplete]);
  
    useFrame(() => {
      // Update the camera manually
      camera.updateMatrixWorld();
    });
  
    return null;
  };
 
   const handleMeshClick = () => {
     if (!animateCamera && cameraIndo_about) {

        setOrbitControlsEnabled(false);
       setAnimateCamera(true);
    
     }
   };
 

    
   const backTosScene = () => {
    if (!animateCamera && !cameraIndo_about) {

       
      
      setAnimateCamera(true);
   
    }
  };

    return <>
    
  {/* Animated camera component */}
  {animateCamera && cameraIndo_about && (



        <AnimatedCamera

        
          targetPosition={new Vector3(0, 10,2.3)}
          targetRotation={new Quaternion().setFromEuler(
            new Euler(
              degreesToRadians(15),  // Rotação em torno do eixo X
              degreesToRadians(0),   // Rotação em torno do eixo Y
              degreesToRadians(0)   // Rotação em torno do eixo Z
            ))}



          onAnimationComplete={() => 
            {setAnimateCamera(false)
              setCameraIndo_about(!cameraIndo_about)
            setOrbitControlsEnabled(false)
    
          }}
            
        />
        
      )}

{animateCamera && !cameraIndo_about && (



<AnimatedCamera


  targetPosition={new Vector3(40, 2,0)}
  targetRotation={new Quaternion().setFromEuler(
    new Euler(
      degreesToRadians(0),  // Rotação em torno do eixo X
      degreesToRadians(90),   // Rotação em torno do eixo Y
      degreesToRadians(0)   // Rotação em torno do eixo Z
    ))}



  onAnimationComplete={() => 
    {setAnimateCamera(false)
      setCameraIndo_about(!cameraIndo_about)


setOrbitControlsEnabled(true);

  
  }}



    
    
/>

)}



<Physics gravity={[0, -150, 0]} broadphase="SAP" contactEquationRelaxation={8} friction={1e-3} allowSleep>
    
        <Debug>
       
        </Debug>

        <Suspense fallback={null}>
 



            <Vehicle position={[0, 2, 0]}  />



          </Suspense>


          <SuperCone position={[15, 3, 10]}  />
          <SuperCone position={[-15, 3, 10]}  />
          <SuperCone position={[15, 3, -10]}  />
          <SuperCone position={[-15, 3, -10]}  />

          <Cone position={[-18, 3, -10]}/>
          <Cone position={[-20, 3, -11]}/>
          

          <Cone position={[18, 3, 10]}/>
          <Cone position={[20, 3, 11]}/>

          <Cone position={[-18, 3, 10]}/>
          <Cone position={[-20, 3, 11]}/>


          <Cone position={[18, 3, -10]}/>
          <Cone position={[20, 3, -11]}/>


          <Cone position={[-8.3, 3, -31]}/>
          <Cone position={[8.3, 3, -31]}/>
          <Cone position={[8.3, 3, 31]}/>
          <Cone position={[-8.3, 3, 31]}/>

          <BoxGroup positions={boxPositions} sizes={boxSizes} rotations={boxRotations}/>


          <Floor/>
         


        







      </Physics>






<Stats position="top-right" />
    

        <directionalLight ref={directionalLight}
        castShadow 
        position={ [ -35,35, 0 ] }
         intensity={ 1.4 } 
         shadow-normalBias={0.1}
         shadow-mapSize={[1024*2,1024*2]}
         shadow-camera-top={50}
         shadow-camera-right={50}
         shadow-camera-bottom={-50}
         shadow-camera-left={-35}
         //shadow-camera-near={shadorCameranear}
         //shadow-camera-far={shadorCamerafar}
         />

         <ambientLight intensity={0.2}></ambientLight>


<pointLight castShadow={false} distance={30} power={10} color="#ff00aa" intensity={1.5} position={[0, 15, 5]} />
<pointLight castShadow={false} distance={30} power={30} color="#00f7ff" intensity={1.5} position={[0, 15, 15]} />

<pointLight castShadow={false} distance={25} power={10} color="#ff00aa" intensity={1.5} position={[0, 15, -5]} />
<pointLight castShadow={false} distance={30} power={30} color="#00f7ff" intensity={1.5} position={[0, 15, -15]} />



<fog attach="fog" args={[0x000000, 0,70, 0.1]} />




      <OrbitControls 
      ref={orbitControlsRef}
    enablePan={false}
    rotateSpeed = {1.2}
    zoomSpeed= {0.8}
    target={[0,1,0]}
    minDistance = {22}
    maxDistance = {40}
    minAzimuthAngle = {0}
    maxAzimuthAngle ={ Math.PI * 1.999}
    minPolarAngle = {Math.PI *0.2}
    maxPolarAngle = {Math.PI * 0.49}
    enableRotate={true}
    enableZoom={true}
    enabled={orbitControlsEnabled}

    makeDefault />


<GasStation/>

<CabosTv/>


<Chargers/>


<SnowRoofTop/>




<Foliage/>


<BaseDetails/>




<Letters/>
<Letters rotation={[0, 9.422, 0]}/>

<Tvs onMeshClick={handleMeshClick} position={[0, 0.3, 0]}/>
<Tvs2 onMeshClick={backTosScene}/>






    </>

    
}
