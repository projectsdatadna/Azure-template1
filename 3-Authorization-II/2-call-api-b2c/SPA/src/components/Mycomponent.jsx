import React, {  useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';
import bird1Img from '../image/bird1.jpg';
import bird2Img from '../image/bird2.jpg';
import bird3Img from '../image/bird3.jpg';
import bird4Img from '../image/bird4.jpg';
import bird5Img from '../image/bird5.jpg';
import bird6Img from '../image/bird6.jpg';
import kitten1Img from '../image/kittens1.jpg';
import kitten2Img from '../image/kittens2.jpg';
import kitten3Img from '../image/kittens3.jpg';
import kitten4Img from '../image/kittens4.jpg';
import kitten5Img from '../image/kittens5.jpg';
import kitten6Img from '../image/kittens6.jpg';
import puppy1Img from '../image/puppys1.jpg';
import puppy2Img from '../image/puppys2.jpg';
import puppy3Img from '../image/puppys3.jpg';
import puppy4Img from '../image/puppys4.jpg';
import puppy5Img from '../image/puppys5.jpg';
import puppy6Img from '../image/puppys6.jpg';

import rabbit1Img from '../image/rabbits1.jpg';
import rabbit2Img from '../image/rabbits2.jpg';
import rabbit3Img from '../image/rabbits3.jpg';
import rabbit4Img from '../image/rabbits4.jpg';
import rabbit5Img from '../image/rabbits5.jpg';
import rabbit6Img from '../image/rabbits6.jpg';

import profileImg from '../image/prff.png';


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
            cursor3 = document.getElementById("cursor3")
           
            

        function addHover() {
            if (cursor2 && cursor3 ) {
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
            if (cursor2 && cursor3 ) {
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
            document.querySelector(".travel-close").style.display = 'block';
        });
        document.querySelector(".travel-close").addEventListener('click', function () {
            document.body.classList.remove("travel-on");
            document.querySelector(".travel-close").style.display = 'none';
        });

        // Wildlife portfolio page
        document.querySelector(".wildlife").addEventListener('click', function () {
            document.body.classList.add("wildlife-on");
            document.querySelector(".wildlife-close").style.display = 'block';
        });
        document.querySelector(".wildlife-close").addEventListener('click', function () {
            document.body.classList.remove("wildlife-on");
            document.querySelector(".wildlife-close").style.display = 'none';
        });

        // Nature portfolio page
        document.querySelector(".nature").addEventListener('click', function () {
            document.body.classList.add("nature-on");
            document.querySelector(".nature-close").style.display = 'block';
        });
        document.querySelector(".nature-close").addEventListener('click', function () {
            document.body.classList.remove("nature-on");
            document.querySelector(".nature-close").style.display = 'none';
        });

      
        //rabbit portfolio page
       document.querySelector(".rabbit").addEventListener('click', function () {
            document.body.classList.add("rabbit-on");
            document.querySelector(".rabbit-close").style.display = 'block';
        });
        document.querySelector(".rabbit-close").addEventListener('click', function () {
            document.body.classList.remove("rabbit-on");
            document.querySelector(".rabbit-close").style.display = 'none';
        }); 

        setIsLoggedIn(accounts.length > 0 );
    }, [accounts]); // Empty dependency array ensures that this effect runs only once after initial render

    
    

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
                       
                      <div className="col-12 text-center mt-4 mt-lg-5">
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
                        <img src={profileImg} alt="" />
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
                        <a href="ds" className="hover-target">Paws</a>
                      </div>
                      <div className="col-12 text-center social mt-4">
                        <a href="dz" className="hover-target">Instagram</a>
                        <a href="sdd" className="hover-target">Twitter</a>
                        <a href="dsd" className="hover-target">Facebook</a>
                        <a href="dsfa" className="hover-target">Whatsapp</a>
                        <a href="dsf" className="hover-target">Gmail</a>
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
                      <img src={bird1Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={bird2Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={bird3Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={bird4Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={bird5Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={bird6Img} alt="" />
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
                      <img src={kitten1Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={kitten2Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={kitten3Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={kitten4Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={kitten5Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={kitten6Img} alt="" />
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
                      <img src={puppy1Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={puppy2Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={puppy3Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={puppy4Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={puppy5Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={puppy6Img} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rabbit-section" >	
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
                      <img src={rabbit1Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={rabbit2Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={rabbit3Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={rabbit4Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={rabbit5Img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src={rabbit6Img} alt="" />
                    </div>
                  </div>
                </div>
              </div> 
              <div className="cursor" id="cursor" />
              <div className="cursor2" id="cursor2" />
              <div className="cursor3" id="cursor3" />
              
        
            
      </div>
    
        );
}

export default PageComponent;
