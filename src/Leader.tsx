import React, {useState} from 'react';
import 'react-slideshow-image/dist/styles.css';
import {Slide} from "react-slideshow-image";

const TRANSITION_DURATION = 250;

interface Props {
  speed: number,
  heads: { url: string, id: string }[],
  tops: { url: string, id: string }[],
  bottoms: { url: string, id: string }[]
}

const MONSTRE_MOI = new Audio('/sounds/vue.mp3');

const Leader: React.FC<Props> = ({speed, heads, tops, bottoms}) => {

  const [autoHead, setAutoHead] = useState<boolean>(true);
  const [autoTop, setAutoTop] = useState<boolean>(false);
  const [autoBottom, setAutoBottom] = useState<boolean>(false);
  const [unlocked, setUnlocked] = useState<boolean>(true);

  return (
    <>
      <audio src="/sounds/monstre-moi.mp3" loop={true} autoPlay={true}/>
      <div className="slide-container">
        <Slide
          autoplay={autoHead}
          arrows={false}
          canSwipe={false}
          duration={speed}
          transitionDuration={TRANSITION_DURATION}
          onChange={() => {
            let randomPArt = Math.floor(Math.random() * 3);
            setAutoHead(false);
            [setAutoHead, setAutoTop, setAutoBottom][randomPArt](unlocked && true)
          }}
        >
          {heads.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>

              </div>
            </div>
          ))}
        </Slide>
      </div>

      <div className="slide-container">
        <Slide
          autoplay={autoTop}
          arrows={false}
          canSwipe={false}
          duration={speed}
          transitionDuration={TRANSITION_DURATION}
          onChange={() => {
            let randomPArt = Math.floor(Math.random() * 3);
            setAutoTop(false);
            [setAutoHead, setAutoTop, setAutoBottom][randomPArt](unlocked && true);
          }}
        >
          {tops.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>

              </div>
            </div>
          ))}
        </Slide>
      </div>

      <div className="slide-container">
        <Slide
          autoplay={autoBottom}
          arrows={false}
          canSwipe={false}
          duration={speed}
          transitionDuration={TRANSITION_DURATION}
          onChange={() => {
            let randomPArt = Math.floor(Math.random() * 3);
            setAutoBottom(false);
            [setAutoHead, setAutoTop, setAutoBottom][randomPArt](unlocked && true)
          }}
        >
          {bottoms.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>

              </div>
            </div>
          ))}
        </Slide>
      </div>

      {unlocked ?
        <button className="button-9 button-10" onClick={() => {
          MONSTRE_MOI.play();
          setAutoHead(false);
          setAutoTop(false);
          setAutoBottom(false);
          setUnlocked(false);
        }}>MONSTRE-MOI !
        </button>
        :
        <button onClick={() => {
          setUnlocked(true)
          let randomPArt = Math.floor(Math.random() * 3);
          [setAutoHead, setAutoTop, setAutoBottom][randomPArt](true)
        }}>
          CONTINUER LA CHASSE !
        </button>
      }
    </>
  );
}

export default Leader;
