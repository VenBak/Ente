import React, {useEffect, useState} from "react";
import useFetch from "./useFetch.js";
import {render} from "react-dom";

export default function HistoryItem(props) {
   const [turn, setTurn] = useState(props.item);

    useEffect(() => {
            setTurn(props.item);
    }, [props.turn]);
    
    
    const player =  props.players && props.players.filter(item => item._id == turn.playerReference)[0];
    const player_image =  props.players && props.players.filter(item => item._id == turn.playerReference)[0];

    return (<div className = "flex-row  history-item">
	 	<img className="avtar-small" src={player.tempAvtar} alt="Avtar" />
           	<p>{turn.order}</p>
               	<p>{turn.answer}</p>
               	<p>{turn.categoryText}</p>
               	<p>{turn.playerReferenceText}</p>
               	<p>{turn.double ? "2P" : "1P"}</p>
            </div>)
}