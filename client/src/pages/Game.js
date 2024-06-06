import React, {useEffect, useState} from "react";
import useFetch from "./useFetch.js";
import Loader from "../components/Loader.js";
import History from "./History.js";


export default function Game() {
const [game, setGame] = useState({});
const [turns, setTurns] = useState([]);

  const {get, post, loading} = useFetch("https://ente-52450.bubbleapps.io/version-test/api/1.1/wf/");

    useEffect(() => {
        get("get_game?gameId=7QGKUE").then(data => {
            console.log(data.response.game);            
            console.log(data.response.turns);
            setGame(data.response.game);
            setTurns(data.response.turns);
        }).catch(error => console.error(error));
    }, []);


    return <div>
        <h1>Game - {game.slug}</h1>
        {loading && <Loader/>}
        <div>
          {turns && <History turns={turns}/>}
        </div>
    </div>
}
