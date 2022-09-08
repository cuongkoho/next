import React from "react";
import { Link } from "react-router-dom";

export function StaticPage() {
  return (
    <div className="Static">
      <h1>This page is static</h1>
      <Link to="/">Home Page</Link>
    </div>
  );
}
