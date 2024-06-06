import React, {useEffect, useState} from "react";
import useFetch from "./useFetch.js";
import {render} from "react-dom";
import HistoryItem from "./HistoryItem"

export default function History(props) {
   const [turns, setTurns] = useState(props.turns);


    useEffect(() => {
            setTurns(props.turns);
    }, [props]);
    
    return <div>

          {turns && turns.map(item => <HistoryItem key={item._id} item={item}/ >)}
    </div>
}