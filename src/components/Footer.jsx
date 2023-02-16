import React from "react";

function Footer() {
  return (
    <footer className="w-full h-30 p-4 bg-[#08192f] md:p-8 lg:p-10 sm:h-1 dark:bg-gray-800 sm:pt-20">
      <div className="mx-auto max-w-screen-xl text-center">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 p-10">
          © 2022-2023 Designed By &nbsp;
          <a href="#" className="hover:underline">
            Kevin Sencherey
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
