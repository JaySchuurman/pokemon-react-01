import React from "react";

const Footer = () => {
  return (
    <>
      <nav className="bg-black">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="flex h-20 items-center justify-between">
            <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <div class="md:ml-auto">
                <div class="flex space-x-2">
                  <a
                    href="/App.jsx"
                    class="text-white hover:bg-red-500 hover:text-white rounded-md px-3 py-2"
                  >
                    About me
                  </a>
                  <a
                    href="/add-job.html"
                    class="text-white hover:bg-red-500 hover:text-white rounded-md px-3 py-2"
                  >
                    Socials
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

export default Footer;
