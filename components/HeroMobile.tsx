import CtaButton from "./CtaButton";


const HeroMobile = () => {
  return (
    <div className="flex flex-col md:hidden float-left w-full bg-veryLightGray">
      <img src="/images/bg-intro-mobile.svg" className="absolute w-[968px] top-[-248px] right-0" />
      <div className="relative float-left h-[280px] w-full flex justify-center z-10">
        <img src="/images/image-mockups.png" className="relative h-[415px] top-[-116px]" />
      </div>
      <div className="flex items-center justify-between px-[24px] float-left mt-[40px] pb-[88px]">
        <div className="w-full flex flex-col space-y-[24px] items-center text-center">
          <h1 className="font-[300] text-darkBlue text-[40px] leading-[47px] tracking-[-0.75px]">Next generation digital bank</h1>
          <p className="text-[18px] leading-[28px] text-grayishBlue mb-[12px] tracking-[-0.28125px]">
            Take your financial life online. Your Easybank account
            will be a one-stop-shop for spending, saving,
            budgeting, investing, and much more.
          </p>
          <CtaButton />
        </div>
      </div>
    </div>
  )
}

export default HeroMobile;