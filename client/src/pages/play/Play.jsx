import { useState } from 'react';

import PreGameScreen from '@/pages/play/pre-game/PreGameScreen';

import { Game } from './game/Game';


/**
 * @component
 * Highest level component for the play section of the page.
 * 
 * @returns {JSX.Element} Game in case a new game was started, PreGameScreen otherwise.
 */

function Play() {

  const [playing, setPlaying] = useState(false);

  return (
    <>
      {playing ? <Game /> : <PreGameScreen setPlaying={setPlaying} />}
    </>
  )
}

export default Play;
