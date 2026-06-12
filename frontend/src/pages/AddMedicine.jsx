import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMedicine() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    medicine_name: "",
    dosage: "",
    timing: "",
    notes: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("mediclear_plan", JSON.stringify(formData));
    setMessage("Medicine plan saved successfully.");

    setTimeout(() => {
      navigate("/todays-plan");
    }, 700);
  };

  return (
    <div>
      <h1>Add Medicine</h1>
      <p className="subtitle">
        Enter medicine details from the discharge summary.
      </p>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="Enter patient name"
          required
        />

        <label>Email</label>
        <input
          name="email"
          type="text"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />

        <label>Medicine Name</label>
        <input
          name="medicine_name"
          value={formData.medicine_name}
          onChange={handleChange}
          placeholder="Example: Panadol"
          required
        />

        <label>Dosage</label>
        <input
          name="dosage"
          value={formData.dosage}
          onChange={handleChange}
          placeholder="Example: 1 tablet"
          required
        />

        <label>Timing</label>
        <input
          name="timing"
          value={formData.timing}
          onChange={handleChange}
          placeholder="Example: Morning after food"
          required
        />

        <label>Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Extra instructions"
        />

        <button type="submit">Save Medicine Plan</button>
      </form>

      {message && <p className="success-text">{message}</p>}
    </div>
  );
}

export default AddMedicine;
