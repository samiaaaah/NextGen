import React from "react";
import logo from "./assets/nextgendynamics.png"; // make sure path is correct

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12 text-center">
      
      
      {/* Logo */}
      <div className="max-w-2xl w-full mb-10">
        <img
          src={logo}
          alt="NextGen Dynamix Logo"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Contact Details */}
      <div className="text-gray-700 space-y-2">
        <p className="text-lg font-medium"></p>
        <p className="text-lg font-medium"></p>
        <p className="text-lg font-medium">Contact us :info@nextgendynamix.com.au
        </p>
      </div>
      
    </div>
  );
}

export default App;
