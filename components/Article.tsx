import Image from "next/image";
import Link from "next/link";


const Article = ({
  image,
  imageAlt,
  author,
  title,
  text,
} : {
  image: string;
  imageAlt: string;
  author: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="h-[395px] bg-white grid grid-cols-1 rounded-t-[5px] rounded-b-[5px] mt-[24px]">
      <div className="w-full h-[200px] relative overflow-hidden">
        <Image
          src={`/images/${image}`}
          alt={imageAlt}
          layout="fill"
          className="rounded-t-[5px] object-cover"
        />
      </div>
      <div className="flex flex-col p-[24px]">
        <small className="text-[10px] leading-[18px] tracking-[-0.16px] text-grayishBlue">By {author}</small>
        <Link href="#" className="font-[300] text-darkBlue leading-[20px] tracking-[-0.29px] my-[8px] transition-all hover:text-limeGreen">
          {title}
        </Link>
        <p className="text-[13px] leading-[18px] tracking-[-0.2px] text-grayishBlue h-[73px] text-ellipsis overflow-hidden">
          {text}
        </p>
      </div>
    </div>
  )
}

export default Article;