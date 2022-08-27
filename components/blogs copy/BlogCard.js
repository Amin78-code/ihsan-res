import Link from "next/link";
import Image from "next/image";
import pattern from "../../assets/images/pattern.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import hands from "../../assets/images/services/hands.svg";

const BlogCard = ({ data }) => {
  console.log("image", data.img);
  return (
    <div className="w-full md:w-[49%] lg:w-[32%] h-[auto] bg-[#0F2E3C] rounded-[10px] md:rounded-[15px] overflow-hidden">
      <div className="w-full">
        <Image src={data.img} alt="blog image" />
      </div>
      <div className="px-[15px] md:px-[20px] pt-[10px] pb-[20px] md:pt-[15px] md:pb-[25px]">
        <h4 className="fpr h-[auto] md:h-[40px] lg:h-[40px] xl:h-[60px]  text-[18px] md:text-[20px] xl:text-[30px] leading-[18px] md:leading-[20px] xl:leading-[30px] text-[#fff]">
          {data.title}
        </h4>
        <p className="fgr text-[12px] md:text-[14px] leading-[12px] md:leading-[20px] text-[#fff] py-[10px] md:py-[15px]">
          {data.text}
        </p>
        <div className="flex justify-between items-end pt-[10px]">
          <Link href={`/blogs/${data.slug_title}`}>
            <button className="fgr w-[120px] text-center md:w-[150px] h-[28px] md:h-[40px] border-[1px] md:border-[1px] border-[#fff] bg-[#fff] text-[12px] md:text-[14px] text-[#555555] rounded-[50px] px-[11px] md:px-[10px] py-[5px] md:py-[5px] hover:border-[#FAF7F2] hover:bg-[#0F2E3C] hover:text-[#fff] group]">
              <a>Read More</a>
            </button>
          </Link>
          <h4 className="fpr text-[10px] md:text-[12px] text-[#fff] pt-[10px]">
            {data.posted_date}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
