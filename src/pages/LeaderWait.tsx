import React from 'react';
import {Link} from "react-router-dom";

const LeaderWait: React.FC = () => {
  return (
    <>
      <p>Vous pouvez chasser le monstre sur vos appareils (téléphone, tablette, ordinateur, grille-pain, etc.) ou à l’aide de cartes physiques&nbsp;!</p>
      <hr/>
      <p>
        Choisissez la difficulté du jeu&nbsp;:
      </p>
      <p>
        <Link to='/leader-play/5000'>
          <button>DIFFICILE</button>
        </Link>

        <Link to='/leader-play/10000'>
          <button>NORMAL</button>
        </Link>

        <Link to='/leader-play/15000'>
          <button>FACILE</button>
        </Link>

      </p>
      <hr/>

      <Link to='/'>
        <button>RETOUR</button>
      </Link>

    </>
  );
}

export default LeaderWait;
