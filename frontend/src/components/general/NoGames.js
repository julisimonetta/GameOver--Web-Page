
import React from 'react';
import '../../styles/nogames.css';

export default function NoGames() {

    return ( 
        <>
        <div className='nogames_container'>
            <div className='nofoundgames'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/search.png"} alt="img_contact"  className="icons_nogames" /> 
                <p>Game not found!</p>
                <p>Please try with another one</p>
            </div>          
        </div>
        </>

    );
}
