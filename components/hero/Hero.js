import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="w-full py-[93px] bg-[#F2F2F2]">
      <div className="myContainer flex">
        <div className="w-[48%]">
          <h1 className="fpr text-[130px] 2xl:text-[150px] leading-[120px] 2xl:leading-[140px] text-[#0F2E3C] max-w-[680px]">
            Feel like you again
          </h1>
          <p className="text-[24px] text-[#292929] pt-[48px] pb-[62px]">
            We offer a modern, solution-focused coaching approach to help you
            overcome life’s struggles. Our online platform is a simpler way to
            access the support you need anytime, anywhere you need it.
          </p>
          <a>
          <Link href="/contact">
            <button className="fgr w-[332px] h-[79px] flex justify-between items-center bg-[#AE8B5C] text-[24px] text-[#fff] rounded-[50px] px-[30px] py-[10px] hover:opacity-[.8]">
              Get started 
              <BsFillArrowRightCircleFill style={{ fontSize: "30px" }} />
            </button>
             </Link>
          </a>
        </div>
        <div>{/* <Image src={heroimg} /> */}</div>
      </div>
    </section>
  );
};

export default Hero;
