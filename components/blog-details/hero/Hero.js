import Image from "next/image";
import pattern from '../../../assets/images/pattern.png';

const Hero = ({ data }) => {
  return (
    <section className="w-full pt-[93px] pb-[93px] md:pt-[171px] md:pb-[162px] bg-[#F2F2F2] relative overflow-hidden">
      <div className='absolute left-0 right-0 top-0 w-full h-[100%]'>
        <div className='scale-[1.2]'><Image src={pattern} /></div>
      </div>
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] linear-gradient-4'>
      </div>
      <div className="myContainer flex flex-col justify-center relative z-[1]">
        <h1 className="fpr text-[35px] md:text-[60px]  leading-[35px] md:leading-[60px]  mx-auto text-[#0F2E3C] text-center max-w-[1374px] pt-[10px]">
          {data.title}
        </h1>
        <p className="fgr text-[12px] md:text-[18px] leading-[16px] md:leading-[30px] text-[#555555] text-center max-w-[1434px] mx-auto pt-[15px] md:pt-[20px]">
          {data.paragraph1}
        </p>
      </div>
    </section>
  );
};

export default Hero;
