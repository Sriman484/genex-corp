import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Home as HomeIcon,
  ChevronRight
} from "lucide-react";
import logo from "../assets/logo.png";

// Reusable Input Component
const FormField = ({ id, label, type = "text", req = false, placeholder = "", error, value, onChange }) => (
  <li className="flex flex-col">
    <label htmlFor={id} className="mb-1 font-semibold">{label}</label>
    <input
      id={id}
      name={id}
      type={type}
      required={req}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full p-3 rounded-md border ${error ? "border-red-500" : "border-gray-400"}`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </li>
);

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    cname: "",
    industry: "",
    mobile: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    if (name === "name" && !value.trim()) error = "Name is required.";
    if (name === "designation" && !value.trim()) error = "Designation is required.";
    if (name === "mobile") {
      if (!value.trim()) {
        error = "Mobile number is required.";
      } else if (!/^[6-9]\d{9}$/.test(value)) {
        error = "Please enter a valid 10-digit mobile number starting with 6-9.";
      }      
    }
    if (name === "email") {
      if (!value.trim()) {
        error = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Email address is invalid.";
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate live as the user types
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        designation: "",
        cname: "",
        industry: "",
        mobile: "",
        email: "",
        message: ""
      });
    }
  };

  return (
    <div className="innerPage font-sans text-gray-800 bg-gray-50">
      <header className="py-6 mb-8 shadow-inner">
        <div className="max-w-310 mx-auto">
          <nav className="inline-block rounded-lg bg-red-50">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 px-5 py-3">
              <li className="inline-flex items-center">
                <Link to="/" className="inline-flex items-center text-sm font-medium text-red-500 hover:text-red-300">
                  <HomeIcon size={14} className="mr-2.5" />
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight size={12} className="mx-1 text-gray-500" />
                  <Link to="/support" className="ms-1 text-sm font-medium text-gray-700">Support</Link>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl font-semibold text-center">Get in touch</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5">
        <section className="mb-8 p-6 bg-red-50 rounded-lg shadow-md">
          <blockquote className="italic text-lg border-l-4 border-red-600 pl-4 text-gray-700">
            Learn to get in touch with the silence within yourself, and know that everything in life has purpose.
          </blockquote>
        </section>

        <section className="flex flex-col lg:flex-row gap-10 mb-20">
          <div className="flex-1 bg-white shadow-md p-8 rounded-lg">
            <h2 className="text-3xl text-red-500 font-semibold text-center mb-10">Contact Us</h2>

            <form id="contact_form" noValidate onSubmit={handleSubmit}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField id="name" label="Name*" req value={formData.name} onChange={handleChange} error={errors.name} />
                <FormField id="designation" label="Designation*" req value={formData.designation} onChange={handleChange} error={errors.designation} />
                <FormField id="cname" label="Company Name" value={formData.cname} onChange={handleChange} error={errors.cname} />
                <FormField id="industry" label="Industry Vertical" value={formData.industry} onChange={handleChange} error={errors.industry} />
                <FormField id="mobile" label="Mobile No*" type="tel" req placeholder="10 digit mobile Number" value={formData.mobile} onChange={handleChange} error={errors.mobile} />
                <FormField id="email" label="Email*" type="email" req placeholder="you@example.com" value={formData.email} onChange={handleChange} error={errors.email} />

                <li className="col-span-full flex flex-col">
                  <label htmlFor="message" className="mb-1 font-semibold">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md border border-gray-400"
                  />
                </li>
              </ul>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="px-8 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <aside className="w-full lg:w-1/3 bg-white p-8 rounded-lg shadow-md text-gray-600">
            <img src={logo} alt="Genexcorp Logo" className="w-100 h-20 mb-6 mx-auto" />
            <h3 className="text-lg text-red-600 font-semibold mb-4">Corporate Office</h3>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-6 h-6 text-red-600 flex-shrink-0" />
              <address className="not-italic">
                VT Plaza, 4th Floor, KPHB Colony, Kukatpally, Road # 1,<br />
                Hyderabad - 500085, Telangana, India
              </address>
            </div>

            <p className="flex items-center gap-3 mb-3">
              <Phone className="w-6 h-6 text-red-600 flex-shrink-0" />
              <a href="tel:+919920779995" className="hover:underline">+91-9920779995</a>
            </p>

            <p className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-red-600 flex-shrink-0" />
              <a href="mailto:hr@genexcorp.com" className="hover:underline">hr@genexcorp.com</a>
            </p>

            <h3 className="text-lg font-semibold mb-4 text-red-500">About Genexcorp</h3>
            <p>
              Some believe in the power of numbers. Some believe in the power of technology. We believe in the power of
              people, power of human touch which brings best out of the best and the impact people can have on technology.
            </p>
            <div className="flex space-x-4 mt-10 justify-center">
              <a href="https://www.facebook.com" className="hover:text-blue-500">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-sky-400">
                <Twitter size={20} />
              </a>
              <a href="mailto:info@genexcorp.com" className="hover:text-red-500">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com" className="hover:text-blue-300">
                <Linkedin size={20} />
              </a>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default Support;
