import React from 'react';
import bootstrap from 'bootstrap'
import { Button } from 'react-bootstrap';

function Rules () {
    const routechangesjoin = () => {
        window.location.assign("/join")
    };
    const routechangescreate = () => {
        window.location.assign("/create")
    };
    return (
        <div className="d-flex justify-content-center align-items-center main-section">
            <div className="home-container">
                <Button>Rules</Button>
                <Button onClick={routechangesjoin}>Join Game</Button>
                <Button onClick={routechangescreate}>Create Game</Button>
            </div>
        </div>

    )
}

export default Rules 