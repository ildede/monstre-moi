import React from 'react';
import {Link, useLoaderData, useParams} from "react-router-dom";
import Leader from "../Leader";

interface UserData {
  heads: { url: string, id: string }[],
  tops: { url: string, id: string }[],
  bottoms: { url: string, id: string }[]
}

const LeaderPlay: React.FC = () => {
  const {speed} = useParams() as { speed: string };
  const playSpeed = Number(speed);
  const {heads, tops, bottoms} = useLoaderData() as UserData;

  return (
    <>
      <p>
        <Link to='/leader-wait'>
          <button>RETOUR</button>
        </Link>
      </p>
      <p>
        Vite, décrivez le monstre aux chasseurs et chasseuses et appuyez sur MONSTRE-MOI&nbsp;! quand le monstre a été trouvé&nbsp;!
      </p>
      <hr/>
      <Leader speed={playSpeed} heads={heads} tops={tops} bottoms={bottoms}/>
    </>
  );
}

export default LeaderPlay;
