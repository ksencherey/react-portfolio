import React, { useState } from "react";
import Profile from "../assets/KSencherey.svg";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import CV from "../assets/CV/Software Developer_KSencherey.pdf";

function Navbar() {
  const [clickHamburger, setHamburger] = useState(false);

  const handleClick = () => {
    setHamburger(!clickHamburger);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300 top-0">
      <div>
        <img
          className="rounded-3xl"
          src={Profile}
          alt="Profile Image"
          style={{ width: "50px" }}
        />
      </div>
      {/*-----Menu----*/}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/*---Hamburger----*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!clickHamburger ? <FaBars /> : <FaTimes />}
      </div>

      {/*---Mobile Menu----*/}
      <ul
        className={
          !clickHamburger
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*---Social Icons----*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/kevin-sencherey-505b4562/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/ksencherey"
              target="_blank"
            >
              GitHub <FaGithub size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:ksscholastic@gmail.com"
            >
              Email <HiOutlineMail size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={CV}
              download
            >
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
