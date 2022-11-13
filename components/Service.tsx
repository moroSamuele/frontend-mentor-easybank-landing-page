import Image from "next/image";

const Service = ({
  image,
  imageAlt,
  title,
  text,
} : {
  image: string;
  imageAlt?: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <Image
        src={`/images/${image}`}
        alt={imageAlt === undefined ? title : imageAlt}
        width="72"
        height="72"
        className="mb-[40px]"
      />
      <h3 className="text-darkBlue font-[300] text-[24px] leading-[28px] tracking-[-0.428571px] mb-[26px]">{title}</h3>
      <p className="text-grayishBlue text-[16px] leading-[26px] tracking-[-0.25px] text-center md:text-right">
        {text}
      </p>
    </div>
  )
}

export default Service;