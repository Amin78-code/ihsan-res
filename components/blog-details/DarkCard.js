import Link from "next/link";
import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const DarkCard = ({ recentBlogs }) => {
  console.log("recentBlogs", recentBlogs);
  return (
    <div className="w-full h-[auto] bg-[#0F2E3C] border-[#707070] border-[1px] rounded-[15px] md:rounded-[25px] p-[25px]">
      <h4 className="fpr text-[20px] md:text-[27px] leading-[20px] md:leading-[30px] text-[#fff]   ">
        Get started with Ihsan Coaching today
      </h4>

      <p className="fgr    text-[12px] md:text-[16px] leading-[18px] md:leading-[22px] text-[#fff] py-[25px]">
        Let’s take the first step towards better health and well-being,
        together. Get in touch to learn more about coaches or services, or to
        set up an initial session that fits your schedule.
      </p>
      <Link href="/contact">
        <a>
          <button className="fgr w-[120px] md:w-[200px] h-[28px] md:h-[50px] border-[1px] md:border-[3px] border-[#fff] flex justify-between items-center bg-[#fff] text-[12px] md:text-[16px] text-[#555555] rounded-[50px] px-[11px] md:px-[30px] py-[7px] md:py-[10px] hover:border-[#FAF7F2] hover:bg-[#0F2E3C] hover:text-[#fff] group">
            Get started
            <BsFillArrowRightCircleFill className="text-[#555] text-[12px] md:text-[18px] group-hover:text-[#fff]" />
          </button>
        </a>
      </Link>
    </div>
  );
};

export default DarkCard;
