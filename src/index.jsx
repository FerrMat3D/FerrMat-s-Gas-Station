import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import './style.css';
import Experience from './Experience.jsx';
import JoystickWrapper from './utils/JoystickWrapper';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAudioPlaying: true,
      isVolumeOn: true,
      isInitialLoad: true,
      hasUserInteracted: false,
    };
  }

  componentDidMount() {
    this.audio = new Audio('./sound/natal.mp3');
    this.audio.volume = 0.3;
    this.audio.addEventListener('ended', this.handleAudioEnded);

    if (this.state.isInitialLoad) {
      if (!this.state.hasUserInteracted) {
        document.addEventListener('click', this.handleFirstInteraction);
        document.addEventListener('touchstart', this.handleFirstInteraction);
      } else {
        this.playAudio();
      }

      this.setState({ isInitialLoad: false });
    }
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', this.handleAudioEnded);
    document.removeEventListener('click', this.handleFirstInteraction);
    document.removeEventListener('touchstart', this.handleFirstInteraction);
  }

  handleFirstInteraction = () => {
    this.playAudio();
    this.setState({ hasUserInteracted: true });
    document.removeEventListener('click', this.handleFirstInteraction);
    document.removeEventListener('touchstart', this.handleFirstInteraction);

    const tutorialDiv = document.querySelector('.opacity-100');
    if (tutorialDiv) {
      tutorialDiv.style.opacity = '0';
    }
  };

  playAudio = () => {
    if (this.state.isAudioPlaying && this.state.isVolumeOn) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  };

  handleAudioEnded = () => {
    this.audio.currentTime = 0;
    this.audio.play();
  };

  handleVolumeToggle = () => {
    const { isAudioPlaying, isVolumeOn } = this.state;

    if (isAudioPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }

    this.setState((prevState) => ({
      isAudioPlaying: !prevState.isAudioPlaying,
      isVolumeOn: !isVolumeOn,
    }));
  };

  

  render() {
    const { isVolumeOn } = this.state;

    return (
      <>
        <div className='fixed top-0 left-0 w-full h-full bg-black'>
          <Canvas
            shadows
            camera={{
              fov: 450,
              near: 0.1,
              far: 500,
              position: [100, 10, 0],
            }}
          >
            <Experience />
          </Canvas>

          <div className="absolute bottom-[10px] left-[50px] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <JoystickWrapper />
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10 opacity-100 pointer-events-none">
            <img src="./Textures/tutorial.png" className="w-auto h-auto scale-50" alt="Tutorial" />
          </div>

          <div
            className="absolute top-[10px] right-[10px]"
            style={{ position: 'absolute', width: '24px', height: '24px' }}
          >
            <button
              onClick={this.handleVolumeToggle}
              style={{ width: '100%', height: '100%', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              {isVolumeOn ? (
                <img src="./icons/volume_on.png" alt="Volume On" style={{ width: '100%', height: '100%' }} />
              ) : (
                <img src="./icons/volume_off.png" alt="Volume Off" style={{ width: '100%', height: '100%' }} />
              )}
            </button>



          </div>



          
        </div>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
