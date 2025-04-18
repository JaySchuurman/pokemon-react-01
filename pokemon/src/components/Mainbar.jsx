import React from "react";

const Mainbar = () => {
  return (
    <>
      <section class="bg-yellow-500 py-20 mb-30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div class="text-center">
          <div className="pokemon-logo"><img src="Pokemon-Logo.png" alt="huh"/></div>
            <h1 class="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">
              Become a true Pokemon Legend!
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mainbar;
