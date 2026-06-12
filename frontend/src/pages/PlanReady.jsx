import { useNavigate } from "react-router-dom";

function PlanReady() {
  const navigate = useNavigate();

  return (
    <div className="center-page">
      <h1>Your Plan is Ready</h1>

      <div className="info-box">
        <p>
          Your MediClear medicine plan has been saved. You can review it and
          discuss it with your healthcare professional.
        </p>
      </div>

      <button onClick={() => navigate("/todays-plan")}>
        View Today’s Plan
      </button>

      <button className="secondary" onClick={() => navigate("/")}>
        Back Home
      </button>
    </div>
  );
}

export default PlanReady;
