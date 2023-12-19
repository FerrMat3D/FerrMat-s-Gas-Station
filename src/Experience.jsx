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
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { SkyBox } from './SkyBox';
import Rain from './Rain';
import { LotusEspirit } from './LotusEspirit';
import { Wheel } from './Wheel';
import { Physics, useBox,usePlane } from '@react-three/cannon';
import * as THREE from 'three';
import Vehicle from './Vehicle';
import React, { Suspense } from 'react';
import { SuperCone } from './SuperCone';
import { Debug } from '@react-three/cannon';
import { Cone } from './Cone';
import BoxGroup from './BoxGroup';
import { Rocks } from './Rocks';
import { CajadoNatal } from './CajadoNatal';
import { ArvoreNatal } from './ArvoreNatal';
import { CaixaPresente } from './CaixaPresente';
import { BonecoDeNeve } from './BonecoDeNeve';
import ArvoreNatalBrilhante from './ArvoreNatalBrilhante';
import { EstrelaDeNatal } from './EstrelaDeNatal';
import { PilarArvore } from './PilarArvore';
import { ArvoreLuz } from './ArvoreLuz';
import { BolaNatal } from './BolaNatal';
import { Cercadin } from './Cercadin';
import { MerryChristmas } from './MerryChristmas';
import { SnowRoofTop } from './SnowRoofTop';
import { BaseDetails } from './BaseDetails';
import { ThreeJsJourney } from './threejsjourney';
import { CabosTv } from './CabosTv';










export default function Experience(){

  


  const degreesToRadians = (degrees) => MathUtils.degToRad(degrees);


  const boxPositions = [
    [8.35, 1, 20],
    [-8.35, 1, 20],
    [8.35, 1, -20],
    [-8.35, 1, -20],
    [34+4, 1, -6],
    [34+4, 1, 6],
    [-34-4, 1, -6],
    [-34-4, 1, 6],
    [6, 1, -47.8-4],
    [-6, 1, -47.8-4],
    [17.8, 2.5, 16.5],
    [-18.3, 2.5, 20.2],
    [17.8, 2.5, -15.2],
    [26.3, 2.5, -18.3],
    [0, 0, -75],
    [0, 0, 65],
    [63, 0, -30],
    [63, 0, 23],
    [-60, 0, 23],
    [-54, 0, -23],
    [38, 0, -55],
    [38, 0, 48],
    [65, 0, 0],
    [-29, 0, -48],
    [-35, 0, 48],
    [-65, 0, 0],
    [-19.5, 0, -18],
  ];

  const boxSizes = [
    [2.2, 8, 17],
    [2.2, 8, 17],
    [2.2, 8, 17],
    [2.2, 8, 17],
    [32, 2, 0.3],
    [32, 2, 0.3],
    [32, 2, 0.3],
    [32, 2, 0.3],
    [0.3, 2, 32],
    [0.3, 2, 32],
    [1, 5, 1],
    [2, 5, 2],
    [1.5, 5, 1.5],
    [0.5, 5, 0.5],
    [256, 8, 0.3],
    [256, 8, 0.3],
    [50, 8, 0.3],
    [50, 8, 0.3],
    [50, 8, 0.3],
    [50, 8, 0.3],
    [0.3, 8, 50],
    [0.3, 8, 50],
    [0.3, 8, 60],
    [0.3, 8, 50],
    [0.3, 8, 50],
    [0.3, 8, 60],
    [6, 10, 7],
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
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0.5, 0],
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
         
          <CaixaPresente position={[25, 1, 15]} scale={1}/>

          <CaixaPresente position={[-13, 1, 20]} scale={1}/>
          <CaixaPresente position={[-20, 1, 25]} scale={1}/>
          
          <CaixaPresente position={[-25, 1, 14]} scale={1}/>

          <CaixaPresente position={[-25, 1, -10]} scale={1}/>
          <CaixaPresente position={[-23.5, 1, -16]} scale={1}/>

          <CaixaPresente position={[25, 1, -10]} scale={1}/>
          <CaixaPresente position={[20, 1, -18]} scale={1}/>

<BolaNatal scale={3} raio={3} usePhysics={true} position={[-15, 0.8, -26]}  rotation={[0.2, 0,0.3]} colorStart={[1,3,4]}/>
<BolaNatal scale={2} raio={2} usePhysics={true} position={[-15, 0.8, 26]}  rotation={[-0.4, 0,-0.2]} colorStart={[4,4,1]}/>
<BolaNatal scale={1}  raio={1} usePhysics={true}position={[-19, 0.8, 27]}  rotation={[0.8, 0,0]} colorStart={[0,8,0]}/>
<BolaNatal scale={2} raio={2}  usePhysics={true} position={[17,0.8, 25]}  rotation={[-0.1, 0,-0.3]} colorStart={[2,4,2]}/>

<BolaNatal scale={10} raio={3} usePhysics={false} position={[80, 0.8, 50]}  rotation={[0, 0,0.2]} colorStart={[10,1,1]}/>
<BolaNatal scale={5} raio={3} usePhysics={false} position={[80, 0.8, 30]}  rotation={[0, 0,0.2]} colorStart={[1,1,10]}/>

          <CajadoNatal position={[22, 1, -13]} scale={1} />

          <CajadoNatal position={[-23, 1, 20]} scale={1}   />

<ArvoreLuz usePhysics={true} position={[-25, 4, 10] } rotation={[0, 40,0] } colorStart={[5,5,5]}/>

<ArvoreLuz usePhysics={true} position={[-15, 4, -20] } rotation={[0, -40,0] } colorStart={[0,5,0]}/>

<ArvoreLuz usePhysics={true} position={[-23, 4, -23] } rotation={[0, -40,0] } colorStart={[8,1,1]}/>

<ArvoreLuz usePhysics={true} position={[-25, 4, 20] } rotation={[0, 40,0] } colorStart={[0,5,5]}/>


<ArvoreLuz usePhysics={true} position={[25, 4, 10] } rotation={[0, -40,0] } colorStart={[5,5,5]}/>

<ArvoreLuz usePhysics={true} position={[15, 4, -13] } rotation={[0, 40,0] } colorStart={[8,5,2]}/>

<ArvoreLuz usePhysics={true} position={[23, 4, -18] } rotation={[0, -10,0] } colorStart={[1,8,1]}/>

<ArvoreLuz usePhysics={true} position={[25, 4, 20] } rotation={[0, -40,0] } colorStart={[3,2,5]}/>

<ArvoreLuz usePhysics={false} scale={2} position={[60, 8.5 , 35]} rotation={[0, -0.5,0] } colorStart={[1,5,1]}/>

<ArvoreLuz usePhysics={false} scale={2} position={[60, 8.5 , -35]} rotation={[0, -0.1,0] } colorStart={[1,5,1]}/>
<ArvoreLuz usePhysics={false} scale={3} position={[40, 13 , -35]} rotation={[0, -0.1,0] } colorStart={[1,5,1]}/>
<ArvoreLuz usePhysics={false} scale={2} position={[80, 8.5 , -35]} rotation={[0, -0.1,0] } colorStart={[1,5,1]}/>

<ArvoreLuz usePhysics={false} scale={2} position={[-60, 8.3 , 35]} rotation={[0, 0.1,0] } colorStart={[1,5,1]}/>
<ArvoreLuz usePhysics={false} scale={3} position={[-40, 13 , 35]} rotation={[0, 0.1,0] } colorStart={[1,5,1]}/>
<ArvoreLuz  usePhysics={false} scale={2} position={[-80, 8.3 , 35]} rotation={[0, 0.1,0] } colorStart={[1,5,1]}/>




      </Physics>






<ArvoreNatal position={[18, 0.5, 6]} scale={1.5}/>
<ArvoreNatal position={[-18, 0.5, 6]} scale={2}/>

<ArvoreNatal position={[18, 0.5, -28]} scale={1.8}/>




<BonecoDeNeve position={[-18, 0.5, -35]} scale={0.8}/>






<Stats position="top-right" />
    

<ArvoreNatalBrilhante color="yellow" position={[-50, 60, -45]} scale={6}  velocidade={2.5}/>
<ArvoreNatalBrilhante color="green" position={[-50, 60, -45]} scale={5.5}  velocidade={3}/>
<ArvoreNatalBrilhante color="blue" position={[-50, 60, -45]} scale={5}  velocidade={6}/>

<PilarArvore position={[-50, 1.1, -45]}  scale={1}/>

<Cercadin position={[20+4, 0, 6]} rotation={[0, 0,0]} />
<Cercadin position={[24+4, -0.2, 6]} rotation={[0, 0,0]}/>
<Cercadin position={[28+4, 0.2, 6]} rotation={[0, 0,0]}/>
<Cercadin position={[32+4, 0.3, 6]} rotation={[0, 0,0]}/>
<Cercadin position={[36+4, -0.3, 6]} rotation={[0, 0,0]}/>
<Cercadin position={[40+4, 0, 6]} rotation={[0, 0,0]}/>
<Cercadin position={[44+4, -0.3, 6]} rotation={[0, 0,0]}/>
<Cercadin position={[48+4, 0.3, 6]} rotation={[0, 0,0]}/>

<Cercadin position={[20+4, 0, -6]} rotation={[0, 0,0]} />
<Cercadin position={[24+4, -0.2, -6]} rotation={[0, 0,0]}/>
<Cercadin position={[28+4, 0.2, -6]} rotation={[0, 0,0]}/>
<Cercadin position={[32+4, 0.3, -6]} rotation={[0, 0,0]}/>
<Cercadin position={[36+4, -0.3, -6]} rotation={[0, 0,0]}/>
<Cercadin position={[40+4, 0, -6]} rotation={[0, 0,0]}/>
<Cercadin position={[44+4, -0.3, -6]} rotation={[0, 0,0]}/>
<Cercadin position={[48+4, 0.3, -6]} rotation={[0, 0,0]}/>


<Cercadin position={[-20-4, 0, 6]} rotation={[0, 0,0]} />
<Cercadin position={[-24-4, -0.2, 6]} rotation={[0, 0,0]}/>
<Cercadin position={[-28-4, 0.2, 6]} rotation={[0, 0,0]}/>
<Cercadin position={[-32-4, 0.3, 6]} rotation={[0, 0,0]}/>
<Cercadin position={[-36-4, -0.3, 6]} rotation={[0, 0,0]}/>
<Cercadin position={[-40-4, 0, 6]} rotation={[0, 0,0]}/>
<Cercadin position={[-44-4, -0.3, 6]} rotation={[0, 0,0]}/>
<Cercadin position={[-48-4, 0.4, 6]} rotation={[0, 0,0]}/>

<Cercadin position={[-20-4, 0, -6]} rotation={[0, 0,0]} />
<Cercadin position={[-24-4, -0.2, -6]} rotation={[0, 0,0]}/>
<Cercadin position={[-28-4, 0.2, -6]} rotation={[0, 0,0]}/>
<Cercadin position={[-32-4, 0.3, -6]} rotation={[0, 0,0]}/>
<Cercadin position={[-36-4, -0.3, -6]} rotation={[0, 0,0]}/>
<Cercadin position={[-40-4, 0, -6]} rotation={[0, 0,0]}/>
<Cercadin position={[-44-4, -0.3, -6]} rotation={[0, 0,0]}/>
<Cercadin position={[-48-4, 0.3, -6]} rotation={[0, 0,0]}/>

<Cercadin position={[6, 0, -34-4]} rotation={[0, Math.PI / 2,0]}/>
<Cercadin position={[6, -0.2, -38-4]} rotation={[0, Math.PI / 2,0]}/>
<Cercadin position={[6, 0.2, -42-4]} rotation={[0, Math.PI / 2,0]}/>
<Cercadin position={[6, 0.3, -46-4]} rotation={[0, Math.PI / 2,0]}/>
<Cercadin position={[6, -0.3, -50-4]} rotation={[0, Math.PI / 2,0]}/>
<Cercadin position={[6, 0.3, -54-4]} rotation={[0, Math.PI / 2,0]}/>
<Cercadin position={[6, 0, -58-4]} rotation={[0, Math.PI / 2,0]}/>
<Cercadin position={[6, 0.2, -62-4]} rotation={[0, Math.PI / 2,0]}/>

<Cercadin position={[-6, 0, -34-4]} rotation={[0, Math.PI / 2,0]}/>
<Cercadin position={[-6, -0.2, -38-4]} rotation={[0, Math.PI / 2,0]}/>
<Cercadin position={[-6, 0.2, -42-4]} rotation={[0, Math.PI / 2,0]}/>
<Cercadin position={[-6, 0.3, -46-4]} rotation={[0, Math.PI / 2,0]}/>
<Cercadin position={[-6, -0.3, -50-4]} rotation={[0, Math.PI / 2,0]}/>
<Cercadin position={[-6, 0.3, -54-4]} rotation={[0, Math.PI / 2,0]}/>
<Cercadin position={[-6, 0, -58-4]} rotation={[0, Math.PI / 2,0]}/>
<Cercadin position={[-6, 0.2, -62-4]} rotation={[0, Math.PI / 2,0]}/>




        <directionalLight ref={directionalLight}
        castShadow 
        position={ [ -35,35, 0 ] }
         intensity={ 0.28 } 
         shadow-normalBias={0.3}
         shadow-mapSize={[1024*2,1024*2]}
         shadow-camera-top={50}
         shadow-camera-right={50}
         shadow-camera-bottom={-50}
         shadow-camera-left={-35}
         //shadow-camera-near={shadorCameranear}
         //shadow-camera-far={shadorCamerafar}
         />

         <ambientLight intensity={0.4}></ambientLight>


<pointLight castShadow={false} distance={30} power={10} color="#ff00aa" intensity={1.5} position={[0, 15, 5]} />
<pointLight castShadow={false} distance={30} power={30} color="#00f7ff" intensity={1.5} position={[0, 15, 15]} />

<pointLight castShadow={false} distance={25} power={10} color="#ff00aa" intensity={1.5} position={[0, 15, -5]} />
<pointLight castShadow={false} distance={30} power={30} color="#00f7ff" intensity={1.5} position={[0, 15, -15]} />



<fog attach="fog" args={[0x006992, 0,300, 0.01]} />




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

<Rain count={100} />

<GasStation/>

<CabosTv/>


<Chargers/>

<MerryChristmas/>
<SnowRoofTop/>

<SkyBox/>

<Rocks/>
<BaseDetails/>

<ThreeJsJourney/>
<EstrelaDeNatal position={[-50, 70, -45]} scale={6} rotation={[0,0,Math.PI]}/>

<Letters/>
<Letters rotation={[0, 9.422, 0]}/>

<Tvs onMeshClick={handleMeshClick} position={[0, 0.3, 0]}/>
<Tvs2 onMeshClick={backTosScene}/>






    </>

    
}