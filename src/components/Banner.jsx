import React from "react";
import bgImage from "../assets/vector1.png";
import bgImage2 from "../assets/vector3.png";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* In Progress Card */}
        <div
          className="relative rounded-2xl overflow-hidden text-white flex items-center justify-center"
          style={{
            height: "240px",
            backgroundImage: `
              linear-gradient(to right, #7c3aed, #4f46e5),
              url(${bgImage}),
              url(${bgImage2})
            `,
            backgroundRepeat: "no-repeat, no-repeat, no-repeat",
            backgroundSize: "cover, 300px, 300px",
            backgroundPosition: "center, left center, right center",
            backgroundBlendMode: "overlay"
          }}
        >
          <div className="relative z-10 text-center">
            <p className="text-lg opacity-90">In-Progress</p>
            <h2 className="text-6xl font-bold mt-3">
              {inProgressCount}
            </h2>
          </div>
        </div>


        {/* Resolved Card */}
        <div
          className="relative rounded-2xl overflow-hidden text-white flex items-center justify-center"
          style={{
            height: "240px",
            backgroundImage: `
              linear-gradient(to right, #22c55e, #059669),
              url(${bgImage}),
              url(${bgImage2})
            `,
            backgroundRepeat: "no-repeat, no-repeat, no-repeat",
            backgroundSize: "cover, 300px, 300px",
            backgroundPosition: "center, left center, right center",
            backgroundBlendMode: "overlay"
          }}
        >
          <div className="relative z-10 text-center">
            <p className="text-lg opacity-90">Resolved</p>
            <h2 className="text-6xl font-bold mt-3">
              {resolvedCount}
            </h2>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Banner;