import React, {useEffect, useState} from "react";
import useFetch from "./useFetch.js";
import {render} from "react-dom";

export default function HistoryItem(props) {
   const [turn, setTurn] = useState(props.item);

    useEffect(() => {
            setTurn(props.item);
    }, []);
    
    return (<div className = 'flex-row justify-flex-start history-item'>
               <p>{turn.order}</p>
               <p>{turn.answer}</p>
               <p>{turn.categoryText}</p>
            </div>)
}