import React from 'react';
import bootstrap from 'bootstrap'
import { Button } from 'react-bootstrap';


function Lobby(){

    return(
        <div className='general-cont'>
            <div className = 'lobby-container' >
                <div className='player-list'>
                    <div className='player-space' id='player-1'><image src = ".\assets\duck_static.png"/> player1 </div>
                    <div className='player-space' id='player-2'><image/> player2 </div>
                    <div className='player-space' id='player-3'><image/> player3 </div>
                    <div className='player-space' id='player-4'><image/> player4 </div>
                </div>
                <div className='category'>

                </div>
            </div>
        </div>
    )
}

export default Lobby