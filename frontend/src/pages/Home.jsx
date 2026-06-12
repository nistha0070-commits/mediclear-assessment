import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="center-page">
      <h1>MediClear</h1>
      <p className="subtitle">
        A simple medicine support app for patients after hospital discharge.
      </p>

      <div className="info-box">
        <p>
          MediClear helps users save medicine details, review their daily plan,
          and prepare useful questions for healthcare professionals.
        </p>
      </div>

      <button onClick={() => navigate("/add-medicine")}>
        Get Started
      </button>
    </div>
  );
}

export default Home;
