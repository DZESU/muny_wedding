import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import React from 'react';
import HomePage from './View/HomePage';
import HeaderApp from './Compoment/Header';
import Footer from './Compoment/Footer';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


function App() {
  const slides = [
    { title: 'First item', description: 'Lorem ipsum' },
    { title: 'Second item', description: 'Lorem ipsum' },
    { title: 'Third item', description: 'Lorem ipsum' },
    { title: 'Fouth item', description: 'Lorem ipsum' }
  ];

  return (
    <div >
      <Router>
        <HeaderApp />
        <div>
          {/* ------------------------------------------ */}
          {/* -----------Count Down Thingy-------------- */}
          {/* ------------------------------------------ */}
          <section class="text-gray-500 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 sm:w-1/4 w-1/2">
                  <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">2.7K</h2>
                  <p class="leading-relaxed">Users</p>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                  <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">1.8K</h2>
                  <p class="leading-relaxed">Subscribes</p>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                  <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">35</h2>
                  <p class="leading-relaxed">Downloads</p>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                  <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">4</h2>
                  <p class="leading-relaxed">Products</p>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------ */}
          {/* ------------ Slide ----------------- */}
          {/* ------------------------------------------ */}

          {/* https://nemrut.co/blog/how-to-create-carousel-slider-using-alpine-js-tailwindcss */}
          {/* https://www.npmjs.com/package/react-responsive-carousel */}

          <div>
            <Slider infinite={true} autoplay={3000}>
              {slides.map((slide, index) =>
                <div key={index}>
                  <h2>{slide.title}</h2>
                  <div>{slide.description}</div>
                </div>
              )}
            </Slider>
          </div>
          {/* ------------------------------------------ */}
          {/* ------------ Map ----------------- */}
          {/* ------------------------------------------ */}

          <section class="text-gray-500 bg-gray-900 body-font relative">
            <div class="absolute inset-0 bg-gray-900">
              <iframe title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.806607477387!2d104.90384555!3d11.5553238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951106e84cf15%3A0xec5dee7b6592801f!2zMTHCsDMzJzIyLjEiTiAxMDTCsDU0JzIwLjUiRQ!5e0!3m2!1sen!2skh!4v1603729505636!5m2!1sen!2skh" width="100%" height="100%" frameborder="0"></iframe>
            </div>
            <div class="container px-5 py-20 mx-auto flex">

            </div>
          </section>
          {/* ------------------------------------------ */}
          {/* ------------ Wish Thingy ----------------- */}
          {/* ------------------------------------------ */}

          <section class="text-gray-500 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="p-4 lg:w-1/3">
                  <div class="h-full bg-gray-800 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">CATEGORY</h2>
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">Raclette Blueberry Nextious Level</h1>
                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <a class="text-orange-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      <span class="text-gray-600 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
            </span>
                      <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
            </span>
                    </div>
                  </div>
                </div>
                <div class="p-4 lg:w-1/3">
                  <div class="h-full bg-gray-800 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">CATEGORY</h2>
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">Ennui Snackwave Thundercats</h1>
                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <a class="text-orange-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      <span class="text-gray-600 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
            </span>
                      <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
            </span>
                    </div>
                  </div>
                </div>
                <div class="p-4 lg:w-1/3">
                  <div class="h-full bg-gray-800 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">CATEGORY</h2>
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">Selvage Poke Waistcoat Godard</h1>
                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <a class="text-orange-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      <span class="text-gray-600 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
            </span>
                      <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
            </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------ */}
          {/* ------------------------------------------ */}
          {/* ------------------------------------------ */}


          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>

        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
