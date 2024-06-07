import React, {useEffect, useState} from "react";
import useFetch from "./useFetch.js";
import Loader from "../components/Loader.js";
import History from "./History.js";
import WaitingRoom from "./WaitingRoom.js";
import AnswerRoom from "./AnswerRoom.js";
import { useParams } from 'react-router-dom';


export default function Game({match}) {
//const [gameId, setGameId] = useState(match.params.gameId);
const [game, setGame] = useState({});
const [turns, setTurns] = useState([]);
const [found, setFound] = useState(false);
const [response, setResponse] = useState({});



  const { gameId } = useParams();
  const {get, post, loading} = useFetch("https://ente-52450.bubbleapps.io/version-test/api/1.1/wf/");

    useEffect(() => {
        get("get_game?gameId="+gameId).then(data => {
            //console.log(data.response.game); //console.log(data.response.turns);
            setGame(data.response.game);
            setTurns(data.response.turns);
	    console.log(data.response);
	    setFound(data.response.found)
	    setResponse(data.response)

        }).catch(error => console.error(error));
    }, []);


    return <div>
        <h1>Game - {game.slug}</h1>
        {loading && <Loader/>}
        <div>
	  {!found && !loading && <p> INVALID GAME CODE, SORRY! </p>}
          {found && !game.initiated && <WaitingRoom data={response}/>}
          {
		found && game.initiated && turns && 
		<div className="flex-col">
			<AnswerRoom turn={turns[0]} game={game} players={response.players}/>
			<History turns={turns}/>
		</div>
	  }
        </div>
    </div>
}