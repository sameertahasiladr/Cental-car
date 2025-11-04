import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";
import { useEffect, useRef } from "react";

function Home() {
  const features = [
    {
      icon: "fas fa-bolt",
      title: "Fast & Reliable Service",
      description:
        "Cental Car Rental provides a fast and reliable service when it comes to hiring a rental car at affordable prices. We are the best at what we do.",
    },
    {
      icon: "fas fa-car",
      title: "Huge Selection of Cars",
      description:
        "Cental Car Rental has a fleet of 8+ cars available for rental, giving you the best choice for your trip. Select based on the type of car you need.",
    },
    {
      icon: "fas fa-dollar-sign",
      title: "Simple Per Day Rental Price",
      description:
        "All cars are rented based on per-day fixed pricing. A day is counted from 9am to the next day 9am, making price calculations easy for you.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Fully Sanitized and Timely Services",
      description:
        "Our cars are sanitized regularly and serviced on a regular basis by authorized service centers, ensuring very low chances of breakdowns or other issues.",
    },
    {
      icon: "fas fa-clock",
      title: "We Are Available 24/7",
      description:
        "We understand your travel plans can include traveling at off hours, day or night. So we are available whenever you need help with booking or anything else.",
    },
    {
      icon: "fas fa-users",
      title: "17000+ Happy Customers",
      description:
        "So far, we have served more than 17,000 customers for their car rental needs. This makes us a preferred company to rent a car from.",
    },
  ];

  const howItWorksSteps = [
    {
      icon: "fas fa-search",
      title: "Search & Select Your Car",
    },
    {
      icon: "fas fa-calendar-check",
      title: "Make a Booking",
    },
    {
      icon: "fas fa-car-side",
      title: "Pickup & Drive",
    },
    {
      icon: "fas fa-parking",
      title: "Drop-off",
    },
  ];

  const benefits = [
    {
      icon: "fas fa-car",
      title: "Huge Fleet of Cars",
      description:
        "Select from a wide array of available cars. Best suited for friends, families, couples, and business travel.",
    },
    {
      icon: "fas fa-wrench",
      title: "Well Maintained Cars",
      description:
        "All of our cars are timely serviced by authorized service centers, ensuring a minimum chance of breakdowns and other issues. Quality assurance is guaranteed from the start.",
    },
    {
      icon: "fas fa-headset",
      title: "24x7 Support",
      description:
        "We are there for you 24/7 to assist with booking and support you after you’ve rented a car with us, ensuring you always get the best service.",
    },
  ];

  const locations = [
    {
      city: "Vasco-da-Gama",
      spots: ["Airport", "Railway Station", "Lodge (any)", "Bus Stand", "Beach (any)"],
    },
    {
      city: "Margao",
      spots: ["Railway Station", "Lodge (any)", "Bus Stand", "Beach (any)"],
    },
    {
      city: "Panjim",
      spots: ["Lodge (any)", "Bus Stand", "Beach (any)"],
    },
  ];

  const stats = [
    { icon: "fas fa-map-marker-alt", value: 52, label: "Locations", suffix: "+" },
    { icon: "fas fa-users", value: 15, label: "Customers Daily", suffix: "+" },
    { icon: "fas fa-car", value: 100, label: "Vehicle Types", suffix: "+" },
    { icon: "fas fa-user-check", value: 11000, label: "Customers", suffix: "+" },
  ];

  // Guidelines for the Guidelines Section
  const guidelines = [
    {
      icon: "fas fa-id-card",
      title: "Valid Driving License Required",
      description: "You must present a valid driving license at the time of car pickup. International travelers must carry an International Driving Permit.",
    },
    {
      icon: "fas fa-user-shield",
      title: "Security Deposit",
      description: "A refundable security deposit is required for every booking. The amount varies based on the car type and rental duration.",
    },
    {
      icon: "fas fa-gas-pump",
      title: "Fuel Policy",
      description: "Cars are provided with a certain fuel level and must be returned with the same level to avoid additional charges.",
    },
  ];

  // Select 4 cars (2 rental, 2 luxury) for display on Home page
  const featuredCars = cars.filter((car) =>
    ["Toyota Corolla", "Honda Civic", "Mercedes-Benz S-Class", "BMW 7 Series"].includes(car.name)
  );

  // Refs for stat elements
  const statRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const statsSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Dynamically import CountUp.js
    const loadCountUp = async () => {
      const { CountUp } = await import('countup.js');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              statRefs.current.forEach((ref, index) => {
                if (ref && !ref.dataset.animated) {
                  const stat = stats[index];
                  const countUp = new CountUp(ref, stat.value, {
                    duration: 2,
                    suffix: stat.suffix,
                  });
                  if (!countUp.error) {
                    countUp.start();
                    ref.dataset.animated = "true";
                  }
                }
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (statsSectionRef.current) {
        observer.observe(statsSectionRef.current);
      }

      return () => {
        if (statsSectionRef.current) {
          observer.unobserve(statsSectionRef.current);
        }
      };
    };

    loadCountUp();
  }, []);

  return (
    <>
      {/* Hero Banner Section */}
      <div className="container-fluid bg-breadcrumb py-5 hero-section">
        <div className="container text-center py-5 perspective-wrapper">
          <h1 className="display-3 text-white mb-4 wow animate__riseUp3DText hero-title" data-wow-delay="0.1s">
            Welcome to Cental Car Rental
          </h1>
          <p className="fs-4 text-white mb-5 wow animate__fadeInUp hero-text" data-wow-delay="0.3s">
            Rent from a wide range of vehicles, from economy to luxury, with ease and convenience.
          </p>
          <a href="/book-car" className="btn btn-primary btn-lg hero-btn wow animate__bounceIn" data-wow-delay="0.5s">
            Book Now
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="container-fluid py-5 feature-section">
        <div className="container py-5">
          <div className="perspective-wrapper">
            <h1 className="display-4 text-center mb-5 text-primary wow animate__riseUp3DText" data-wow-delay="0.1s">
              Why Choose Us
            </h1>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow animate__fadeInUp"
                data-wow-delay={`0.₹{(index % 3) + 3}s`}
              >
                <div className="feature-card text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className={`₹{feature.icon} fa-3x`}></i>
                  </div>
                  <h5 className="mb-3 text-dark">{feature.title}</h5>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Car Grid Section */}
      <div className="container-fluid py-5 car-section">
        <div className="container py-5">
          <div className="perspective-wrapper">
            <h1 className="display-4 text-center mb-5 text-primary wow animate__riseUp3DText" data-wow-delay="0.1s">
              Our Fleet
            </h1>
          </div>
          <div className="row g-4 perspective-wrapper">
            {featuredCars.map((car, index) => (
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
          <div className="text-center mt-5">
            <Link to="/rental-cars" className="btn btn-primary btn-lg wow animate__bounceIn" data-wow-delay="0.5s">
              View All Cars
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container-fluid py-5 how-it-works-section">
        <div className="container py-5">
          <div className="perspective-wrapper">
            <h1 className="display-4 text-center mb-3 text-primary wow animate__riseUp3DText" data-wow-delay="0.1s">
              Our Easy Rental Process
            </h1>
          </div>
          <p className="fs-5 text-center text-muted mb-5 wow animate__fadeInUp" data-wow-delay="0.3s">
            Simple to follow process with easy steps
          </p>
          <div className="row g-4">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 wow animate__fadeInUp"
                data-wow-delay={`0.₹{(index % 4) + 3}s`}
              >
                <div className="how-it-works-card text-center p-3">
                  <div className="how-it-works-icon mb-2">
                    <i className={`₹{step.icon} fa-2x text-primary`}></i>
                  </div>
                  <h5 className="mb-0 text-dark">{step.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="container-fluid py-5 locations-section">
        <div className="container py-5">
          <div className="perspective-wrapper">
            <h1 className="display-4 text-center mb-3 text-primary wow animate__riseUp3DText" data-wow-delay="0.1s">
              Our Locations
            </h1>
          </div>
          <p className="fs-5 text-center text-muted mb-5 wow animate__fadeInUp" data-wow-delay="0.3s">
            We serve multiple locations across entire Goa. So travelling to get to a car rental should be least of concerns for you.
          </p>
          <div className="row g-4 mb-5">
            {locations.map((location, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow animate__fadeInUp"
                data-wow-delay={`0.₹{(index % 3) + 3}s`}
              >
                <div className="location-card p-4">
                  <h5 className="mb-3 text-dark">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    {location.city}
                  </h5>
                  <ul className="list-unstyled text-muted">
                    {location.spots.map((spot, spotIndex) => (
                      <li key={spotIndex} className="mb-2">
                        <i className="fas fa-circle text-primary me-2" style={{ fontSize: "0.5rem" }}></i>
                        {spot}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="row g-4" ref={statsSectionRef}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 wow animate__zoomIn"
                data-wow-delay={`0.₹{(index % 4) + 3}s`}
              >
                <div className="stat-card text-center p-4">
                  <i className={`₹{stat.icon} fa-3x text-primary mb-3`}></i>
                  <h3
                    className="text-dark mb-2 stat-value"
                    ref={(el) => { statRefs.current[index] = el; }}
                  >
                    0
                  </h3>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guidelines Section */}
      <div className="container-fluid py-5 guidelines-section">
        <div className="container py-5">
          <div className="perspective-wrapper">
            <h1 className="display-4 text-center mb-5 text-primary wow animate__riseUp3DText" data-wow-delay="0.1s">
              Guidelines
            </h1>
          </div>
          <div className="row g-4">
            {guidelines.map((guideline, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow animate__fadeInUp"
                data-wow-delay={`0.₹{(index % 2) + 3}s`}
              >
                <div className="guideline-card p-4">
                  <h5 className="mb-3 text-dark">
                    <i className={`₹{guideline.icon} text-primary me-2`}></i>
                    {guideline.title}
                  </h5>
                  <p className="text-muted mb-0">{guideline.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Makes Us the Best Section */}
      <div className="container-fluid py-5 best-section">
        <div className="container py-5">
          <div className="perspective-wrapper">
            <h1 className="display-4 text-center mb-3 text-primary wow animate__riseUp3DText" data-wow-delay="0.1s">
              What Makes Us the Best
            </h1>
          </div>
          <p className="fs-5 text-center text-muted mb-5 wow animate__fadeInUp" data-wow-delay="0.3s">
            Cental Car Rental Benefits
          </p>
          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow animate__fadeInUp"
                data-wow-delay={`0.₹{(index % 3) + 3}s`}
              >
                <div className="best-card text-center p-4">
                  <div className="best-icon mb-3">
                    <i className={`₹{benefit.icon} fa-3x text-primary`}></i>
                  </div>
                  <h5 className="mb-3 text-dark">{benefit.title}</h5>
                  <p className="text-muted">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;