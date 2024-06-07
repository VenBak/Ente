import React, {useEffect, useState} from "react";
import useFetch from "./useFetch.js";
import {render} from "react-dom";
import PlayerItem from "./PlayerItem"
import { Button } from 'react-bootstrap';


export default function WaitingRoom(props) {
   const [data, setData] = useState(props.data);
   const [players, setPlayers] = useState(props.data.players);
   const [category, setCategory] = useState();
   const [answer, setAnswer] = useState();
    const {get, post, loading} = useFetch("https://ente-52450.bubbleapps.io/version-test/api/1.1/wf/");


   const game = data.game

    useEffect(() => {
            setData(props.data);
    }, [props]);


    function handleStartGame (event) {
        event.preventDefault();
        post("start_game", {
            gameId: game.slug, 
	    startCategory: category,
	    startAnswer: answer,
	    playerId: localStorage.getItem("tempUniId")
        }).then(data => {
            console.log(data);
	    window.location.assign(`/game/${data.response.game.slug}`);
        }).catch(error => console.error(error));
    }

   //console.log(players[game.nextTurn % players.length]);
   const nextPlayer = players[game.nextTurn % players.length];
   const isCurrentPlayer = localStorage.getItem("tempUniId") == nextPlayer.uniqueId

    
    return <div>
	  <p> You are Waiting </p>
	  <div className="flex-row justify-space-around ">

	     <div className="flex-col">
	  	<p> Players: </p>
          	{players && players.map(item => <PlayerItem key={item._id} item={item}/ >)}
	     </div>

		<div className="flex-col">
			<p> Creator of Game will start the game soon! </p>   

	{ isCurrentPlayer &&
		<div className="flex-row">
		   	<input 
				type="text"
      				id="category"
      				name="category"
				placeholder="Type Category"
      				value={category}
      				onChange={(event) => setCategory(event.target.value)}
		    	/>   
		   	<input 
				type="text"
      				id="answer"
      				name="answer"
				placeholder="Type Word"
      				value={answer}
      				onChange={(event) => setAnswer(event.target.value)}
		    	/>
                   	<Button onClick={handleStartGame}>Start Game</Button>
		</div>
	}
		</div>
	  </div>
    </div>
}