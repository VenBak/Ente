import React from 'react';
import logo from '../assets/duck.gif';

function Rules () {
    return (
        <div className='main-section-rules'>
            <h1>The Rules of Ente</h1>
            <p>Ente is a game played between friends where all players take turn in saying a word.
            In order to know which word you must say it must fit two rules, the word must fit the prescribed category
            and the first letter of your word must be the last letter of the previous word. At each players turn you must say a word and if you fail, you forfeit your right to gain points that turn.
            A correct word rewards you with 1 point, and some words are worth 2 points if they start and end with the same letter such as "Eagle" or "Natalie Portman".
            The first player to reach the point threshold wins.</p>
            <img src={logo} alt="Duck" className="logo"/>
        </div>

    )
}

export default Rules 