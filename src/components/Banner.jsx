import React from "react";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
      <div className="max-w-7xl mx-auto px-6 text-white flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left: Title & Subtitle */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to CS — Ticket System
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Manage all customer tickets efficiently and keep track of progress.
          </p>
        </div>

        {/* Right: Ticket Statistics */}
        <div className="flex gap-6">
          <div className="bg-white bg-opacity-20 rounded-xl px-6 py-4 text-center min-w-[120px]">
            <p className="text-2xl font-bold">{inProgressCount}</p>
            <p className="text-sm opacity-90">In Progress</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl px-6 py-4 text-center min-w-[120px]">
            <p className="text-2xl font-bold">{resolvedCount}</p>
            <p className="text-sm opacity-90">Resolved</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;