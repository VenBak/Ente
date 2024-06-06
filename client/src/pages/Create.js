import React from 'react';
import bootstrap from 'bootstrap'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Create(){
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
                <h1 className='create-names'>Starting Category</h1>
                <Form.Control
                type="category"
                id="inputPassword5"
                className='create-forms'
                aria-describedby="passwordHelpBlock"
                />
                <Button onClick={routechangeslobby} id='create-button'>CREATE GAME</Button>
            </div>
        </div>
    )
}

export default Create;