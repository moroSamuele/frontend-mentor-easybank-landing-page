import Image from "next/image";

import CtaButton from "./CtaButton";


const Hero = () => {
  return (
    <div className="hidden md:block float-left w-full bg-veryLightGray">
      <div className="h-[656px] flex items-center justify-between px-[24px] sm:px-[165px] float-left">
        <div className="w-[450px] flex flex-col space-y-[24px] items-start">
          <h1 className="font-[300] text-darkBlue text-[56px] leading-[64px] tracking-[-1px]">Next generation digital bank</h1>
          <p className="text-[18px] leading-[28px] text-grayishBlue mb-[12px] tracking-[-0.28125px]">
            Take your financial life online. Your Easybank account
            will be a one-stop-shop for spending, saving,
            budgeting, investing, and much more.
          </p>
          <CtaButton />
        </div>
      </div>

      <div className="absolute w-[calc(100%-450px)] flex justify-center items-center top-[-148px] right-[-162px]">
          <Image
            src="/images/bg-intro-desktop.svg"
            alt="Background Hero Desktop"
            width="1371"
            height="956"
            className="absolute top-0 right-0 z-0" 
          />
          <Image
            src="/images/image-mockups.png"
            alt="Hero Desktop Mockups"
            width="732"
            height="901"
            className="absolute top-[118px] right-[36px] z-10"
          />
      </div>
    </div>
  )
}

export default Hero;