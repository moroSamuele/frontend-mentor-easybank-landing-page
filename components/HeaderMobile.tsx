"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

const HeaderMobile = () => {
  const [navLink, setNavLink] = useState(false);

  return (
    <>
      <header className="fixed flex md:hidden w-full h-[64px] justify-between items-center bg-white z-[60] px-[24px]">
        <>
          <Image
            src="/images/logo.svg"
            alt="Logo of EasyBank"
            width="139"
            height="20"
          />
          {
            navLink ?
              <Image
                src="/images/icon-close.svg"
                alt="Menu"
                width="18"
                height="19"
                className="mr-[4px]"
                onClick={() => setNavLink(false)}
              />
            :
              <Image
                src="/images/icon-hamburger.svg"
                alt="Menu"
                width="24"
                height="11"
                onClick={() => setNavLink(true)}
              />
          }
        </>
      </header>

      {
        navLink &&
          <div className="fixed bg-mobileMenuGradient w-full h-full z-50">
            <nav className="absolute flex flex-col space-y-[24px] text-darkBlue text-[18px] bg-white rounded-[4px] py-[32px] w-[calc(100%-48px)] ml-[24px] mt-[88px] justify-center items-center">
              <Link href="#" title="Home">Home</Link>
              <Link href="#" title="About">About</Link>
              <Link href="#" title="Contact">Contact</Link>
              <Link href="#" title="Blog">Blog</Link>
              <Link href="#" title="Careers">Careers</Link>
            </nav>
          </div>
      }
    </>
  )
}

export default HeaderMobile;