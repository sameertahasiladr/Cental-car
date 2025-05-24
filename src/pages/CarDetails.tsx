import { useParams, Link } from "react-router-dom";
import { cars } from "../data/cars";

function CarDetails() {
  const { id } = useParams<{ id: string }>();
  const car = cars.find((car) => car.id === parseInt(id || "0"));

  if (!car) {
    return (
      <div className="container-fluid py-5">
        <div className="container py-5 text-center perspective-wrapper">
          <h1 className="display-4 text-primary mb-4 wow animate__riseUp3DText" data-wow-delay="0.1s">
            Car Not Found
          </h1>
          <p className="fs-5 text-muted mb-5 wow animate__fadeInUp" data-wow-delay="0.3s">
            Sorry, the car you're looking for doesn't exist.
          </p>
          <Link to="/rental-cars" className="btn btn-primary">
            Back to Cars
          </Link>
        </div>
      </div>
    );
  }

  const getFeatureIcon = (feature: string) => {
    switch (feature.toLowerCase()) {
      case "bluetooth":
        return "fab fa-bluetooth-b";
      case "sound system":
      case "premium sound system":
        return "fas fa-volume-up";
      case "abs":
        return "fas fa-shield-alt";
      case "air conditioning":
        return "fas fa-snowflake";
      case "cruise control":
      case "adaptive cruise control":
        return "fas fa-tachometer-alt";
      case "parking sensors":
        return "fas fa-parking";
      case "lane assist":
        return "fas fa-road";
      case "rearview camera":
        return "fas fa-camera";
      case "sunroof":
        return "fas fa-sun";
      case "leather seats":
        return "fas fa-chair";
      case "night vision":
        return "fas fa-eye";
      case "massage seats":
        return "fas fa-spa";
      case "climate control":
        return "fas fa-thermometer-half";
      case "usb adapter":
        return "fas fa-usb";
      case "navigation system":
        return "fas fa-map-marked-alt";
      default:
        return "fas fa-check-circle"; 
    }
  };

  // Helper function to strip "transmission" from display
  const getTransmissionDisplay = (transmission?: string) => {
    if (!transmission) return "N/A";
    return transmission.replace(" transmission", "");
  };

  const carouselId = `car-details-carousel-${car.id}`;

  return (
    <div className="container-fluid py-5 car-details-container">
      <div className="container py-5">
        {/* Car Title */}
        <div className="perspective-wrapper">
          <h1 className="display-4 text-center mb-4 text-primary wow animate__riseUp3DText car-details-title" data-wow-delay="0.1s">
            Rent {car.name} in Goa
          </h1>
        </div>

        {/* Image Gallery */}
        <div className="perspective-wrapper">
          <h3 className="text-center mb-4 text-dark wow animate__riseUp3DText car-details-section-heading" data-wow-delay="0.3s">
            {car.name} Image Gallery
          </h3>
        </div>
        <div className="mb-5 wow animate__fadeIn car-details-gallery" data-wow-delay="0.5s">
          {car.images.length > 1 ? (
            <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {car.images.map((image, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <img
                      src={image}
                      className="d-block w-100"
                      alt={`${car.name} ${index + 1}`}
                      style={{ height: "400px", objectFit: "cover" }}
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
                data-bs-target={`#${carouselId}`}
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#${carouselId}`}
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
              style={{ height: "400px", objectFit: "cover" }}
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800";
              }}
            />
          )}
        </div>

        {/* Car Details */}
        <div className="perspective-wrapper">
          <h3 className="text-center mb-4 text-dark wow animate__riseUp3DText car-details-section-heading" data-wow-delay="0.3s">
            {car.name}
          </h3>
        </div>
        <div className="row mb-5 wow animate__fadeIn car-details-info" data-wow-delay="0.5s">
          <div className="col-lg-6 col-md-6 mb-4">
            <p className="fs-5">
              <i className="fas fa-cogs me-2"></i>
              {car.engine || "N/A"}
            </p>
            <p className="fs-5">
              <i className="fas fa-cogs me-2"></i>
              {getTransmissionDisplay(car.transmission)}
            </p>
            <p className="fs-5">
              <i className="fas fa-road me-2"></i>
              {car.drive || "N/A"}
            </p>
            <p className="fs-5">
              <i className="fas fa-gas-pump me-2"></i>
              {car.fuel || "N/A"}
            </p>
          </div>
          <div className="col-lg-6 col-md-6 mb-4">
            <p className="fs-5">
              <i className="fas fa-dollar-sign me-2"></i>
              {car.price}
            </p>
          </div>
        </div>

        {/* Rental Terms */}
        {car.rentalTerms && (
          <>
            <div className="perspective-wrapper">
              <h3 className="text-center mb-4 text-dark wow animate__riseUp3DText car-details-section-heading" data-wow-delay="0.3s">
                Rental Terms
              </h3>
            </div>
            <div className="row mb-5 wow animate__fadeIn car-details-rental-terms" data-wow-delay="0.5s">
              <div className="col-lg-6 col-md-6 mb-4">
                <p className="fs-5">
                  <i className="fas fa-credit-card me-2"></i>
                  <strong>Payment:</strong> {car.rentalTerms.payment}
                </p>
                <p className="fs-5">
                  <i className="fas fa-calendar-check me-2"></i>
                  <strong>Booking:</strong> {car.rentalTerms.booking}
                </p>
                <p className="fs-5">
                  <i className="fas fa-tachometer-alt me-2"></i>
                  <strong>Maximum Kms per Day:</strong> {car.rentalTerms.maxKms}
                </p>
                <p className="fs-5">
                  <i className="fas fa-money-bill-wave me-2"></i>
                  <strong>Additional Distance Fee:</strong> {car.rentalTerms.additionalDistanceFee}
                </p>
                <p className="fs-5">
                  <i className="fas fa-coins me-2"></i>
                  <strong>Additional Usage Fee:</strong> {car.rentalTerms.additionalUsageFee}
                </p>
              </div>
              <div className="col-lg-6 col-md-6 mb-4">
                <p className="fs-5">
                  <i className="fas fa-user-shield me-2"></i>
                  <strong>Minimum Driver Age:</strong> {car.rentalTerms.minDriverAge}
                </p>
                <p className="fs-5">
                  <i className="fas fa-id-card me-2"></i>
                  <strong>Minimum Required Driving Experience:</strong> {car.rentalTerms.minDrivingExperience}
                </p>
                <p className="fs-5">
                  <i className="fas fa-clock me-2"></i>
                  <strong>Minimum Rental Period:</strong> {car.rentalTerms.minRentalPeriod}
                </p>
              </div>
            </div>
          </>
        )}

        {/* Features */}
        {car.features && car.features.length > 0 && (
          <>
            <div className="perspective-wrapper">
              <h3 className="text-center mb-4 text-dark wow animate__riseUp3DText car-details-section-heading" data-wow-delay="0.3s">
                Features
              </h3>
            </div>
            <div className="row mb-5 wow animate__fadeIn car-details-features" data-wow-delay="0.5s">
              <div className="col-12">
                <ul className="list-unstyled">
                  {car.features.map((feature, index) => (
                    <li key={index} className="mb-2 fs-5">
                      <i className={`${getFeatureIcon(feature)} me-2`}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}

        {/* Book Now Button */}
        <div className="text-center wow animate__bounceIn car-details-book-now" data-wow-delay="0.5s">
          <Link to="/book-car" className="btn btn-primary btn-lg">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;