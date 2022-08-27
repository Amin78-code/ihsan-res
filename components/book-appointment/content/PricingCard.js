import Link from "next/link";
import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import pattern from "../../../assets/images/pattern.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import hands from "../../../assets/images/services/hands.svg";

const PricingCard = ({ data }) => {
  return (
    <div className="w-full lg:w-[32%] h-[auto] text-center bg-[#0F2E3C] border-[#707070] border-[1px] rounded-[15px] md:rounded-[30px] px-[2%] py-[20px] md:py-[54px]">
      <h4 className="fpr text-[28px] md:text-[46px] leading-[28px] md:leading-[46px] text-[#fff] text-center max-w-[300px] mx-auto">
        {data.title}
      </h4>
      <h4 className="fpr text-[50px] md:text-[80px] text-[#fff] pt-[20px]">
        {data.price}
      </h4>
      <p className="fgr h-[90px] text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff] mt-[2%] md:mt-[5%]">
        <BsFillCheckCircleFill className="text-[30px] inline pr-[10px]" />
        {data.text}
      </p>
      <Link href="#">
        <button className="fgr w-[120px] text-center md:w-[332px] h-[28px] md:h-[79px] border-[1px] md:border-[3px] border-[#fff] bg-[#fff] text-[12px] md:text-[24px] text-[#555555] rounded-[50px] px-[11px] md:px-[30px] py-[7px] md:py-[10px] hover:border-[#FAF7F2] hover:bg-[#0F2E3C] hover:text-[#fff] group mt-[25px] mx-auto">
          <a>Choose Plan</a>
        </button>
      </Link>
    </div>
  );
};

export default PricingCard;
