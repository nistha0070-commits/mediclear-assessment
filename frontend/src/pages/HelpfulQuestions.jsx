import { useNavigate } from "react-router-dom";

function HelpfulQuestions() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Helpful Questions</h1>
      <p className="subtitle">
        These questions can help users speak with a pharmacist, GP, or nurse.
      </p>

      <div className="info-box"><p>What is this medicine used for?</p></div>
      <div className="info-box"><p>When should I take this medicine?</p></div>
      <div className="info-box"><p>Are there side effects I should watch for?</p></div>
      <div className="info-box"><p>Can I take this medicine with my other medicines?</p></div>

      <button onClick={() => navigate("/plan-ready")}>
        Finish Plan
      </button>
    </div>
  );
}

export default HelpfulQuestions;
