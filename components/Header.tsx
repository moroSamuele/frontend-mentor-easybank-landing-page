import Image from "next/image"
import Link from "next/link"

import CtaButton from "./CtaButton"


const NavLink = ({
  name,
}: {
  name: string;
}) => {
  return (
    <Link href="#" className="group flex flex-col justify-center relative hover:text-darkBlue">
      <span>{name}</span>
      <div className="absolute bottom-0 bg-transparent w-full h-[4px] group-hover:bg-mainGradient"></div>
    </Link>
  )
}

const Header = () => {
  return (
    <header className="hidden md:flex w-full h-[80px] justify-between items-center bg-white relative z-20 px-[24px] sm:px-[165px]">
      <>
        <Image
          src="/images/logo.svg"
          alt="Logo of EasyBank"
          width="139"
          height="20"
        />
      </>
      <nav className="h-full flex flex-1 justify-center space-x-[30px] text-[14px] text-grayishBlue">
        <NavLink name="Home" />
        <NavLink name="About" />
        <NavLink name="Contact" />
        <NavLink name="Blog" />
        <NavLink name="Careers" />
      </nav>
      <CtaButton />
    </header>
  )
}

export default Header;