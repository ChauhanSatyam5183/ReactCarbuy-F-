import { useState } from "react";
import Navbar from "../NAVBAR/Navbar";
import Navbar2II from "../NAVBAR/Navbar2II";
import { Link } from "react-router-dom";
import Banner2 from "../Banner2/Banner2";

function BuyCar() {
  // State should be an object, NOT an array of objects
  const [filterObject, setFilterObject] = useState({
    PriceRange: "",
    Fuel: "",
    KmDriven: "",
    BodyType: "",
    Transmission: "",
  });

  return (
    <div>
      <Navbar />
      {/* Pass the correct prop name */}
      <Navbar2II setFilterObject={setFilterObject} />

      <div className="mt-10 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          Were delighted to have you
          <span className="text-pink-500"> here! :)</span>
        </h1>

        <p className="mt-5">
          Our Team offers the Best Car Buying experience designed to empower you.
        </p>

        <Link to={"/"}>
          <button className="mt-3 bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-500 duration-300">
            BACK
          </button>
        </Link>

        {/* Fixed URL (using correct property names) */}
        <Banner2
          URL2={`https://reactcarbuy.onrender.com/car/filter/jk?BodyType=${filterObject.BodyType}&FuelType=${filterObject.Fuel}&Price=${filterObject.PriceRange}&Transmission=${filterObject.Transmission}`}
          heading={"Your Selected Cars"}
        />
      </div>
    </div>
  );
}

export default BuyCar;
