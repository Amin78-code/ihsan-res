import Image from "next/image";
// import heroimg from '../../assets/images/home/hero.jpg'
import pattern from '../../../assets/images/pattern.png';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import heroimg from '../../../assets/images/about-us/man-sitting.svg';

const TextSection = () => {
  return (
    <section className="w-full pt-[37px] pb-[46px] md:py-[100px] bg-[#fff] relative overflow-hidden">
      <div className='myContainer'>

        <div className='flex flex-col md:flex-row flex-wrap justify-between gap-y-[21px] md:gap-y-[80px] lg:gap-y-[140px] gap-x-0 md:gap-x-[3%]'>

          <div className='w-full md:w-[48%] '>
            <h1 className='fpr text-[#0F2E3C] text-[32px] md:text-[65px] sc1500:text-[100px] leading-[32px] md:leading-[65px] sc1500:leading-[100px] max-w-[633px]'>Our values and principals</h1>
          </div>
          <p className='w-full md:w-[48%] fgr text-[#555555] text-[12px] md:text-[24px] leading-[15px] md:leading-[42px] flex items-center'>From the services we provide to our corporate culture, our goal is for everything we do to live up to our core values and principles.</p>

          <div className='w-full md:w-[48%]'>
            <h6 className='fgb text-[#555555] text-[12px] md:text-[32px] leading-[16px] md:leading-[42px]'>Caring</h6>
            <p className="fgr text-[#555555] text-[12px] md:text-[24px] leading-[15px] md:leading-[42px]">Asking for help is a brave first step. Every session is a judgment-free, safe space where you can comfortably speak to us about anything.</p>
          </div>
          <div className='w-full md:w-[48%]'>
            <h6 className='fgb text-[#555555] text-[12px] md:text-[32px] leading-[16px] md:leading-[42px]'>Personalized</h6>
            <p className="fgr text-[#555555] text-[12px] md:text-[24px] leading-[15px] md:leading-[42px]">No two people or circumstances are alike, and neither are the solutions we offer. Every coaching program we put together is tailored to each individual’s or couple’s needs, challenges or goals.</p>
          </div>
          <div className='w-full md:w-[48%] mt-[-2.5%]'>
            <h6 className='fgb text-[#555555] text-[12px] md:text-[32px] leading-[16px] md:leading-[42px]'>Trust</h6>
            <p className="fgr text-[#555555] text-[12px] md:text-[24px] leading-[15px] md:leading-[42px]">Trust is fundamental in successful coaching. If you don’t trust your coach, they won’t be able to offer the best advice - and that starts with us. Our coaches respect and appreciate the faith you’ve put into them, and would never compromise that trust.</p>
          </div>
          <div className='w-full md:w-[48%] mt-[-2.5%]'>
            <h6 className='fgb text-[#555555] text-[12px] md:text-[32px] leading-[16px] md:leading-[42px]'>Confidentiality/Amana</h6>
            <p className="fgr text-[#555555] text-[12px] md:text-[24px] leading-[15px] md:leading-[42px]">All information provided is held with the highest level of confidentiality in accordance with HIPPA compliance.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TextSection;
