// useJoystick.js
import { useState, useEffect } from 'react';

const observers = new Set();
let joystickState = {
  forward: false,
  backward: false,
  left: false,
  right: false,
  brake: false,
};

const updateJoystickState = (newState) => {
  joystickState = { ...joystickState, ...newState };
  observers.forEach((observer) => observer(joystickState));

};

const useJoystick = () => {
  const [state, setState] = useState(joystickState);

  useEffect(() => {
    const observer = (newState) => setState(newState);
    observers.add(observer);

    return () => {
      observers.delete(observer);
    };
  }, []);

  return { joystickState: state, updateJoystickState };
};

export default useJoystick;
