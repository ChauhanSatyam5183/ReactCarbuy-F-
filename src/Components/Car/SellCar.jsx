import Navbar from "../NAVBAR/Navbar";

function SellCar() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Our Team Will Contact you Soon");
  };

  return (
    <div>
    <Navbar/>
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md max-w-md mx-auto mt-7">
      <h2 className="text-xl font-bold mb-4">Sell Your Car</h2>
      <input type="text" name="carName" placeholder="Car Name" className="w-full p-2 mb-2 border rounded" required />
      <input type="text" name="brandName" placeholder="Brand Name" className="w-full p-2 mb-2 border rounded" required />
      <select name="fuelType" className="w-full p-2 mb-2 border rounded">
        <option value="CNG">CNG</option>
        <option value="DIESEL">DIESEL</option>
        <option value="PETROL">PETROL</option>
        <option value="EV">EV</option>
      </select>
      <input type="text" name="registrationNumber" placeholder="Registration Number" className="w-full p-2 mb-2 border rounded" required />
      <input type="text" name="ownerSerialNo" placeholder="Owner Serial No" className="w-full p-2 mb-2 border rounded" required />
      <input type="text" name="kiloMeterDriven" placeholder="Kilometer Driven" className="w-full p-2 mb-2 border rounded" required />
      <input type="text" name="modelYear" placeholder="Model Year" className="w-full p-2 mb-2 border rounded" required />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
    </form>
    </div>
  );
}

export default SellCar;
