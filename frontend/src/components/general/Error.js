import React from 'react';
import '../../styles/error.css';

export default function Error() {

    return ( 
        <>
        <div className='error_container'>
            <h2>Error</h2>
                <img src={process.env.PUBLIC_URL+"/assets/footerImages/404.png"} alt="img404"  className="image_error" />
            <h1> Page not found!</h1>
        </div>
        </>

    );
}

