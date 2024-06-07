import React, {useEffect, useState} from "react";
import useFetch from "./useFetch.js";
import {render} from "react-dom";
import PlayerItem from "./PlayerItem"
import { Button } from 'react-bootstrap';


export default function AnswerRoom(props) {
   const [turn, setTurn] = useState(props.turn);
   const [game, setGame] = useState(props.game);
   const [players, setPlayers] = useState(props.players);
   const [category, setCategory] = useState(props.turn.categoryText);
   const [answer, setAnswer] = useState();
   const {get, post, loading} = useFetch("https://ente-52450.bubbleapps.io/version-test/api/1.1/wf/");

    useEffect(() => {
            setTurn(props.turn);
            setGame(props.game);
   	    setPlayers(props.players);
     	    setCategory(props.turn.categoryText);
    }, [props]);


    function handleSubmitAnswer (event) {
        event.preventDefault();
        post("add_turn", {
            gameId: game.slug, 
	    double: false,
	    answer: answer,
	    playerId: localStorage.getItem("tempUniId")
        }).then(data => {
            console.log(data);
	    window.location.assign(`/game/${data.response.game.slug}`);
        }).catch(error => console.error(error));
    }

    console.log(players[game.nextTurn % players.length]);
    const nextPlayer = players[game.nextTurn % players.length];
    const isCurrentPlayer = localStorage.getItem("tempUniId") == nextPlayer.uniqueId
    
    return <div className="flex-col">
	  <p> {isCurrentPlayer ? "You are" : nextPlayer.uniqueId+ " is"} Answering </p>

	{ isCurrentPlayer &&
		<div className="flex-col">
		   	<input 
				type="text"
      				id="category"
      				name="category"
				placeholder="Type Category"
      				value={category}
				disabled ={true}
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
                   	<Button onClick={handleSubmitAnswer}>Submit Answer</Button>
		</div>
	}

    </div>
}