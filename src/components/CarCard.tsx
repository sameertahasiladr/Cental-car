import type { Car } from "../data/cars";
import { Link } from "react-router-dom";

interface CarCardProps {
  car: Car;
}

function CarCard({ car }: CarCardProps) {
  const carouselId = `car-carousel-₹{car.id}`;

  // Helper functions to strip descriptors for cleaner display
  const getTransmissionDisplay = (transmission?: string) => {
    if (!transmission) return "N/A";
    return transmission.replace(" transmission", "");
  };

  const getLuggageDisplay = (luggageCapacity?: string) => {
    if (!luggageCapacity) return "N/A";
    return luggageCapacity.replace(" Luggage", "");
  };

  const getSeatsDisplay = (seats?: string) => {
    if (!seats) return "N/A";
    return seats.replace(" Seats", "");
  };

  return (
    <div className="categories-item">
      <div className="categories-img position-relative overflow-hidden">
        {car.images.length > 1 ? (
          <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {car.images.map((image, index) => (
                <div key={index} className={`carousel-item ₹{index === 0 ? "active" : ""}`}>
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`₹{car.name} ₹{index + 1}`}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800";
                    }}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#₹{carouselId}`}
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#₹{carouselId}`}
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        ) : (
          <img
            src={car.images[0] || "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800"}
            className="img-fluid w-100"
            alt={car.name}
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800";
            }}
          />
        )}
      </div>
      <div className="categories-content p-4">
        <h5 className="text-dark mb-3">{car.name}</h5>
        <div className="categories-review mb-3">
          <i className="fas fa-star text-secondary"></i>
          <i className="fas fa-star text-secondary"></i>
          <i className="fas fa-star text-secondary"></i>
          <i className="fas fa-star text-secondary"></i>
          <i className="fas fa-star text-secondary"></i>
          <span className="ms-2 text-muted text-sm">5.0 (1 Review)</span>
        </div>
        <p className="fs-5 mb-2">
          <i className="fas fa-cogs me-2 text-primary"></i>
          {getTransmissionDisplay(car.transmission)}
        </p>
        <p className="fs-5 mb-2">
          <i className="fas fa-suitcase me-2 text-primary"></i>
          {getLuggageDisplay(car.luggageCapacity)}
        </p>
        <p className="fs-5 mb-2">
          <i className="fas fa-users me-2 text-primary"></i>
          {getSeatsDisplay(car.seats)}
        </p>
        <p className="fs-5 mb-3">
          <i className="fas fa-dollar-sign me-2 text-primary"></i>
          {car.price}
        </p>
        <div className="text-center">
          <Link to="/book-car" className="btn btn-primary">
            Rent Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarCard;