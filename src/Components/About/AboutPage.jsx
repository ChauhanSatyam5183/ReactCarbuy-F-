import { Link } from "react-router-dom"; // Import Link for navigation

function AboutPage() {
  return (
    <div className="bg-blue-500 min-h-screen">
      {/* Navigation Bar */}
      <div className="absolute top-4 right-4">
        <Link
          to="/" // Redirects to Home page
          className="text-4xl text-white bg-red-500 rounded-full p-2 hover:bg-red-700 transition duration-200"
        >
          X
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Welcome to CarsBuy</h2>
          <p className="text-lg text-gray-600 mb-6">
            CarsBuy is your trusted partner for buying and selling second-hand cars. We aim to make car shopping
            easier, more transparent, and more affordable. Our platform connects you with a wide selection of
            vehicles, allowing you to find the car that fits your budget and needs.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600 mb-6">
            Our mission is simple: To provide an easy and efficient way for individuals to buy and sell second-hand
            cars with peace of mind. We ensure every car listed on our platform is inspected and verified to meet
            the highest quality standards.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Why Choose Us?</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
            <li>Wide Selection of Quality Cars</li>
            <li>Transparent Pricing</li>
            <li>Hassle-Free Buying & Selling Process</li>
            <li>Trusted by Thousands of Happy Customers</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-700 mb-4 mt-6">Contact Us</h3>
          <p className="text-lg text-gray-600">
            If you have any questions or need assistance, feel free to contact us at{" "}
            <a href="mailto:support@carsbuy.com" className="text-blue-500 hover:underline">
              support@carsbuy.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
