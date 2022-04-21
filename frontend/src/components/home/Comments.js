import React, { useState } from 'react';
import '../../styles/comments.css';

function Comments() {

return (
    <>
    <div className='container-comments-height'>
    <div className="align-comment">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <div className="face front-face"> <img src="https://esports.as.com/2020/12/24/sk-telecom-t1/Faker-millones-wones-luchar-COVID-19_1422167821_557850_1440x810.jpg" alt="" className="profile"></img>
                        <div className="pt-3 text-uppercase name2"> "HideOnBush" </div>
                        <div className="designation">Favourite game: LoL</div>
                    </div>
                    <div className="face back-face"> <span className="fas fa-quote-left"></span>
                        <div className="testimonial"> I got the best games thanks to this platform, very grateful for the products. </div> <span className="fas fa-quote-right"></span>
                        <div className="testimonial"> For the Horde! </div> <span className="fas fa-quote-right"></span>
                        <div className="stars">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                  <div className="card">
                      <div className="face front-face"> <img src="https://i1.sndcdn.com/artworks-x08NVtm7BBW81Rqh-TLnQ0Q-t500x500.jpg" alt="" className="profile"></img>
                          <div className="pt-3 text-uppercase name2"> "NoobMaster69" </div>
                          <div className="designation">Favourite game: Fortnite</div>
                      </div>
                      <div className="face back-face"> <span className="fas fa-quote-left"></span>
                          <div className="testimonial"> I'm super happy because I got Elden Ring at half price thanks to Game Over</div> <span className="fas fa-quote-right"></span>
                      <div className="stars">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                      </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="card">
                      <div className="face front-face"> <img src="https://d.wattpad.com/story_parts/239/images/13fd7e8707c31c1d.jpg" alt="" className="profile"></img>
                          <div className="pt-3 text-uppercase name2"> "LuffyTheGoat85" </div>
                          <div className="designation">Favourite Game: Elden Ring</div>
                      </div>
                      <div className="face back-face"> <span className="fas fa-quote-left"></span>
                          <div className="testimonial"> I get the best deals at Game Over, and the best community </div> <span className="fas fa-quote-right"></span>
                      <div className="stars">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    </div>
    </div>
    </>
  );
}

export default Comments;
