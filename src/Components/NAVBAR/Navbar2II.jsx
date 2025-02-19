function Navbar2II({ setFilterObject }) {
  const handleFilterChange = (key, value) => {
    setFilterObject((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div>
      <div className="bg-blue-700 text-white flex justify-center z-57">
        <ul className="menu menu-horizontal px-1 z-[1]">
          <li>
            <span className="text-blue-300">Explore By</span>
          </li>


          {/* Fuel Type */}
          <li>
            <details>
              <summary>Fuel</summary>
              <ul className="p-2 bg-blue-700">
                {["CNG", "Diesel", "EV", "Petrol"].map((fuel, index) => (
                  <li key={index} onClick={() => handleFilterChange("Fuel", fuel)}>
                    <a>{fuel}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          {/* Transmission Type */}
          <li>
            <details>
              <summary>Transmission</summary>
              <ul className="p-2 bg-blue-700">
                {["AMT", "Manual", "Cvt"].map((Transmission, index) => (
                  <li key={index} onClick={() => handleFilterChange("Transmission", Transmission)}>
                    <a>{Transmission}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          {/* Body Type */}
          <li>
            <details className="hidden md:block">
              <summary>Body Type</summary>
              <ul className="p-2 bg-blue-700">
                {["HatchBack", "Premium HatchBack", "MPV", "Sedan", "SUV"].map((type, index) => (
                  <li key={index} onClick={() => handleFilterChange("BodyType", type)}>
                    <a>{type}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar2II;
