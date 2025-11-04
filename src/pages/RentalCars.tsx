import { useState } from "react";
import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";

function RentalCars() {
  // State for the selected category
  const [selectedCategory, setSelectedCategory] = useState("All Cars");

  // Define categories
  const categories = ["All Cars", "SUV", "Off Road", "Sedan"];

  // Filter cars based on the selected category
  const filteredCars = cars.filter((car) => {
    if (selectedCategory === "All Cars") return true;
    return car.type === selectedCategory;
  });

  return (
    <>
      {/* Rental Intro Section */}
      <div className="container-fluid py-5 rental-intro-section">
        <div className="container py-3 perspective-wrapper">
          <h1 className="display-5 text-center mb-4 text-primary wow animate__riseUp3DText" data-wow-delay="0.1s">
            Self Drive Cars on Rent in Goa
          </h1>
          <p className="fs-6 text-center text-white mb-5 wow animate__fadeInUp" data-wow-delay="0.3s">
            Rent self drive cars in Goa for your next trip. Best suited for your travel needs when you want to discover everything yourself and need to save time. No matter if you have planned everything beforehand or not, self driven cars are your best choice for travel in Goa. Best suited for friends, families, couples and business travel. Rent a car and take it anywhere you like within Goa. Simple per day rental pricing giving you an un-bounded renting experience.
          </p>
        </div>
      </div>

      {/* All Cars Section */}
      <div className="container-fluid py-5 car-section">
        <div className="container py-3">
          <div className="perspective-wrapper">
            <h1 className="display-4 text-center mb-5 wow animate__riseUp3DText" data-wow-delay="0.1s">
              All Cars
            </h1>
          </div>

          {/* Category Filter */}
          <div className="row justify-content-center mb-5">
            <div className="col-auto">
              <div className="btn-group" role="group">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`btn ₹{selectedCategory === category ? "btn-primary" : "btn-light"} mx-2`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Car Grid */}
          <div className="row g-4 perspective-wrapper">
            {filteredCars.length > 0 ? (
              filteredCars.map((car, index) => (
                <div
                  key={car.id}
                  className="col-lg-3 col-md-6 wow animate__riseUp3D"
                  data-wow-delay={`0.₹{(index % 4) + 3}s`}
                >
                  <Link to={`/car-details/₹{car.id}`} style={{ textDecoration: "none" }}>
                    <CarCard car={car} />
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p className="fs-5 text-muted">No cars found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RentalCars;