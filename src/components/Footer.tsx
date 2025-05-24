import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <div className="container-fluid footer py-3 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-2">
          <div className="row g-3 justify-content-center">
            {/* Contact Info */}
            <div className="col-md-6 col-lg-4 text-center">
              <h5 className="text-white mb-3">Contact Info</h5>
              <p className="mb-1" style={{ fontSize: '0.9rem' }}>
                <i className="fa fa-map-marker-alt me-2"></i>
                Shetgaonkar Building, Opposite MPT Officer's Club, Headland Sada, Vasco-da-Gama, Goa 403804
              </p>
              <p className="mb-1" style={{ fontSize: '0.9rem' }}>
                <a href="mailto:centalcargoa@gmail.com" className="text-white">
                  <i className="fas fa-envelope me-2"></i>
                  centalcargoa@gmail.com
                </a>
              </p>
              <p className="mb-2" style={{ fontSize: '0.9rem' }}>
                <a href="tel:+91830667228" className="text-white">
                  <i className="fas fa-phone me-2"></i>
                  +91 830667228
                </a>
              </p>
              <div className="d-flex justify-content-center">
                <a className="btn btn-secondary btn-sm-square rounded-circle me-2" href="">
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
                <a className="btn btn-secondary btn-sm-square rounded-circle me-2" href="">
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a className="btn btn-secondary btn-sm-square rounded-circle me-2" href="">
                  <i className="fab fa-instagram text-white"></i>
                </a>
                <a className="btn btn-secondary btn-sm-square rounded-circle me-0" href="">
                  <i className="fab fa-linkedin-in text-white"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="row mt-2">
            <div className="col-12 text-center">
              <p className="text-white mb-0" style={{ fontSize: '0.8rem' }}>
                © {new Date().getFullYear()} Cental Car Rental. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;