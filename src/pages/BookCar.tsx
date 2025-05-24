import React from 'react';
import { Link } from 'react-router-dom';

const BookCar: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking submitted!");
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="perspective-wrapper">
          <h1 className="display-4 text-center mb-5 text-primary wow animate__riseUp3DText" data-wow-delay="0.1s">
            Book Your Car
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="wow animate__fadeInUp" data-wow-delay="0.3s">
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="pickupLocation" className="form-label">Pick-up Location</label>
              <input
                type="text"
                id="pickupLocation"
                className="form-control"
                placeholder="Pick-up Location"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="dropoffLocation" className="form-label">Drop-off Location</label>
              <input
                type="text"
                id="dropoffLocation"
                className="form-control"
                placeholder="Drop-off Location"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="pickupDate" className="form-label">Start Date</label>
              <input
                type="date"
                id="pickupDate"
                className="form-control"
                placeholder="Start Date"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="dropoffDate" className="form-label">End Date</label>
              <input
                type="date"
                id="dropoffDate"
                className="form-control"
                placeholder="End Date"
                required
              />
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary w-100 mb-3">Book Now</button>
              <Link to="/rental-cars" className="btn btn-secondary">
                Back to Cars
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookCar;