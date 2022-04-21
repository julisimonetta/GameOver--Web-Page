import React from 'react';
import "../styles/aboutUs.css";

export default function AboutUs() {
    window.scrollTo({top: 0, behavior: "smooth"})

// var word = document.getElementsByTagName("h5")
// var i = 0

    return ( 
        <>
        <div className='container_about'>
            <div className='tittle_aboutus'>
            <h1>WE CARE ABOUT GAMES</h1>
            <p className='presentation-text'> GAME OVER is a digital distribution platform with a curated selection of games, a "you buy it, you own it" philosophy, and utmost care about customers.</p>
            </div>
            {/* <div className='rotater'>
                <div id='text'>
                <h5 style={{display:"initial", color:"#00C3F6"}}>discover the best games with us</h5>
                <h5  style={{color:"#9D164D"}}>constant support of your video games</h5>
                <h5 style={{color:"#FD2E67"}}>legitimate video games guarantee</h5>
                </div>
            </div> */}
            <div className='gaming_info'>
            <img src={process.env.PUBLIC_URL+"/assets/aboutImages/searching.png"} alt="img"  className="tittle_about" />    
            <h1 className='tittle_search'>Hand-picking the best in gaming</h1>
            <p className='selection-text'>A selection of great DRM-free games, from modern hits to all-time classics, that you really shouldn't miss.</p>
                <div className='gaming_box'>
                    <div>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/winer.png"} alt="img"  className="icons_about" /> 
                    <h3  className='tittle_search'>A curated selection of games</h3>
                    </div>
                    <div>
                    <p> From exceptional AAAs, unique indies to the best of classic gaming. Every game is here because we chose it for you.</p>
                    </div>
                </div>
                <div className='gaming_box'>
                <div>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/surprise.png"} alt="img"  className="icons_about" /> 
                    <h3  className='tittle_search'>Feeding your inner collector</h3>
                    </div>
                       <div>
                    <p> Offering games with as many goodies as possible is the GAME OVER way - even if it means exploring our long forgotten basements and attics.</p>
                    </div> 
                </div>
                <div className='gaming_box'>
                    <div>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/original.png"} alt="img"  className="icons_about" /> 
                    <h3  className='tittle_search'>Respecting game creators</h3>
                    </div>
                    <div>
                    <p> When you're with us, you can be sure that all games are legitimate, and your purchases support rightful owners and creators.</p>
                    </div>
                </div>
                <div className='gaming_box'>
                    <div>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/update.png"} alt="img"  className="icons_about" /> 
                    <h3  className='tittle_search'>Upgrading classics for present-day</h3>
                    </div>
                    <div>
                    <p> Even if the game is older than you are, we test it thoroughly, fix all the bugs, and apply patches so it runs flawlessly on your next-gen PC and on modern OSs.</p>
                    </div>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/coming.png"} alt="img"  className="icons_about" /> 
                    <h3  className='tittle_search'>Every game deserves to shine</h3>
                    <p> As much attention we're giving to pick great games, the same goes to highlighting them on GAME OVER - treating each release as a celebration.</p>
                </div>
            </div>

            <div className='gaming_info'>
            <img src={process.env.PUBLIC_URL+"/assets/aboutImages/user.png"} alt="img"  className="tittle_about" />
            <h1  className='tittle_customer'>Customer-centric approach</h1>
            <p className='selection-text'>Delivering a user-friendly support enriched with additional customer benefits.</p>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/support.png"} alt="img"  className="icons_about" /> 
                    <h3  className='tittle_customer'>Stellar support</h3>
                    <p> We bring you the comfort in knowing that anytime you need help, we're right here for you. Our customer support team works in-house round-the-clock solving all games-related issues.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/cashback.png"} alt="img"  className="icons_about" /> 
                    <h3  className='tittle_customer'>No risk, full refunds</h3>
                    <p> Feel safe about your purchase - get your money back if a game doesn't work for you, cancel pre-orders, and get a refund on games in development within 30 days of purchase - no strings attached.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/contact.png"} alt="img_contact"  className="icons_about" /> 
                    <h3  className='tittle_customer'>Team contact</h3>
                    <p> Have a question, need help or you just want to talk about great PC games? Reach out on GAMEOVER forums, tweet at us or drop us a message on Facebook, and we'll get back to you.</p>
                </div>
            </div>

            <div className='gaming_info'>
            <img src={process.env.PUBLIC_URL+"/assets/aboutImages/more.png"} alt="img_more"  className="tittle_about" />
            <h1 className='tittle_more'>More</h1>
            <p className='selection-text'>Making a difference how you buy and play games, with freedom of choice and a hassle-free experience.</p>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/owner.png"} alt="img_owner"  className="icons_about" /> 
                    <h3 className='tittle_more'>Owning the things you buy</h3>
                    <p>We don't believe in controlling you and your games. Here, you won't be locked out of titles you paid for, or constantly asked to prove you own them - this is DRM-free gaming.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/settings.png"} alt="img"  className="icons_about" /> 
                    <h3 className='tittle_more'>An optional gaming client</h3>
                    <p>  GAME OVER Galaxy is the tailor-made optional client that adds features like cloud saves, update roll-backs, crossplay, achievements, is a convenient way to install & update games, and stay in touch with friends.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/miles.png"} alt="img"  className="icons_about" /> 
                    <h3 className='tittle_more'>Always go further with the user</h3>
                    <p> We're a company of gamers and we build GAME OVER as a platform we, as gamers, want to use - hence our unique approach to DRM, selection of the best in gaming, refunds program and more.</p>
                </div>
            </div>
            <div className='div_partners' >
               <p className='partners-text'>OUR PARTNERS AND ALLIES</p>
               <div className='images_partner'>
               <div className='logo_partner'>
               <img src={process.env.PUBLIC_URL+"/assets/aboutImages/unity.png"} alt="img" 
                className="partners" />
                </div>
                <div className='logo_partner'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/ea.png"} alt="img" 
                className="partners" />
                 </div>
                 <div className='logo_partner'>
               <img src={process.env.PUBLIC_URL+"/assets/aboutImages/capcom.png"} alt="img" 
                className="partners" />
                </div>
                <div className='logo_partner'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/play.png"} alt="img" 
                className="partners" />
                 </div>
                 <div className='logo_partner'>
               <img src={process.env.PUBLIC_URL+"/assets/aboutImages/ubisoft.png"} alt="img" 
                className="partners" />
                </div>
                <div className='logo_partner'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/neogeo.png"} alt="img" 
                className="partners" />
                 </div>
                 <div className='logo_partner'>
               <img src={process.env.PUBLIC_URL+"/assets/aboutImages/2k.png"} alt="img" 
                className="partners" />
                </div>
                <div className='logo_partner'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/konami.png"} alt="img" 
                className="partners" />
                 </div>
                 <div className='logo_partner'>
               <img src={process.env.PUBLIC_URL+"/assets/aboutImages/activision.png"} alt="img" 
                className="partners" />
                </div>
                <div className='logo_partner'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/nintendo.png"} alt="img" 
                className="partners" />
                 </div>
                 </div>
            </div>
        </div>
        </>

    );
}
