import React from "react";

function LandingPage() {
  return (
    <a href="/dashboard">
      <div className="bg-primary h-screen flex flex-col justify-center items-center">
        <h1 className="add-motion text-white font-bold text-5xl ">
          Simple <br />
          Quicks
        </h1>
        <br />
        <span className="text-white shadow-lg fixed bottom-2">click anywhere to begin your journey</span>
      </div>
    </a>
  );
}

export default LandingPage;
