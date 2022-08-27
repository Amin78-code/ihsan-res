import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import pattern from '../../../assets/images/pattern.png';
import heroimg from '../../../assets/images/home/hero.svg';
import Link from "next/link";

const Hero = () => {
  return (
    <>
     <Link href="/contact">
    <a className='fgb text-[#fff] text-[12px] leading-[42px] bg-[#AB8353] w-full flex md:hidden justify-center items-center h-[25px] pt-[3px]'>Get Started<HiCheckCircle className='text-[13px] ml-[3px] mt-[-3px]' /></a>
    </Link>
    <section className="w-full pt-[40px] pb-[50px] md:py-[93px] bg-[#F2F2F2] relative overflow-hidden">
      <div className='absolute left-0 right-0 top-0 w-full h-[100%]'>
      <div className='scale-[1.3]'><Image src={pattern} className='' /></div>
      </div>
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] linear-gradient-2'>
      </div>
      <div className="myContainer flex flex-col-reverse lg:flex-row relative z-[1]">
        <div className="w-full lg:w-[48%]">
         <h1 className="fpr text-[42px] md:text-[65px] sc1500:text-[90px] leading-[43px] md:leading-[65px] sc1500:leading-[90px] text-[#0F2E3C] max-w-[171px] md:max-w-[680px]">
            Feel like you again
          </h1>
          <p className="text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#292929] pt-[13px] md:pt-[35px] pb-[16px] md:pb-[32px]">
            We offer a modern, solution-focused coaching approach to help you
            overcome life’s struggles. Our online platform is a simpler way to
            access the support you need anytime, anywhere you need it.
          </p>
          <Link href="/contact">
          <a>
            <button type='button' className="f fgr w-[130px] md:w-[232px] h-[31px] md:h-[65px] flex justify-between items-center bg-[#AE8B5C] text-[12px] md:text-[24px] leading-[36px] text-[#fff] rounded-[50px] px-[11px] md:px-[20px] pt-[8px] pb-[7px] md:py-[10px] hover:opacity-[.8]">
              Get started 
              <BsFillArrowRightCircleFill className='text-[12px] md:text-[30px]' />
            </button>
          </a>
           </Link>
        </div>
        <div className='home-hero-img w-[42%] mt-[-30px] right-0 md:right-[-20px] before:w-[58px] md:before:w-[200px] relative before:h-[58px] md:before:h-[200px] before:bg-[#AE8B5C] before:rounded-[100px] before:right-[0] md:before:right-[-35px] before:bottom-0 md:before:bottom-[10px] before:absolute'>
          <Image src={heroimg} />
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
