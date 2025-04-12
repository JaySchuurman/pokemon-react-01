import React from "react";
const NavButtons = () => {
  return (
    <>
      <section class="py-4">
        <div class="container-xl lg:container m-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <div class="bg-yellow-500 p-6 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold">LIST</h2>
              <p class="mt-2 mb-4">
                Browse trough a list of different Pokemon.
              </p>
              <a
                href="Job.jsx"
                class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-red-500"
              >
                Take me there!
              </a>
            </div>
            <div class="bg-yellow-500 p-6 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold">SEARCH</h2>
              <p class="mt-2 mb-4">
                Use this to filter out the Pokemon that suits your liking!
              </p>
              <a
                href="Jobs.jsx"
                class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-red-500"
              >
                Let's go!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavButtons;
