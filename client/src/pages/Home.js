import React, {useEffect, useState} from "react";
import bootstrap from 'bootstrap'
import { Button } from 'react-bootstrap';
import useFetch from "./useFetch.js";


import Game from './Game'


function Rules () {

    const [userId, setUserId] = useState(localStorage.getItem("tempUniId"));
    const [gameId, setGameId] = useState("");
    const [userDisplay, setUserDisplay] = useState("");

    const {get, post, loading} = useFetch("https://ente-52450.bubbleapps.io/version-test/api/1.1/wf/");


    useEffect(() => {
            setUserId("");
    }, []);


   const handleJoinGame = (event) => {
        event.preventDefault();
	const tempUniId = "" + userDisplay  + "-" + Date.now();
	localStorage.setItem("tempUniId", tempUniId);

        post("add_player", {
            gameId: gameId,
            newPlayerId: tempUniId, 
	    newPlayerDisplayName: userDisplay
        }).then(data => {
            console.log(data);
	    window.location.assign(`/game/${data.response.game.slug}`);
        }).catch(error => console.error(error));

        window.location.assign(`/game/${gameId}`)
   };


    function handleNewGame (event) {
        event.preventDefault();
	const tempUniId = "" + userDisplay  + "-" + Date.now();
	localStorage.setItem("tempUniId", tempUniId);

        post("create_game", {
            creator: tempUniId, 
	    userName: userDisplay
        }).then(data => {
            console.log(data);
	    window.location.assign(`/game/${data.response.game.slug}`);
        }).catch(error => console.error(error));
    }



    return (

        <div className="d-flex justify-content-center align-items-center main-section">
      
            <div className="home-container">
		<div>
		   <input 
			type="text"
      			id="userDisplay1"
      			name="userDisplay1"
			placeholder="Your display name"
      			value={userDisplay}
      			onChange={(event) => setUserDisplay(event.target.value)}
		    />
                   <Button onClick={handleNewGame}>New Game</Button>
		</div>
                {/*<Button>Rules</Button>*/}
		<div className="flex-row">
		   <input 
			type="text"
      			id="gameId"
      			name="gameId"
			placeholder="Type Game Code"
      			value={gameId}
      			onChange={(event) => setGameId(event.target.value)}
		    />
		   <input 
			type="text"
      			id="userDisplay2"
      			name="userDisplay2"
			placeholder="Your display name"
      			value={userDisplay}
      			onChange={(event) => setUserDisplay(event.target.value)}
		    />
                   <Button onClick={handleJoinGame}>Join Game</Button>
		</div>
            </div>
        </div>

    )
}

export default Rules 