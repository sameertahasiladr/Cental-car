import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";

function LuxuryCars() {
  const luxuryCars = cars.filter((car) => car.category === "luxury");

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        {/* Introductory Section with Background */}
        <section className="luxury-intro-section">
          <div className="text-center mb-5">
            <h1 className="display-4 text-center mb-4 text-white wow animate__fadeInDown" data-wow-delay="0.1s">
              Luxury Cars
            </h1>
            <p className="fs-5 text-white mb-5 wow animate__fadeInUp" data-wow-delay="0.2s">
              At RentoCar, we believe that every moment of your journey should be cherished, and that's why we provide the best-in-class luxury vehicles to match your style and preferences. Whether it's a self-drive adventure or a chauffeur-driven extravaganza, our fleet of luxury cars is at your disposal.
            </p>
          </div>
        </section>

        {/* Car Listings with 3D Perspective */}
        <div className="row g-4 perspective-wrapper">
          {luxuryCars.map((car, index) => (
            <div
              key={car.id}
              className="col-lg-3 col-md-6 wow animate__riseUp3D"
              data-wow-delay={`0.₹{(index % 4) + 3}s`}
            >
              <Link to={`/car-details/₹{car.id}`} style={{ textDecoration: 'none' }}>
                <CarCard car={car} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LuxuryCars;