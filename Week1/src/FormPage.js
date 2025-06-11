import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhar: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const countries = {
    India: ["Delhi", "Mumbai", "Bangalore"],
    USA: ["New York", "Los Angeles", "Chicago"],
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!formData.phone || !/^\+\d{1,3}\s\d{10}$/.test(formData.phone))
      newErrors.phone = "Use format +91 9876543210.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.pan || !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.pan))
      newErrors.pan = "PAN must be valid (e.g., ABCDE1234F).";
    if (!formData.aadhar || !/^\d{12}$/.test(formData.aadhar))
      newErrors.aadhar = "Aadhar must be 12-digit number.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/success", { state: formData });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: "center" }}>React Form with Validation</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {[
          ["firstName", "First Name"],
          ["lastName", "Last Name"],
          ["username", "Username"],
          ["email", "Email"],
          ["pan", "PAN No."],
          ["aadhar", "Aadhar No."],
        ].map(([field, label]) => (
          <div style={styles.inputGroup} key={field}>
            <label>{label}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              style={styles.input}
            />
            <p style={styles.error}>{errors[field]}</p>
          </div>
        ))}

        <div style={styles.inputGroup}>
          <label>Password</label>
          <div style={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              style={styles.toggleBtn}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <p style={styles.error}>{errors.password}</p>
        </div>

        <div style={styles.inputGroup}>
          <label>Phone (+CountryCode Number)</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
            style={styles.input}
          />
          <p style={styles.error}>{errors.phone}</p>
        </div>

        <div style={styles.inputGroup}>
          <label>Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">-- Select Country --</option>
            {Object.keys(countries).map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
          <p style={styles.error}>{errors.country}</p>
        </div>

        <div style={styles.inputGroup}>
          <label>City</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">-- Select City --</option>
            {(countries[formData.country] || []).map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
          <p style={styles.error}>{errors.city}</p>
        </div>

        <button type="submit" style={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "2rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    fontSize: "1rem",
    marginTop: "0.25rem",
  },
  error: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "0.25rem",
  },
  passwordWrapper: {
    display: "flex",
    alignItems: "center",
  },
  toggleBtn: {
    marginLeft: "0.5rem",
    padding: "0.5rem",
    fontSize: "0.9rem",
    cursor: "pointer",
  },
  submitBtn: {
    marginTop: "1rem",
    padding: "0.75rem",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default FormPage;