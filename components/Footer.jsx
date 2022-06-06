import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-screen h-20 bg-black text-white z-50">
      <h1 className="text-2xl">
        Developed by{" "}
        <Link href="https://www.piotrmaciejewski.com" target="_blank">
          <span className="font-bold cursor-pointer">Piotr Maciejewski</span>
        </Link>
      </h1>
      <div className="flex items-center justify-between mx-6 gap-x-4">
        <Link href="https://github.com/petherEm" target="_blank" rel="noopener noreferrer">
          <FaGithub style={{ fontSize: "25px", cursor: "pointer" }} />
        </Link>
        <Link href="https://www.linkedin.com/in/piotrek-maciejewski/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ fontSize: "25px", cursor: "pointer" }} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
