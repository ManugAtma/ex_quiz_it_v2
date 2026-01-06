import { Game } from './game/Game';


/**
 * @component
 * Highest level component for the play section of the page.
 * 
 * @returns {JSX.Element} Game in case a new game was started, PreGameScreen otherwise.
 */

function Play() {

  return (
    <>
      <Game />
    </>
  )
}

export default Play;
