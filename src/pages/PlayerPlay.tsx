import React from 'react';
import {Link} from "react-router-dom";
import Player from "../Player";

const PlayerPlay: React.FC = () => {
  return (
    <>
      <p>

        <Link to='/'>
          <button>RETOUR</button>
        </Link>

      </p>
      <p>
        Déplacez les éléments et appuyez sur TROUVÉ&nbsp;! quand vous avez identifié le monstre&nbsp;!
      </p>
      <Player/>
    </>
  );
}

export default PlayerPlay;
