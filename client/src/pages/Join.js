import React from 'react';
import bootstrap from 'bootstrap'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Join(){
    const routechangeslobby = () => {
        window.location.assign("/lobby")
    };
    
    return(
        <div className='general-cont'>
            <div className = 'create-container' >
                <h1 className='create-names'>Password</h1>
                <Form.Control
                type="password"
                id="inputPassword5"
                className='create-forms'
                aria-describedby="passwordHelpBlock"
                />
                <Button onClick={routechangeslobby} id= 'join-button'>JOIN GAME</Button>
            </div>
        </div>
    )
}

export default Join;