import React, {  useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';


const PageComponent = () => {
  const { instance, accounts  } = useMsal();
  const [isLoggedIn, setIsLoggedIn] = useState(false);  

  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  };

  const handleLogoutRedirect = () => {
    instance.logoutRedirect();
  };

    useEffect(() => {
        // Page cursors
        document.body.addEventListener("mousemove", function (event) {
            var cursorElements = document.querySelectorAll(".cursor");
            cursorElements.forEach(function (cursor) {
                cursor.style.left = event.clientX + "px";
                cursor.style.top = event.clientY + "px";
            });
        });

        var cursor2 = document.getElementById("cursor2"),
            cursor3 = document.getElementById("cursor3");

        function addHover() {
            if (cursor2 && cursor3) {
                cursor2.classList.add("hover");
                cursor3.classList.add("hover");
            }
        }

        const aboutText = document.querySelector(".about-text");
        if (aboutText) {
          aboutText.addEventListener('click', function () {
          document.body.classList.add("about-on");
        });
        }

        const contactText = document.querySelector(".contact-text");
          if (contactText) {
            contactText.addEventListener('click', function () {
            document.body.classList.add("contact-on");
          });
        }


        function removeHover() {
            if (cursor2 && cursor3) {
                cursor2.classList.remove("hover");
                cursor3.classList.remove("hover");
            }
        }

        removeHover();
        var hoverTargets = document.querySelectorAll(".hover-target");
        hoverTargets.forEach(function (target) {
            target.addEventListener("mouseover", addHover);
            target.addEventListener("mouseout", removeHover);
        });

        // About page
        document.querySelector(".about-text").addEventListener('click', function () {
            document.body.classList.add("about-on");
        });
        document.querySelector(".about-close").addEventListener('click', function () {
            document.body.classList.remove("about-on");
        });

        // Contact page
        document.querySelector(".contact-text").addEventListener('click', function () {
            document.body.classList.add("contact-on");
        });
        document.querySelector(".contact-close").addEventListener('click', function () {
            document.body.classList.remove("contact-on");
        });

        // Travel portfolio page
        document.querySelector(".travel").addEventListener('click', function () {
            document.body.classList.add("travel-on");
        });
        document.querySelector(".travel-close").addEventListener('click', function () {
            document.body.classList.remove("travel-on");
        });

        // Wildlife portfolio page
        document.querySelector(".wildlife").addEventListener('click', function () {
            document.body.classList.add("wildlife-on");
        });
        document.querySelector(".wildlife-close").addEventListener('click', function () {
            document.body.classList.remove("wildlife-on");
        });

        // Nature portfolio page
        document.querySelector(".nature").addEventListener('click', function () {
            document.body.classList.add("nature-on");
        });
        document.querySelector(".nature-close").addEventListener('click', function () {
            document.body.classList.remove("nature-on");
        });

        document.querySelector(".rabbit").addEventListener('click', function () {
            document.body.classList.add("rabbit-on");
        });
        document.querySelector(".rabbit-close").addEventListener('click', function () {
            document.body.classList.remove("rabbit-on");
        });

        setIsLoggedIn(accounts.length > 0 );
    }, [accounts ]); // Empty dependency array ensures that this effect runs only once after initial render

    

    return (
        <div>
          <div className="hero-section">
            <div className="section-right">
            {isLoggedIn ? (
                  <button onClick={handleLogoutRedirect}>Sign Out</button>
                
                  ) : (
                  <button onClick={handleLoginRedirect}>Sign In</button>
                  )}
            </div>
            <div className="about-text hover-target">about</div>
                <div className="contact-text hover-target">contact</div>
                  <div className="section-center">
                    <div className="container-fluid">
                      <div className="row justify-content-center">
                        <div className="col-12 text-center">
                          <h1>Paws</h1>
                        </div>
                        <div className="col-12 text-center mb-2">
                          <div className="dancing">take care</div>
                        </div>
                       
                        <div className="col-12 text-center mt-4 mt-lg-6">
                          
                            <p>
                              <span className="travel hover-target">Birds</span> 
                              <span className="wildlife hover-target">Kitten</span> 
                              <span className="nature hover-target">Puppy</span>
                              <span className="rabbit hover-target" style={{display: isLoggedIn ? '' : 'none'}}>Rabbit</span>
                            </p>
                        </div>
                          
                      </div>
                    </div>
  
                  </div>
                </div>
              <div className="about-section">	
                <div className="about-close hover-target" />
                  <div className="section-center">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-12 text-center">
                          <img src="" alt="" />
                        </div>
                        <div className="col-lg-8 text-center mt-4">
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                        </div>
                        <div className="col-12 text-center">
                          <p><span>Karan</span></p>
                        </div>
                      </div>
                    </div>
                  </div>		
                </div>
              <div className="contact-section">	
                <div className="contact-close hover-target" />
                  <div className="section-center">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-12 text-center">
                          <a href="ds" className="hover-target">pawn@takecare.com</a>
                        </div>
                        <div className="col-12 text-center social mt-4">
                          <a href="dz" className="hover-target">Instagram</a>
                          <a href="sdd" className="hover-target">Twitter</a>
                          <a href="dsd" className="hover-target">Facebook</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              <div className="travel-section">	
                <div className="travel-close hover-target" />
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-12 text-center">
                        <h3>Birds</h3>
                      </div>
                      <div className="col-12 mt-3 text-center">
                <p><span>Pet birds are different than cats and dogs, but they are not any more difficult to keep healthy. The right pet bird diet, a clean cage, fresh bird food and water, safe bird toys, exercise, and lots of attention are the basics</span></p>
              </div>
              <div className="col-12 text-center">
                <p>
                  focal length: 22.5mm<br />
                  aperture: ƒ/5.6<br />
                  exposure time: 1/1000<br />
                  ISO: 80
                </p>
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="wildlife-section">	
          <div className="wildlife-close hover-target" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h3>Kitten</h3>
              </div>
              <div className="col-12 mt-3 text-center">
                <p><span>Keep kittens warm.Provide kittens with adequate hydration and nutrition.Keep kittens clean.Provide socialization with people and with foster mates.Do your best to protect them from infectious disease.</span></p>
              </div>
              <div className="col-12 text-center">
                <p>
                  focal length: 22.5mm<br />
                  aperture: ƒ/5.6<br />
                  exposure time: 1/1000<br />
                  ISO: 80
                </p>
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="nature-section">	
          <div className="nature-close hover-target" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h3>Puppy</h3>
              </div>
              <div className="col-12 mt-3 text-center">
                <p><span>Find a Good Vet.Make the Most of Your First Vet Visit.Shop for Quality Food.Establish a Bathroom Routine.Watch For Early Signs of Illness.Teach Obedience.Be Sociable.</span></p>
              </div>
              <div className="col-12 text-center">
                <p>
                  focal length: 22.5mm<br />
                  aperture: ƒ/5.6<br />
                  exposure time: 1/1000<br />
                  ISO: 80
                </p>
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="rabbit-section">	
          <div className="rabbit-close hover-target" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h3>Rabbit</h3>
              </div>
              <div className="col-12 mt-3 text-center">
                <p><span>Provide fresh water.A balanced diet.Fresh greens.Treats and fruits.Monitor their health.Exercise and play.Grooming.Love and affection.</span></p>
              </div>
              <div className="col-12 text-center">
                <p>
                  focal length: 22.5mm<br />
                  aperture: ƒ/5.6<br />
                  exposure time: 1/1000<br />
                  ISO: 80
                </p>
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
              <div className="col-md-6 col-lg-4">
                <img src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="cursor" id="cursor" />
        <div className="cursor2" id="cursor2" />
        <div className="cursor3" id="cursor3" />
        {/* Link to page
================================================== */}
     
        </div>
    );
}

export default PageComponent;
