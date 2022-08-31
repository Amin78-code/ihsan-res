import Link from "next/link";
import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi";
import pattern from "../../../assets/images/pattern.png";
import heroimg from "../../../assets/images/home/hero.svg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <Link href="/contact">
        <a className="fgb text-[#fff] text-[12px] leading-[42px] bg-[#AB8353] w-full flex md:hidden justify-center items-center h-[25px] pt-[3px]">
          Get Started
          <HiCheckCircle className="text-[13px] ml-[3px] mt-[-3px]" />
        </a>
      </Link>
      <section className="w-full lg:h-[88vh] lg:flex justify-center items-center   pt-[40px] pb-[30px] md:py-[50px] bg-[#F2F2F2] relative overflow-hidden">
        <div className="absolute left-0 right-0 top-0 w-full h-[100%]">
          <div className="scale-[1.3]">
            <Image src={pattern} className="" />
          </div>
        </div>
        <div className="absolute left-0 right-0 top-0 w-full h-[100%] linear-gradient-2"></div>
        <div className="myContainer flex flex-col-reverse lg:flex-row relative z-[1]">
          <div className="w-full lg:w-[62%] xl:w-[52%] pt-[3%]">
            <h1 className="fpr text-[35px] sm:text-[70px] md:text-[110px] lg:text-[90px] sc1350:text-[110px] leading-[35px]  sm:leading-[70px] md:leading-[110px] lg:leading-[90px] sc1350:leading-[110px] sc1350   text-[#0F2E3C] md:max-w-[680px]">
              Feel like <br /> you again
            </h1>
            <p className="fgr max-w-[600px] text-[12px] md:text-[20px] leading-[16px] md:leading-[26px] text-[#292929] pt-[13px] md:pt-[40px] pb-[16px] md:pb-[45px]">
              We offer a modern, solution-focused coaching approach to help you
              overcome life’s struggles. Our online platform is a simpler way to
              access the support you need anytime, anywhere you need it.
            </p>
            <Link href="/book-appointment">
              <a>
                <button
                  type="button"
                  className="fgr w-[130px] md:w-[260px] h-[31px] md:h-[65px] flex justify-between items-center bg-[#AE8B5C] text-[12px] md:text-[20px] leading-[36px] text-[#fff] rounded-[50px] px-[11px] md:px-[30px] pt-[8px] pb-[7px] md:py-[10px] hover:opacity-[.8]"
                >
                  Get started
                  <BsFillArrowRightCircleFill className="text-[12px] md:text-[20px]" />
                </button>
              </a>
            </Link>
          </div>
          <div className="home-hero-img w-full md:w-[52%] mt-[-30px] right-0 md:right-[-30px] before:w-[58px] md:before:w-[160px] relative before:h-[58px] md:before:h-[160px] before:bg-[#AE8B5C] before:rounded-[100px] before:right-[0] md:before:right-[-25px] before:bottom-0 md:before:bottom-[20px] before:absolute p-[.5%]">
            <Image src={heroimg} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
