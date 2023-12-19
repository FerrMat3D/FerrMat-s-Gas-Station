// JoystickWrapper.jsx
import React, { useCallback } from 'react';
import { Joystick } from 'react-joystick-component';
import useJoystick from '../useJoystick';

const JoystickWrapper = () => {
  const { updateJoystickState } = useJoystick();

  const handleJoystickMove = useCallback(
    (event) => {
      const newJoystickState = {
        forward: event.y < 0,
        backward: event.y > 0,
        left: event.x < 0,
        right: event.x > 0,
        brake: false,
      };
      updateJoystickState(newJoystickState);
    },
    [updateJoystickState]
  );

  const handleJoystickStop = useCallback(() => {
    const newJoystickState = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      brake: true,
    };
    updateJoystickState(newJoystickState);
  }, [updateJoystickState]);

  return (
    <Joystick
      size={80}
      baseColor="#222"
      stickColor="#555"
      move={handleJoystickMove}
      stop={handleJoystickStop}
    />
  );
};

export default JoystickWrapper;
