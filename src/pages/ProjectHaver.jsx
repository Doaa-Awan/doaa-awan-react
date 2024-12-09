import { useNavigate } from "react-router-dom";

function ProjectHaver() {
  const navigate = useNavigate();

  return (
    <div>
      <h3 className="pgcontainer">Non-Conformance Reporting System</h3>
      <p>Details about the Non-Conformance Reporting System project...</p>
      <button onClick={() => navigate('/Projects')}>Back to Projects</button>
    </div>
  );
}

export default ProjectHaver;