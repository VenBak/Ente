import React from 'react';
import bootstrap from 'bootstrap'
import { Button } from 'react-bootstrap';

function Rules () {
    return (
        <div className="d-flex justify-content-center align-items-center main-section">
            <div className="home-container">
                <Button>Play</Button>
                <Button>Rules</Button>
                <Button onClick={routechangeGame}>Join Game</Button>
            </div>
        </div>

    )
}

export default Rules 
