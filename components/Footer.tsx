import Image from "next/image";
import Link from "next/link";

import CtaButton from "./CtaButton";


const Footer = () => {
  return (
    <footer className="w-full float-left py-[48px] bg-darkBlue px-[24px] sm:px-[165px]">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-[130px]">
        <div className="flex flex-col md:justify-between space-y-[32px] md:space-y-[55px] mb-[32px] md:mb-0">
          <Image
            src="/images/logo-footer.svg"
            alt="Logo of EasyBank"
            width="139"
            height="20"
          />
          <div className="flex space-x-[13.5px]">
            <Image
              src="/images/icon-facebook.svg"
              alt="Visit us on Facebook"
              width="20"
              height="20"
            />
            <Image
              src="/images/icon-youtube.svg"
              alt="Visit us on YouTube"
              width="21"
              height="20"
            />
            <Image
              src="/images/icon-twitter.svg"
              alt="Visit us on Twitter"
              width="21"
              height="18"
            />
            <Image
              src="/images/icon-pinterest.svg"
              alt="Visit us on Pinterest"
              width="20"
              height="20"
            />
            <Image
              src="/images/icon-instagram.svg"
              alt="Visit us on Instagram"
              width="21"
              height="20"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start space-y-[8px] text-[15px] leading-[26px] tracking-[-0.23px] text-white">
          <Link href="#" title="About Us" className="transition-all hover:text-limeGreen">About Us</Link>
          <Link href="#" title="Contact" className="transition-all hover:text-limeGreen">Contact</Link>
          <Link href="#" title="Blog" className="transition-all hover:text-limeGreen">Blog</Link>
        </div>
        <div className="flex flex-col items-center md:items-start space-y-[8px] text-[15px] leading-[26px] tracking-[-0.23px] text-white">
          <Link href="#" title="Careers" className="transition-all hover:text-limeGreen">Careers</Link>
          <Link href="#" title="Support" className="transition-all hover:text-limeGreen">Support</Link>
          <Link href="#" title="Privacy Policy" className="transition-all hover:text-limeGreen">Privacy Policy</Link>
        </div>
        <div className="flex flex-col flex-1 items-center space-y-[24px] md:space-y-unset mt-[32px] md:mt-0 md:items-end justify-between text-[15px] leading-[26px] tracking-[-0.23px] text-white/[0.5]">
          <CtaButton />
          <small>&copy; Easybank. All Rights Reserved</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer;