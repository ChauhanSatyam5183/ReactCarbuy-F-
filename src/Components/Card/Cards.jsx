import { useNavigate } from "react-router-dom";

function Cards({ car }) {

   console.log(car);
  const navigate = useNavigate();

 
  const handleCardClick = () => {
    console.log("Car being sent:", car);
    navigate("/Product", { state: { car } }); // ✅ Passing car object correctly
  };

  return (
    <div onClick={handleCardClick} className="cursor-pointer">
      <div className="relative card bg-blue-900 w-96 shadow-xl text-white transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
        <figure className="mt-2">
          <img
            className="rounded-md shadow-lg"
            src={car.Images && car.Images[0] ? car.Images[0] : 'https://via.placeholder.com/400'}
            alt={car.Name || 'Car Image'}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {car.Transmission} {car.Name}
            {car.model_year > 2020 ? <div className="badge badge-secondary"></div> : null}
          </h2>
          <div>{car.brand_name}</div>
          <div className="card-actions flex justify-between items-center">
            <div className="text-white text-lg font-bold rounded-lg">
              <span className="text-red-500">PRICE </span>₹{car.Price}
            </div>
            <div className="flex gap-2">
              <div className="badge badge-outline">{car.BodyType
              }</div>
              <div className="badge badge-outline">{car.KiloDriven} km</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
