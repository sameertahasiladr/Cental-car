import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here (e.g., API call)
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactDetails = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Address",
      value: "Shetgaonkar Building, Opposite MPT Officer's Club, Headland Sada, Vasco-da-Gama, Goa 403804",
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "rentocargoa@gmail.com",
      link: "mailto:rentocargoa@gmail.com",
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+91 8308798764",
      link: "tel:+918308798764",
    },
  ];

  return (
    <>
      {/* Contact Us Section */}
      <div className="container-fluid py-5 contact-section">
        <div className="container py-5">
          <div className="perspective-wrapper">
            <h1 className="display-4 text-center mb-5 text-primary wow animate__riseUp3DText" data-wow-delay="0.1s">
              Contact Us
            </h1>
          </div>

          {/* Contact Details */}
          <div className="row g-4 mb-5">
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow animate__fadeInUp"
                data-wow-delay={`0.₹{(index % 3) + 3}s`}
              >
                <div className="contact-add-item p-4">
                  <div className="contact-icon mb-3">
                    <i className={`₹{detail.icon} fa-2x text-primary`}></i>
                  </div>
                  <h5 className="mb-2 text-dark">{detail.title}</h5>
                  {detail.link ? (
                    <a href={detail.link} className="text-muted">
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-muted mb-0">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="row g-5 mt-5">
            <div className="col-lg-6 wow animate__fadeInLeft" data-wow-delay="0.3s">
              <div className="contact-form-card p-5">
                <div className="perspective-wrapper">
                  <h3 className="text-center mb-3 text-dark wow animate__riseUp3DText" data-wow-delay="0.3s">
                    Send Us a Message
                  </h3>
                </div>
                <p className="fs-5 text-center text-muted mb-4 wow animate__fadeInUp" data-wow-delay="0.3s">
                  Get in Touch with Cental Car Rental
                </p>
                <div onSubmit={handleSubmit} className="contact-form">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="message" className="form-label">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow animate__fadeInRight" data-wow-delay="0.3s">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.947215162614!2d73.82558431479116!3d15.398563389304664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1f2b8b5b7e5%3A0x5a8b3c8e4d2e3f4!2sShetgaonkar%20Building%2C%20Headland%20Sada%2C%20Vasco-da-Gama%2C%20Goa%20403804%2C%20India!5e0!3m2!1sen!2sus!4v1697041234567!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Cental Car Rental Location"
                className="map-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;