import React, {useEffect, useState} from "react";
import useFetch from "./useFetch.js";
import {render} from "react-dom";
import PlayerItem from "./PlayerItem"
import { Button } from 'react-bootstrap';


export default function AnswerRoom(props) {
   const [turn, setTurn] = useState(props.turn);
   const [game, setGame] = useState(props.game);
   const [players, setPlayers] = useState(props.players);
   const [category, setCategory] = useState(props.game.currentCategoryText);
   const [answer, setAnswer] = useState();
   const {get, post, loading} = useFetch("https://ente-52450.bubbleapps.io/version-test/api/1.1/wf/");
   const [disabled, setDisabled] = useState(false);
   const [invalid, setInvalid] = useState(false);
   const [double, setDouble] = useState(false);


    useEffect(() => {
            setTurn(props.turn);
            setGame(props.game);
   	    setPlayers(props.players);
     	    setCategory(props.game.currentCategoryText);
    }, [props]);

    function handleAnswerInputChange(event){
	const new_answer = event.target.value;
	const wrong_char = new_answer.charAt(0) != game.lastAnswer.charAt(game.lastAnswer.length - 1);
	const too_small = new_answer.length < 3;
	setInvalid(wrong_char && new_answer.length > 0);
	setDisabled( wrong_char || too_small );
	setDouble(new_answer.charAt(0) === new_answer.charAt(new_answer.length - 1) && !too_small);
	setAnswer(event.target.value);
    }

    function handleSubmitAnswer (event) {
        event.preventDefault();
        post("add_turn", {
            gameId: game.slug, 
	    double: double,
	    answer: answer,
	    playerId: localStorage.getItem("tempUniId"),
	    newCategory: category
        }).then(data => {
            //console.log(data);
	    window.location.assign(`/game/${data.response.game.slug}`);
        }).catch(error => console.error(error));
    }

    //console.log(players[game.nextTurn % players.length]);
    const nextPlayer = players[game.nextTurn % players.length];
    const isCurrentPlayer = localStorage.getItem("tempUniId") == nextPlayer.uniqueId
    
    return <div className="flex-col">
	  <p> {isCurrentPlayer ? "You are" : nextPlayer.uniqueId+ " is"} Answering </p>

	{ isCurrentPlayer &&


		<div className="flex-col">
  		<p> 
			The Category is : {game.currentCategoryText} and letter to start is : {game.lastAnswer.charAt(game.lastAnswer.length - 1)} </p>
		   	<input 
				type="text"
      				id="category"
      				name="category"
				placeholder="Type Category"
      				value={category}
				disabled ={!(true && !disabled && double)}
      				onChange={(event) => setCategory(event.target.value)}
		    	/>   
		   	<input 
				type="text"
      				id="answer"
      				name="answer"
				placeholder="Type Word"
      				value={answer}
      				onChange={handleAnswerInputChange}
		    	/>
                   	<Button disabled={disabled} onClick={handleSubmitAnswer}>Submit Answer</Button>
			{(invalid) && <p className="red-text"> Oops, Wrong starting letter </p>}
			{(double && !disabled) && <p className="green-text"> Ohh maybe a double (starts and ends on same letter?) </p>}
		</div>
	}

    </div>
}