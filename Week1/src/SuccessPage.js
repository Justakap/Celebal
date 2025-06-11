import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function SuccessPage() {
  const { state } = useLocation();

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Submission Successful!</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Link to="/">Go Back</Link>
    </div>
  );
}