import React, {useEffect, useState} from "react";
import useFetch from "./useFetch.js";
import {render} from "react-dom";

export default function PlayerItem(props) {
   const [player, setPlayer] = useState(props.item);

    useEffect(() => {
            setPlayer(props.item);
    }, []);
    
    return (
	<div className = 'flex-row justify-flex-start history-item'>
               <p>{player.displayName}</p>
               <p> : </p>
               <p>{player.uniqueId}</p>
            </div>
	)
}