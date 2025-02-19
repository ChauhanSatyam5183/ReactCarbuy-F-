import { useState, useEffect } from "react";
import Cards from "../Card/Cards";
import axios from "axios";

function Banner2({ URL2, heading }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  
    // Set default URL if URL2 is empty or undefined
    const finalURL = URL2 && URL2.length > 0 ? URL2 : "https://reactcarbuy.onrender.com/car/filter/jk?&BodyType=SUV";
    const finalheading = heading && heading.length > 0 ? heading : "Reacently Viewed";
  useEffect(() => {
    async function fetchCars() {
      try {
        console.log("Fetching cars from:", finalURL);
        const response = await axios.get(finalURL, {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        });

        if (response.data) {
          setCars(response.data.data || []);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }

    fetchCars();
  }, [URL2]); // Re-fetch data when URL2 changes

  return (
    <div>
      <h2 className="text-center text-3xl text-white font-bold my-8">
        {finalheading} <span className="text-red-500">cars!!!!</span>
      </h2>
      {loading ? (
        <div className="flex justify-center my-8">
          <div className="animate-spin w-8 h-8 border-4 border-blue-900 border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <div className="carousel rounded-box flex flex-wrap justify-evenly">
          {cars.length > 0 ? (
            cars.map((car, index) => (
              <div key={index} className="carousel-item mx-4 my-4">
                <Cards car={car} />
              </div>
            ))
          ) : (
            <p className="text-white text-center">No cars available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Banner2;
