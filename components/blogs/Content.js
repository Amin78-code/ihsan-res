import Image from "next/image";
import pattern from "../../assets/images/pattern.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import hands from "../../assets/images/services/hands.svg";
import BlogCard from "./BlogCard";

const Content = ({ data, pb }) => {
  return (
    <section
      className={`w-full pt-[20px] md:pt-[60px] lg:pt-[100px] pb-[20px] md:pb-[70px] bg-[#fff] relativ e ${
        pb ? "pb-[300px]" : ""
      }`}
    >
      <div className="myContainer">
        <h1 className="fpr mb-[17px] md:mb-[49px] text-[32px] md:text-[60px] sc1500:text-[85px] text-[#0F2E3C] capitalize text-center mx-auto leading-[32px] md:leading-[60px] sc1500:leading-[85px]">
          blogs
        </h1>
        <div className="flex flex-wrap flex-col md:flex-row justify-start gap-x-[1.5%] xl:gap-x-[1.5%] gap-y-[20px] xl:gap-y-[30px] pt-0 pb-[10%] lg:pb-[4%]">
          {data?.map((value) => {
            return <BlogCard key={value.text} data={value} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Content;
