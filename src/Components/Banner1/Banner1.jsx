import { Link } from "react-router-dom";

function Banner1() {
    return (
      <div>
        {/* Carousel container with height set */}
        <div className="carousel w-full md:w-[100vw] h-[500px] md:h-[600px] relative">
          
          {/* First Slide */}
          <div
            id="slide1"
            className="carousel-item relative w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/TopBanner/assets/desktop_sell_car_v7.jpg?w=1500')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional dark overlay */}
            <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between items-center w-full text-white">
              <div className="flex flex-col items-start">
                <h1 className="text-4xl font-bold mx-24">Hello</h1>
                <p className="text-lg mt-2 mx-24">Explore your car selling options with Spinny.</p>
                <Link to="/BuyCar"> <a href="#slide2" className="btn bg-red-500btn-primary text-white mt-8 mx-20 bg-red-700 border-none hover:bg-red-500">
                  BUYCAR
                </a> </Link>
              </div>
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
              </div>
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
  
          {/* Second Slide */}
          <div
            id="slide2"
            className="carousel-item relative w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/TopBanner/assets/desktop_gofar_v7.jpg?w=1500')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional dark overlay */}
            <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between items-center w-full text-white">
              <div className="flex flex-col items-start">
                <h1 className="text-4xl font-bold mx-24">Go Far</h1>
                <p className="text-lg mt-2 mx-24">Take the next step with Spinny.<br/> Your journey starts here.</p>
                <Link to="/SellCar"> <a href="#slide3" className="btn btn-primary mt-4  mx-20 bg-red-700  text-white border-none hover:bg-red-500">
                  SELLCAR
                </a> </Link>
              </div>
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
              </div>
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
  
          {/* Third Slide */}
          <div
            id="slide3"
            className="carousel-item relative w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/TopBanner/assets/desktop_finance_v7.jpg?w=1500')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional dark overlay */}
            <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between items-center w-full text-white">
              <div className="flex flex-col items-start">
                <h1 className="text-4xl font-bold mx-24">Finance Your Dreams</h1>
                <p className="text-lg mt-2 mx-24">Unlock financing options<br/> and get<br>

                </br> the car of your dreams.</p>
               <Link to="/AboutPage"> <a href="#slide1" className="btn btn-primary mt-4 bg-red-700 mx-20 text-white border-none hover:bg-red-500">
                 About us
                </a></Link>
              </div>
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
              </div>
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default Banner1;
  