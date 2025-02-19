/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "../NAVBAR/Navbar";

function Product() {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;
  console.log("Hello", car);

  if (!car) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center text-red-500 text-2xl font-bold">
          Car data not found! 🚗❌
        </div>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
        >
          🔙 Go Back
        </button>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(
    car.Images?.[0] || "https://via.placeholder.com/400"
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 mt-10">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 overflow-auto">
            
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
            {car.Name}
          </h2>
          <p className="text-lg text-gray-600 text-center">Company{car.BrandName}</p>

          {/* Image & Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Image Slider Section */}
            <div className="flex flex-col items-center">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="w-full h-80"
              >
                {car.Images?.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Car ${index}`}
                      className="w-full h-80 object-cover rounded-lg shadow-md"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnail Images */}
              <div className="flex mt-4 space-x-2">
                {car.Images?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Car ${index}`}
                    className={`w-20 h-16 object-cover rounded-md cursor-pointer border-2 transition-transform hover:scale-110 ${
                      selectedImage === image ? "border-red-500" : ""
                    }`}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>

            {/* Car Details Section */}
            <div className="space-y-4">
              <p className="text-2xl font-semibold text-red-500">PRICE ₹{car.Price}</p>

              <div className="grid grid-cols-2 gap-4">
                <p className="text-gray-700">
                  <span className="font-semibold">🚘 Kilometers Driven:</span> {car.KiloDriven} km
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">👤 Owner Number:</span> {car.OwnerSerial}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">⛽ Fuel Type:</span> {car.FuelType}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">🚗 Body Type:</span> {car.BodyType}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">📍 Registration City:</span> {car.RegistrationCity}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">🔢 Registration Number:</span> {car.RegistrationNumber}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-800 mt-4 text-sm italic">
                {car.description || "No additional details available for this car."}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex space-x-4">
                <button   onClick={() => alert("Our Team will contact you soon")} className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all transform hover:scale-105">
                  🛒 BOOK Now
                </button>
                {/* <button className="px-6 py-3 border border-gray-400 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all transform hover:scale-105">
                  ❤️ Add to Wishlist
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
