import React from 'react';
import '../../styles/footer.css';
import { MDBFooter } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Link } from "react-router-dom";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';

export default function Footer() {
  return (
    <MDBFooter className=' p-1  text-lg-start text-light'>

      <section className='height-container-footer'>
        <div className='container text-center text-md-start mt-5'>
          <div className='probar mt-3'>
            <div className='pages-contact'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-2 random'>
              <img src={process.env.PUBLIC_URL+"/assets/footerImages/logofinal.png"} alt="img"  className="logofooter" />
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 font-footer-x'>Pages</h6>
              <div className='pad-links'>
                <Link to={"/home"} className='text-reset font-footer-x'>
                 <HomeIcon className="iconsfooter" /> Home</Link>
              </div>
              <div className='pad-links'>
                <Link to="/games" className='text-reset font-footer-x'> <SportsEsportsIcon className="iconsfooter" />Games</Link>
              </div>
              <div className='pad-links'>
                <Link to="/user" className='text-reset font-footer-x'> <PersonIcon className="iconsfooter" />User</Link>
              </div>
              <div className='pad-links'>
                <Link to="/aboutus" className='text-reset font-footer-x'><GroupIcon className="iconsfooter" /> About Us </Link>
              </div>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 alignContentTitle'>
              <h6 className='text-uppercase fw-bold mb-4 font-footer-x'>Contact</h6>
              <p className='font-footer-x'> New York, NY 10012, US </p>
              <p className='font-footer-x'> gameover.mindhub@gmail.com </p>
              <p className='font-footer-x'> + 01 234 567 88 </p>
              <p className='font-footer-x'> + 01 234 567 89 </p>
              <div className='iconsocial'>
              <a href="https://www.facebook.com/" target='blank' style={{color:"white"}}><FacebookIcon/></a>
              <a href="https://mobile.twitter.com/i/flow/login" target='blank' style={{color:"white"}}><TwitterIcon/></a>
                 <a href= "https://www.youtube.com/" target='blank' style={{color:"white"}}><YouTubeIcon/></a>
                 <a href="https://www.instagram.com/accounts/login/?hl=es&sour..." target='blank'style={{color:"white"}}> <InstagramIcon/></a>
              </div>
            </div>
          </div> 
        </div>
      </div>
      </section>
      {/* <section className='flex-lg-row  d-flex justify-content-cent p-2'>
        <div className='me-5 d-lg-block'>
            <div className='iconsocial'>
              <a href="https://www.facebook.com/" target='blank'><img src={process.env.PUBLIC_URL+"/assets/footerImages/facebook.png"} alt="img"  className="iconsocials" /></a>
                <a href="https://www.instagram.com/accounts/login/?hl=es&sour..." target='blank'> <img  src={process.env.PUBLIC_URL+"/assets/footerImages/instagram.png"} alt="img"  className="iconsocials" /></a>
                <a href= "https://www.youtube.com/" target='blank'> <img src={process.env.PUBLIC_URL+"/assets/footerImages/youtube.png"} alt="img"  className="iconsocials" /></a>
                <a href="https://mobile.twitter.com/i/flow/login" target='blank'><img src={process.env.PUBLIC_URL+"/assets/footerImages/twitter.png"} alt="img"  className="iconsocials" /></a>
                <a href="https://discord.com/login" target='blank'><img src={process.env.PUBLIC_URL+"/assets/footerImages/discord.png"} alt="img"  className="iconsocials" /></a>
                </div>
                </div>
      </section> */}

      <div className=" w-100 hfooter">
        <span className=" text-light">
          © 2022 - Copyright Game Over | All rights reserved.
        </span>
      </div>
    </MDBFooter>
  );
} 
