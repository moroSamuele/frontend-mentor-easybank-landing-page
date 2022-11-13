import Link from "next/link"


const CtaButton = ({
  href = "#",
  text = "Request invite",
} : {
  href?: string;
  text?: string;
}) => {
  return (
    <div className="flex items-center justify-end">
      <Link href={href} className="rounded-full px-[33px] py-[8px] text-[14px] leading-[28px] text-white font-[700] bg-mainGradient transition-all hover:opacity-[0.4]">{text}</Link>
    </div>
  )
}

export default CtaButton;