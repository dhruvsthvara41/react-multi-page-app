import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUs.css"; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];

    const updatedMessages = [...storedMessages, formData];


    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));


    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 h2">Contact Us</h2>

      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-6 contact-info mb-4">
          <h5>Address</h5>
          <p>14/3 Harsidh Chamber, near Oswal Hotel, Ahmedabad 380015</p>

          <h5>Phone</h5>
          <p>+91 99134 91888 | +91 99133 91888</p>

          <h5>Email</h5>
          <p>info@aasthatoursandtravels.com</p>
        </div>

        <div className="col-lg-6 col-md-6 contact-form">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-danger w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
