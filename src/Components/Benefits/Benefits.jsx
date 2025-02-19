import { useState } from "react";
import Cards2 from "../Card/Cards2"; // Ensure correct import

function Benefits() {
 
  // eslint-disable-next-line no-unused-vars
  const [benefits, setBenefits] = useState([
    { img: "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/BuyAndSellTab/assets/200-point-inspection-desktopV2.jpg?q=85", heading: "Inspection", p: "Every car is carefully handpicked." },
    { img: "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/BuyAndSellTab/assets/1-year-warranty-desktopV2.jpg?q=85", heading: "Certified Cars", p: "Checked by experts for quality assurance." },
    { img: "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/BuyAndSellTab/assets/money-back-desktopV2.jpg?q=85", heading: "Easy Financing", p: "Flexible EMI options available." },
    { img: "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/BuyAndSellTab/assets/fixed-price-desktopV2.jpg?q=85", heading: "Easy Financing", p: "Flexible EMI options available." }
  ]);

  return (
    <div >
      <h2 className="text-center text-4xl text-white font-bold my-8">
        <span className="text-red-500">CarsBuy </span>Benefits
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="carousel-item mx-4 my-4">
            <Cards2 benefit={benefit} /> {/* Pass each benefit item */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
