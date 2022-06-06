import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex justify-between w-screen items-center z-50 sticky top-0 h-8 p-8 text-yellow-400 bg-black mx-auto">
      <div className="flex w-2/3 flex-col lg:flex-row md:flex-row items-center">
        <Link href="/">
          <Image
            src="/WU.svg"
            width="200"
            height="30"
            layout="fixed"
            objectFit="cover"
            className="cursor-pointer"
          />
        </Link>
        <div className="lg:text-[14px] md:text-[14px] text-[10px]">
          | All Data is fake - training purpose ONLY
          <p className="hidden lg:flex md:flex text-[8px]">
            Developed by Piotr Maciejewski
          </p>
        </div>
      </div>

      <div className="hidden md:flex lg:flex text-md">
        <ul className="flex space-x-10">
          <Link href="/">
            <li className="cursor-pointer hover:text-yellow-600">Home</li>
          </Link>
          <Link href="/total">
            <li className="cursor-pointer hover:text-yellow-600">Total</li>
          </Link>
          
          
        </ul>
      </div>

      <div className="flex relative">
        {!openMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-yellow-400 md:hidden lg:hidden cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
        )}

        {openMenu && (
          <ul className="z-10 w-[200px] bg-black fixed top-0 -right-2 p-3 h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md animate-slide-in">
            <li className="flex justify-end text-xl w-full my-2 cursor-pointer">
              <AiOutlineClose
                fontSize={28}
                className="text-yellow-400 md:hidden lg:hidden cursor-pointer"
                onClick={() => setOpenMenu(false)}
              />
            </li>
            {["Home", "Total"].map(
              (item, index) => (
                <li
                  key={item + index}
                  className="mx-4 cursor-pointer my-2 text-xl"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
