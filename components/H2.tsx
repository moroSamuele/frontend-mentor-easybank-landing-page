export const H2 = ({
  text,
} : {
  text: string;
}) => {
  return(
    <h2 className="font-[300] text-[40px] leading-[64px] text-darkBlue mb-[16px] tracking-[-0.714286px]">
      {text}
    </h2>
  )
}