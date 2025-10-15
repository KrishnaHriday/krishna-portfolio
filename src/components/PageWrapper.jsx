import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-white p-8 animate-fade-in">
      {children}
    </div>
  );
};

export default PageWrapper;
