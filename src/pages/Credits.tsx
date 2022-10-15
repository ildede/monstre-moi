import React from 'react';
import {Link} from "react-router-dom";

const Credits: React.FC = () => {
  return (
    <>
      <h1>CRÉDITS</h1>
      <p>
        Équipe : « Kermit Mort :( »
      </p><p>
      Idées et game design : Toute l’équipe&nbsp;!
    </p><p>
      Programmation : <a href="https://www.linkedin.com/in/pedrondavide/">Davide</a>
    </p><p>
      Dessins : <a href="https://loqace.com">Chiara</a> & <a href="https://youtu.be/dQw4w9WgXcQ">Martin</a>
    </p><p>
      Audio : <a href="http://davst.com/">Davst</a>
    </p>
      <p>
        <h2>LICENCES</h2>
        <p>
          Montre-Moi © 2022 <a href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style={{display:"inline-block"}}>CC BY-NC 4.0</a>
        </p>
        <a
          href="https://justpaste.it/redirect/8jlhn/https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fholographic-seamless-fur-textures-animal-skin-set_32230629.htm%23query%3Dfur%2520texture%2520seamless%26amp%3Bposition%3D22%26amp%3Bfrom_view%3Dsearch%26amp%3Btrack%3Dsph">Image
          by upklyak</a> on Freepik<br/>
        <a
          href="https://justpaste.it/redirect/8jlhn/https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fleopard-print-pattern_16186245.htm%23query%3Dfur%2520texture%2520seamless%26amp%3Bposition%3D12%26amp%3Bfrom_view%3Dsearch%26amp%3Btrack%3Dsph">Image
          by Vectonauta</a> on Freepik<br/>
        <a href="https://justpaste.it/redirect/8jlhn/https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fseamless-animal-print-pattern-set_10604014.htm">Image by macrovector</a> on
        Freepik<br/>
        <a href="https://www.myfreetextures.com/short-white-fur-texture-background/">White fur image</a> on Myfreetextures<br/>
      </p>

      <Link to='/'>
        <button>RETOUR</button>
      </Link>
    </>
  );
}

export default Credits;
