import React from "react";

function Footer() {
  return (
    <footer className="w-full p-4 bg-[#08192f] md:p-8 lg:p-10 dark:bg-gray-800 h-2">
      <div className="mx-auto max-w-screen-xl text-center">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
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
