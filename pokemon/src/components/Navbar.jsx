import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-yellow-400 border-b">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="flex h-20 items-center justify-between">
            <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <a
                class="flex flex-shrink-0 items-center mr-4"
                href="/index.html"
              >
              </a>
              <div class="md:ml-auto">
                <div class="flex space-x-2">
                  <a
                    href="/App.jsx"
                    class="text-white bg-black hover:bg-white hover:text-black rounded-md px-3 py-2"
                  >
                    Home
                  </a>
                  <a
                    href="/App.jsx"
                    class="text-white hover:bg-red-500 hover:text-white rounded-md px-3 py-2"
                  >
                    Pokemon
                  </a>
                  <a
                    href="/add-job.html"
                    class="text-white hover:bg-red-500 hover:text-white rounded-md px-3 py-2"
                  >
                    Search
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
