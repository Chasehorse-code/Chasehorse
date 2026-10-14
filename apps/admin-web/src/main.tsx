import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main>
      <h1>ChaseHorse Admin</h1>
      <p>Admin foundation</p>
      <p className="note">Approval workflows and task operations are not implemented.</p>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

