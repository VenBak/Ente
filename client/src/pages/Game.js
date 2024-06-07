import React, {useEffect, useState} from "react";
import useFetch from "./useFetch.js";
import Loader from "../components/Loader.js";
import History from "./History.js";
import WaitingRoom from "./WaitingRoom.js";
import AnswerRoom from "./AnswerRoom.js";
import { useParams } from 'react-router-dom';


export default function Game({match}) {
const [gameIdState, setGameIdState] = useState();
const [game, setGame] = useState({});
const [turns, setTurns] = useState([]);
const [found, setFound] = useState(false);
const [response, setResponse] = useState({});
const [timeStamp, setTimeStamp] = useState();



  const { gameId } = useParams();
  //setGameIdState(gameId);
  const {get, post, loading} = useFetch("https://ente-52450.bubbleapps.io/version-test/api/1.1/wf/");

    useEffect(() => {
	//console.log("GET call with:" + gameId + " - " +  gameId);
        get("get_game?gameId="+ gameId).then(data => {
            //console.log(data.response.game); //console.log(data.response.turns);
            setGame(data.response.game);
            setTurns(data.response.turns);
	    //console.log(data.response);
	    setFound(data.response.found)
  	    //setGameIdState(gameId);
	    setResponse(data.response)
  	    console.log("API fetched");
        }).catch(error => console.error(error));
    }, [timeStamp]);


    /*useEffect(() => {
	console.log("new response");
    }, []);*/


    useEffect(() => {
        setTimeout(() => {
	   //setTimeStamp(Date.now());
  	   //console.log("Delayed for 5 second.");
	}, 10000);

	//window.parent.location = window.parent.location.href;

    }, [timeStamp]);

    window.onmessage = function(e) {
    	if (e.data == 'hello') {
		setTimeStamp(Date.now());
        	//alert('It works!');
		console.log("Received from bubble");
    	}
    };

    console.log(`https://ente-52450.bubbleapps.io/version-test/game/${gameId}-${game._id}`)
    return <div className="main-section-game">
        <h1>Game - {game.slug}</h1>
        {loading && <Loader/>}
	<iframe src={`https://ente-52450.bubbleapps.io/version-test/game/${gameId}-${game._id}`} style={{visibility: 'hidden'}} ></iframe>
        <div >
	  {!found && !loading && <p> INVALID GAME CODE, SORRY! </p>}
          {found && !game.initiated && <WaitingRoom data={response}/>}
          {
		found && game.initiated && turns && 
		<div>
			<AnswerRoom turn={turns[0]} game={game} players={response.players}/>
			<History turns={turns} players={response.players}/>
		</div>
	  }
        </div>
    </div>
}