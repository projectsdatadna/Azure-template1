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
            cursor3 = document.getElementById("cursor3"),
            cursor4 = document.getElementById("cursor4");
            

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
                cursor4.classList.remove("hover");
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
                      <img src="https://media.discordapp.net/attachments/968967076100325496/1187309781204078643/oddroch_angry_bird_a5ba18b4-a4ae-4045-b9fc-1e7e409cfa30.png?ex=65e03f66&is=65cdca66&hm=bc58b0ca6c131b080b921c414f55647894669025c54c36e0c0bc456ce455241d&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/1072899954525356072/1209509140188241930/blatch06_a_very_realistic_bird_HD_4k_bird_picture_5ab913a2-4646-4e0f-a5b8-381d724b4fe9.png?ex=65e72e2a&is=65d4b92a&hm=b99206069fc0d658334b18e2b59df56329a47ccb9e2e7fbe6d696c91201de748&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/1072899954525356072/1177968054102138890/samson94251_rio_bird_cartoon_90a2fc88-5f05-4fb7-a565-f72026dda28e.png?ex=65e32d3d&is=65d0b83d&hm=a68e2bf72fdd0bcf0d822d81c0891d6dd5cb64665573e388ba8430ec3204bfc0&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/1072899954525356072/1165124502754164866/cassandral_20425_pixar_cartoon_realistic_jungle_australie_color_ced7450b-ee61-4ea2-b61b-eaa9d83c8d77.png?ex=65e29840&is=65d02340&hm=7e0dcbd5935b4569d2bf94ceb78f387aacf2e2793e13ba8ed737a98ab6c83c9e&=&format=webp&quality=lossless&width=437&height=437" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/945077390839787570/1160355633711829063/darkstar5765_cotopaxi_bird_942345b8-2225-47fe-9dbf-3bd3180519ef.png?ex=65e3b3e5&is=65d13ee5&hm=644b1583f2d967f80b96e465851d79b50d647eb3db8b6cf273bb1088c9047f0d&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/1072899954525356072/1148253677480587485/tuanweb_46140_As_I_continued_my_journey_I_unexpectedly_came_acr_7ce6aa2d-0166-4779-a0a9-9abf1637d4cb.png?ex=65e5d192&is=65d35c92&hm=b2e4f244506a9fdd4bd118fc19c9047426d3d7424d9413162f3e4989cbfc377c&=&format=webp&quality=lossless&width=593&height=593" alt="" />
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
                      <img src="https://media.discordapp.net/attachments/945077390839787570/1200205922748858428/rickcarson_cute_adorable_Sisyphean_kitten_71d22840-bc8e-4efa-b9b8-66e3099a5eef.png?ex=65e1055e&is=65ce905e&hm=0c3474d5e5d424e291e4eec63839373b512b653540fd518ea9e47ad73eb3ebbd&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/945077390839787570/1200205909415170129/rickcarson_cute_adorable_Sisyphean_kitten_443011f6-68b2-4249-af71-712226d94e2b.png?ex=65e1055b&is=65ce905b&hm=da2bdc2ac4918e6d4c1aa710e83ee8c8536fbdfa2b4ccd0f30fb253705abd0be&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/1016325265992990852/1162093743416029234/Vincent_Merkutio_Two_Little_black_kittens_d9be9ea1-6085-4376-91f8-73a8cb6f80e2.png?ex=65e0cc23&is=65ce5723&hm=cc83a831fe59456054a2bbcd06039044de411fbeaceda82d4a19070c1ff48ca2&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/1072899954525356072/1149015476463206500/madiha87_Photorelaistic_white_cat_with_blue_and_yellow_eyes__mo_d64e1389-7baf-4e50-8913-b758a9c3caba.png?ex=65e8970d&is=65d6220d&hm=87de6af59f6a3f583da53dffcae4a535fb91b87fb02b4feb8a90a6cc7ce326dd&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/945077390839787570/1132542018040647731/richdog_caldera_coat_kittens_4987a332-f4b1-4af3-9a55-50e8f5bb77bb.png?ex=65e407f2&is=65d192f2&hm=d8cad9310c09c57d0398122bb415a03d4653e63b1a29f2998ed4d5dfc468ad56&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/1072899954525356072/1078931424461201519/chirpangel_realistic_kitten_high_quality_image_cutre_29a7d65c-aad3-4039-8c51-db3a72562f24.png?ex=65e2cbb1&is=65d056b1&hm=c8e7d67565aae46380285cf803e6f8565a06a3a60e9f9ce7d2da5a0f8728c2ea&=&format=webp&quality=lossless&width=593&height=593" alt="" />
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
                      <img src="https://media.discordapp.net/attachments/989265640869204028/1189204977038667797/springblossoms28_as_a_puppy_4d1ea92c-7ff0-4c40-8cbc-15ccc93c4e18.png?ex=65e72470&is=65d4af70&hm=3c32d978fce756abb4d5cc8ebfb104666800f5cf3557ca758b66c2a5aa1e46ae&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/1072899954525356072/1172742478131101736/manalo720_an_adorabe_puppy_outside_c875b0e8-9131-4ec0-b8c2-4d9328037957.png?ex=65e29f8b&is=65d02a8b&hm=d86376d8956aa52972fd2904d7d72d2dcbed87f95b12c5dc910123d28a125710&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/1072899954525356072/1164924793213157457/sphamart_puppy_yoga_cf588ee2-6c45-491a-8f46-ac2a118adfa5.png?ex=65e1de41&is=65cf6941&hm=4c94c176b85e41b8dcd5f68dec80c12afdb2f4ac24c45cb55556ca9598fddd04&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/1072899954525356072/1114650474164002947/dmc321_watercolour_Pug_puppy_eed94604-60b2-4a68-807a-a32c9bc61665.png?ex=65e38aa6&is=65d115a6&hm=f0f1fe017d749c3813a7a62bebbde22baa434b0da61b6c0aa65cbd46f663bcaa&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/1072899954525356072/1114649763510497391/dmc321_watercolour_Pug_puppy_866d4e33-ce07-4345-93a0-3c906161e80d.png?ex=65e389fc&is=65d114fc&hm=84967ab2228fd7824104ea9536cb4e6302f08bc81d630a28ca0257d076f86135&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/1072899954525356072/1114579526521991268/dmc321_watercolour_Labrador_Retriever_puppy_d1e4cef0-9fad-43d7-99e3-08a03c32eb98.png?ex=65e34893&is=65d0d393&hm=c4ac08c408ec24ec105718c264e0b861c425ccef4354d1ebda03a53f72b9e265&=&format=webp&quality=lossless&width=593&height=593" alt="" />
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
                      <img src="https://media.discordapp.net/attachments/1072899954525356072/1188527746083737691/jonashan_24294_adorable_black_rabbit_4a59f685-f964-4961-9f69-09da98109148.png?ex=65e4adb8&is=65d238b8&hm=05b71d511a97660950573a0f7885220ba96cfa9e68320a11b715c6ca07cecfc7&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/945077390839787570/1175486129731031090/Adriann__rabbit_6e6766af-5c62-4adc-aa9a-4ec27199d0ef.png?ex=65e36044&is=65d0eb44&hm=f3225d82ca2e118cfe60e69a60d8a0e33fb35d8c609120b2f0be36b3e4297404&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/1014157453824376835/1162795998255534120/flowers_12834_Detailed_digital_portrait_Pixar_animation_charact_cdebbcfd-71e0-41f2-8cd0-4396b58e0fbc.png?ex=65e35a29&is=65d0e529&hm=a244a40fa53d68ae9b19a4721c6bfe347ebb57ad8167383ff1cd0c997a228410&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/1014157453824376835/1162795956849348668/flowers_12834_Detailed_digital_portrait_Pixar_animation_charact_e8a7ad05-d86a-4268-af2a-07e453ce276d.png?ex=65e35a1f&is=65d0e51f&hm=56b25d63607dc2422d9ca02cba680ed87524f6f38ff9ff36b191dccc7ab01b77&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/1072899954525356072/1159586082162217080/ron777_a_kiddy_portrait_of_a_baby_rabbit_white_background_741746ba-2343-4255-a861-199294cc1af6.png?ex=65e0e732&is=65ce7232&hm=9549c4168c32f2e076e5ae59ed4531f9c7f2f4e260352cf103094c36b4bba421&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <img src="https://media.discordapp.net/attachments/1072899954525356072/1137051352535674920/adebabs_realistic_young_rabbit_image_4249bbb2-1cec-4dd3-90f9-77f773690820.png?ex=65e1fa97&is=65cf8597&hm=fc0519321bbb6d999cab057365f65a8de79212e908427b89a5e6d6030df335dd&=&format=webp&quality=lossless&width=593&height=593" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cursor" id="cursor" />
              <div className="cursor2" id="cursor2" />
              <div className="cursor3" id="cursor3" />
              <div className="cursor4" id="cursor4" />
        
            
      </div>
        );
}

export default PageComponent;
