import React, {useState} from 'react';
import Slider from "./Slider";
import {TOPS, BOTTOMS, HEADS} from "./config";

const audio = new Audio('/sounds/trouvé-01.mp3');

function Player() {
  const [unlocked, setUnlocked] = useState<boolean>(true);
  return (
    <>
      <Slider images={HEADS} autoplay={false} canSwipe={unlocked} arrows={unlocked}/>
      <Slider images={TOPS} autoplay={false} canSwipe={unlocked} arrows={unlocked}/>
      <Slider images={BOTTOMS} autoplay={false} canSwipe={unlocked} arrows={unlocked}/>
      {unlocked ?
        <button onClick={() => {
          audio.play();
          setUnlocked(false);
        }}>
          TROUVÉ !
        </button>
        :
        <button onClick={() => setUnlocked(true)}>
          CONTINUER LA CHASSE !
        </button>
      }
    </>
  );
}

export default Player;
