import React from 'react';
import {Link} from 'react-router-dom';

const TitleScreen: React.FC = () => {
  return (
    <>
      <img src="/logo.png" alt="logo"/>
      <img src="/kermit.png" alt="kermit mort"/>
      <p>
        Alerte rouge, un monstre <strong>mutant</strong> s’est enfui du zoo intergalactique de <i>Proxima&nbsp;du&nbsp;Centaure&nbsp;!</i>
      </p>
      <p>
        Voici son dernier portrait-robot en date. Attention, ce mutant <strong>change d’apparence</strong> très fréquemment&nbsp;! Pas d’inquiétude, nous vous enverrons une mise à jour en direct dès qu’il change de forme.
      </p>
      <p>
        Il nous faut <strong>1 Leader</strong> pour décrire le mutant à ses collègues chasseurs.
      </p>
      <p>
        <Link to='leader-wait'>
          <button>JE SUIS LEADER</button>
        </Link>
      </p>
      <hr/>
      <p>
        Si un <strong>chasseur</strong> ou une <strong>chasseuse</strong> croit avoir débusqué la créature, il faut appuyer sur le bouton <strong>«&nbsp;TROUVÉ&nbsp;!&nbsp;»</strong> et le <strong>Leader</strong> confirmera si c’est bien le monstre en fuite en appuyant sur le bouton <strong>«&nbsp;MONSTRE-MOI&nbsp;!&nbsp;»</strong>.
      </p>
      <p>
        <Link to='play'>
          <button>JE CHASSE</button>
        </Link>
      </p>
      <p>
        Bonne chance&nbsp;!
      </p>
      <p>
        <a href="/monstre-moi.pdf" download="monstre-moi.pdf"><button>VERSION PAPIER</button></a>
      </p>
      <hr/>

      <Link to='credits'>
        <button>CREDITS</button>
      </Link>

    </>
  );
}

export default TitleScreen;
