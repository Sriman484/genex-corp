import React, { useState } from "react";
import { X } from "lucide-react";

export default function EnrollForm({ setShowModal }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    courseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    courseType: "",
  });

  const validateFullName = (name) => {
    if (!name.trim()) return "Full Name is required.";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) return "Phone Number is required.";
    if (!/^[6-9]\d{9}$/.test(phone))
      return "Please enter a valid 10-digit phone number starting with 6-9.";
    return "";
  };

  const validateCourseType = (course) => {
    if (!course) return "Please select a course type.";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    let errorMsg = "";
    if (name === "fullName") errorMsg = validateFullName(value);
    else if (name === "email") errorMsg = validateEmail(value);
    else if (name === "phone") errorMsg = validatePhone(value);
    else if (name === "courseType") errorMsg = validateCourseType(value);

    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullNameError = validateFullName(formData.fullName);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const courseError = validateCourseType(formData.courseType);

    setErrors({
      fullName: fullNameError,
      email: emailError,
      phone: phoneError,
      courseType: courseError,
    });

    if (fullNameError || emailError || phoneError || courseError) return;

    alert("Enrollment Completed!");
    setShowModal(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <X className="w-6 h-6" />
      </button>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Enrollment</h2>
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="courseType">
            Course Type
          </label>
          <select
            id="courseType"
            name="courseType"
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.courseType ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.courseType}
            onChange={handleChange}
          >
            <option value="">Select a course type</option>
            <option value="change-tech">Change in Technology - $450 per person</option>
            <option value="fresher">Fresher - $500 per person</option>
          </select>
          {errors.courseType && (
            <p className="text-red-500 text-sm mt-1">{errors.courseType}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            className="w-full px-4 py-2 rounded-lg border border-gray-300"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
        >
          Complete Enrollment
        </button>
      </form>
    </div>
  );
}
