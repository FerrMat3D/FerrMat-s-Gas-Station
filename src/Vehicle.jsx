import { useRef, forwardRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useRaycastVehicle } from '@react-three/cannon';
import { useControls } from './utils/useControls';
import { LotusEspirit } from './LotusEspirit';
import { Wheel } from './Wheel';
import useJoystick from './useJoystick';

const RIGHT_BOUNDARY = 214;
const RIGHT_SPAWN_POINT = 212;
const LEFT_BOUNDARY = -214;
const LEFT_SPAWN_POINT = -212;
const FORWARD_BOUNDARY = 210;
const BACKWARD_BOUNDARY = -220;


const Vehicle = ({ radius = 1, width = 3.7, height = -0.9, front = 3.6, back = -3.9, steer = 0.7, force = 80000, maxBrake = 2.3e4, position, ...props }) => {
    const chassis = useRef();
    const wheel1 = useRef();
   const wheel2 = useRef();
  const wheel3 = useRef();
const wheel4 = useRef();
  
    const controls = useControls();
    const [lastTapTime, setLastTapTime] = useState(0);

    const { joystickState } = useJoystick();

    useEffect(() => {
   
      // Faça o que precisar com o estado atualizado no componente Vehicle
    }, [joystickState]);
  


    const reverseSoundRef = useRef(new Audio('./sound/soundeffects/car/car_reverse.mp3'));
    const accelerationSoundRef = useRef(new Audio('./sound/soundeffects/car/car_accel.mp3'));
    const snowbrakeSoundRef = useRef(new Audio('./sound/soundeffects/car/car_snowbrake.mp3'));

    accelerationSoundRef.current.volume = 0.1;
    reverseSoundRef.current.volume = 0.1;
    

    const wheelInfo = {
      radius,
      directionLocal: [0, -1, 0],
      chassisConnectionPointLocal: [0, 0, -1],
      axleLocal: [-1, 0, 0],
      suspensionStiffness: 100  ,
      suspensionRestLength: 0.7  ,
      maxSuspensionForce: 10e9,
      maxSuspensionTravel: 2.5,
      dampingRelaxation: 2  ,
      dampingCompression: 3, // Ajustado o valor aqui
      useCustomSlidingRotationalSpeed: true,
      customSlidingRotationalSpeed: 20,
      frictionSlip: 0.5
    };


    const wheelInfo1 = { ...wheelInfo, isFrontWheel: true, chassisConnectionPointLocal: [-width / 1.5, height, front] };
    const wheelInfo2 = { ...wheelInfo, isFrontWheel: true, chassisConnectionPointLocal: [width / 1.5, height, front] };
   const wheelInfo3 = { ...wheelInfo, isFrontWheel: false, chassisConnectionPointLocal: [-width / 1.5, height, back] };
   const wheelInfo4 = { ...wheelInfo, isFrontWheel: false, chassisConnectionPointLocal: [width / 1.5, height, back] };
  
    const [vehicle, api] = useRaycastVehicle(() => ({
      chassisBody: chassis,
      wheels: [wheel1, wheel2, wheel3, wheel4],
      wheelInfos: [wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4],
      indexForwardAxis: 2,
      indexRightAxis: 0,
      indexUpAxis: 1
    }));
  
    // raycastVehicles, etc. (anything created in cannon) doesnt necessarily track position.
    const vehiclePos = useRef([0, 0, 0]);

    const handleDoubleTap = () => {
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - lastTapTime;
  
      if (timeDiff < 200) {
        // Se o tempo entre os toques for menor que 300 milissegundos, consideramos um double tap
        resetCar();
      }
  
      setLastTapTime(currentTime);
    };
  
    const handleTouchStart = () => {
      handleDoubleTap();
    };
  
    useEffect(() => {
      window.addEventListener('touchstart', handleTouchStart);
  
      return () => {
        window.removeEventListener('touchstart', handleTouchStart);
      };
    }, [lastTapTime]);
  
    useEffect(() => {
      chassis?.current?.api.position.subscribe((v) => (vehiclePos.current = v));
    }, [api]);
  
    const resetCar = () => {
      chassis.current.api.position.set(0,2, 0);
      chassis.current.api.velocity.set(0, 0, 0);
      chassis.current.api.angularVelocity.set(0, 0.5, 0);
      chassis.current.api.rotation.set(0, 0, 0);
    };
  
    const debugCar = () => {
      console.log(vehiclePos, 'vehicle');
    };
  
    useFrame(() => {
      if (vehiclePos.current[0] > RIGHT_BOUNDARY) {
        chassis.current.api.position.set(LEFT_SPAWN_POINT, vehiclePos.current[1], 0);
        chassis.current.api.velocity.set(0, 0, 0);
        chassis.current.api.angularVelocity.set(0, 0.5, 0);
        return;
      }
  
      if (vehiclePos.current[0] < LEFT_BOUNDARY) {
        chassis.current.api.position.set(RIGHT_SPAWN_POINT, vehiclePos.current[1], 0);
        chassis.current.api.velocity.set(0, 0, 0);
        chassis.current.api.angularVelocity.set(0, 0.5, 0);
        return;
      }
      if (vehiclePos.current[2] > FORWARD_BOUNDARY) {
        chassis.current.api.position.set(0, 0.5, -18);
        chassis.current.api.velocity.set(0, 0, 0);
        chassis.current.api.angularVelocity.set(0, vehiclePos.current[1], 0);
        return;
      }
      if (vehiclePos.current[2] < BACKWARD_BOUNDARY) {
        chassis.current.api.position.set(0, 0.5, 8);
        chassis.current.api.velocity.set(0, 0, 0);
        chassis.current.api.angularVelocity.set(0, vehiclePos.current[1], 0);
        return;
      }
    });
  
    useFrame(() => {

      const { forward, backward, left, right, brake, reset, test } = controls.current;
  
      const forceMultiplier = !joystickState.forward && joystickState.backward || forward && !backward ? -1 : 1;


      joystickState.forward || joystickState.backward || forward || backward ? api.applyEngineForce(force * forceMultiplier, 0) : api.applyEngineForce(0, 0);
  
      // S is referring to the front wheels
      for (let s = 0; s < 2; s++) {
        const steerMultiplier =  joystickState.left && !joystickState.right || left && !right ? 1 : -1;
  
        joystickState.left || joystickState.right || left || right ? api.setSteeringValue(steer * steerMultiplier, s) : api.setSteeringValue(0, s);
      }
  
      // B is referring to the back wheels
      for (let b = 2; b < 4; b++) {
        const brakeMultipler = brake ? maxBrake : 0;
        api.setBrake(brakeMultipler, b);
      }
  
      if (reset) {
        resetCar();
        return;
      }


      
      if ((joystickState.backward || forward) && !chassis.current.api.isSoundPlaying) {


        reverseSoundRef.current.pause();

        reverseSoundRef.current.currentTime = 0;
          chassis.current.api.isSoundPlaying = true;

          
          accelerationSoundRef.current.play();
          setTimeout(() => {

            snowbrakeSoundRef.current.volume = 0.1
    
          }, 1000);
      
          

      
      }


      
      if ((joystickState.forward || backward)) {
 

        if(!chassis.current.api.isSoundPlaying){
        accelerationSoundRef.current.pause();
      }

        accelerationSoundRef.current.currentTime = 0;
        reverseSoundRef.current.play();
        chassis.current.api.isSoundPlaying = false;

        setTimeout(() => {

          snowbrakeSoundRef.current.volume = 0.1
  
        }, 1000);
    
        
    
    }

    if ((brake)) {


      if(!chassis.current.api.isSoundPlaying){
      accelerationSoundRef.current.pause();
      reverseSoundRef.current.pause();
    }


      accelerationSoundRef.current.currentTime = 0;

      reverseSoundRef.current.currentTime = 0;

     

      snowbrakeSoundRef.current.play();


      
      setTimeout(() => {

        snowbrakeSoundRef.current.volume = 0

      }, 1000);
  

 

      
  
  }
  
      if (test) {
        debugCar();
        return;
      }
    });
    
  
    return (
      <group ref={vehicle} position={props.position} name="vehicle">
        <LotusEspirit ref={chassis} position={position} rotation={props.rotation} angularVelocity={props.angularVelocity} />
        <Wheel ref={wheel1} radius={radius} leftSide />
        <Wheel ref={wheel2} radius={radius}  />
        <Wheel ref={wheel3} radius={radius}  leftSide/>
        <Wheel ref={wheel4} radius={radius}  />

        
      
      </group>

      
    );
  };
  
  export default Vehicle;
  