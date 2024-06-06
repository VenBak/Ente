import React, {useEffect, useState} from "react";
import useFetch from "./useFetch.js";
import {render} from "react-dom";
import PlayerItem from "./PlayerItem"

export default function WaitingRoom(props) {
   const [data, setData] = useState(props.data);
   const [players, setPlayers] = useState(props.data.players);


    useEffect(() => {
            setData(props.data);
    }, [props]);
    
    return <div>
	  <p> You are Waiting </p>
          {players && players.map(item => <PlayerItem key={item._id} item={item}/ >)}
    </div>
}