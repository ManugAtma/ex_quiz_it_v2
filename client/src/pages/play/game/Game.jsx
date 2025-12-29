import { useReducer, useContext, createContext, useRef } from 'react';

import useFetch from '@/util/useFetch';
import { SettingsContext } from '@/App';
import buildQuery from '@/pages/play/util/buildQuery';
import LoadingHandler from '@/components/LoadingHandler';
import prepareStats from '@/pages/play/util/prepareStats';
import PostGameScreen from '@/pages/play/post-game/PostGameScreen';

import { GameCardWrapper } from './GameCardWrapper';


const StatsContext = createContext();


/**
 * @component
 * Shows everything related to a current game:
 * either ongoing (GameCardWrapper)
 * or finished (PostGameScreen)
 * or a loading animation if game data is not fetched yet.
 *
 * @returns {React.ReactNode}  - A Context.Provider for LoadingHandler,
 * PostGameScreen and GameCardWrapper.
 * 
 */
function Game() {

    const stats = useRef("");

    const initialState = {
        gameId: 0,
        gameFinished: false,
    };

    function gameReducer(state, action) {
        switch (action.type) {
            case "FINISH":
                return { ...state, gameFinished: true };
            case "NEW_GAME":
                return { gameId: state.gameId + 1, gameFinished: false };
            default:
                return state;
        }
    }

    const [gameState, dispatch] = useReducer(gameReducer, initialState);
    const [settings, token, tokenError] = useContext(SettingsContext);
    const query = buildQuery(settings.current, token);

    // fetch questions
    const [data, error, setData] = useFetch(query, [gameState.gameId]);
    
    if (data && !stats.current) stats.current = prepareStats(data);

    return (
        <StatsContext.Provider value={[stats]}>
            <LoadingHandler data={token} error={tokenError}>
                <LoadingHandler data={data} error={error}>
                    {
                        gameState.gameFinished
                            ? <PostGameScreen setStats={setData} dispatch={dispatch} />
                            : <GameCardWrapper data={data} dispatch={dispatch} />
                    }
                </LoadingHandler>
            </LoadingHandler>
        </StatsContext.Provider>
    );
}

export { Game, StatsContext };