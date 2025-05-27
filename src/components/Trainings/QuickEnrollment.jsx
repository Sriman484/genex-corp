import React, { useState } from 'react';

const QuickEnrollment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseType: '',
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';

    if (name === 'fullName') {
      if (!value) error = 'Full name is required';
      else if (value.length < 3) error = 'Name must be at least 3 characters';
    }

    if (name === 'email') {
      if (!value) error = 'Email is required';
      else if (!/^\S+@\S+\.\S+$/.test(value)) error = 'Invalid email format';
    }

    if (name === 'phone') {
      if (!value) error = 'Phone number is required';
      else if (!/^\d{10,}$/.test(value)) error = 'Invalid phone number';
    }

    if (name === 'courseType') {
      if (!value) error = 'Please select a course';
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    Object.keys(formData).forEach((field) => validateField(field, formData[field]));

    const hasErrors = Object.values(errors).some((error) => error);
    if (!hasErrors && Object.values(formData).every((field) => field)) {
      alert('Form submitted successfully!');
      // Reset form (optional)
      setFormData({ fullName: '', email: '', phone: '', courseType: '' });
      setErrors({});
    } else {
      alert('Please correct the errors in the form.');
    }
  };

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-2xl shadow-md p-8 sticky top-8">
        <h2 className="text-xl font-bold mb-6 text-gray-900">Quick Enrollment</h2>
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Course Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course Type</label>
            <select
              name="courseType"
              value={formData.courseType}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.courseType ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select a course type</option>
              <option value="web">Web Class - $800</option>
              <option value="classroom5">Classroom (5 people) - $1500</option>
              <option value="classroom10">Classroom (10 people) - $2500</option>
            </select>
            {errors.courseType && <p className="text-red-500 text-sm mt-1">{errors.courseType}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
          >
            Enroll Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuickEnrollment;
