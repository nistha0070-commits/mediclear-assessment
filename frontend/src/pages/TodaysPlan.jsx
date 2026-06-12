import { useNavigate } from "react-router-dom";

function TodaysPlan() {
  const navigate = useNavigate();
  const savedPlan = JSON.parse(localStorage.getItem("mediclear_plan"));

  return (
    <div>
      <h1>Today’s Plan</h1>
      <p className="subtitle">Your saved medicine plan is shown below.</p>

      {!savedPlan ? (
        <div className="info-box">
          <p>No medicine plan saved yet.</p>
        </div>
      ) : (
        <div className="info-box">
          <h2>{savedPlan.medicine_name}</h2>
          <p><strong>Patient:</strong> {savedPlan.full_name}</p>
          <p><strong>Email:</strong> {savedPlan.email}</p>
          <p><strong>Dosage:</strong> {savedPlan.dosage}</p>
          <p><strong>Timing:</strong> {savedPlan.timing}</p>
          <p><strong>Notes:</strong> {savedPlan.notes}</p>
        </div>
      )}

      <button onClick={() => navigate("/helpful-questions")}>
        View Helpful Questions
      </button>

      <button className="secondary" onClick={() => navigate("/add-medicine")}>
        Add Another Medicine
      </button>
    </div>
  );
}

export default TodaysPlan;
