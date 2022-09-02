import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";
import pattern from '../../../assets/images/pattern.png';

const BrownSection = () => {
  return (
    <section className="text-[#fff] pt-[40px] md:pt-[75px] pb-[50px] md:pb-[80px] relative overflow-hidden">
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] overlay-img'>
        <Image src={pattern} className='scale-[1.5] ' />  
      </div>
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] bg-[#AE8B5C] opacity-[.99]'></div>
      <div className="myContainer relative z-[2]">
        <h1 className='fpr text-[30px] md:text-[60px] leading-[30px] md:leading-[60px]  text-center'>Our approach</h1>
        <p className='fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] max-w-[950px] text-center mx-auto pt-[20px] md:pt-[32px]'>
          With a unique understanding of the challenges Muslims may face in Western society, we’re able to offer tailored programs that bridge traditional coaching and Islamic consulting. And unlike traditional therapy, goal-oriented coaching is a more direct path to well being.
        </p>
        <div className="flex flex-col xl:flex-row flex-wrap gap-x-[0] xl:gap-x-[1.5%] gap-y-[30px] xl:gap-y-0 mt-[30px] md:mt-[65px]">
          <div className='w-full xl:w-[31%] flex'>
            <MdCheckCircle className='text-[#fff] text-[25px] md:text-[40px] mr-[5px] w-[50px] md:w-[auto] min-w-[auto] md:min-w-[50px]' />
            <div>
              <h6 className='fgb text-[14px] md:text-[22px] leading-[16px] md:leading-[30px]'><span> Confidential</span>
              </h6>
              <p className='fgr text-[12px] max-w-[320px] md:text-[16px] leading-[16px] md:leading-[26px]'> All of the information you provide is held with the highest level of confidentiality in accordance with HIPPA compliance. Everything shared between you and your coach stays between you.</p>
            </div>
          </div>
          <div className='w-full xl:w-[31%] flex'>
            <MdCheckCircle className='text-[#fff] text-[25px] md:text-[40px] mr-[5px] w-[50px] md:w-[auto] min-w-[auto] md:min-w-[50px]' />
            <div>
              <h6 className='fgb text-[14px] md:text-[22px] leading-[16px] md:leading-[30px]'><span>Safe & affordable</span>
              </h6>
              <p className='fgr text-[12px] max-w-[320px] md:text-[16px] leading-[16px] md:leading-[26px]'>  Compared to traditional therapy, professional coaching is generally a more affordable option. Our consultations and sessions are done through a secure online platform, where you can feel comfortable talking in your home or another calming environment.</p>
            </div>
          </div>
          <div className='w-full xl:w-[31%] flex'>
            <MdCheckCircle className='text-[#fff] text-[25px] md:text-[40px] mr-[5px] w-[50px] md:w-[auto] min-w-[auto] md:min-w-[50px]' />
            <div>
              <h6 className='fgb text-[14px] md:text-[22px] leading-[16px] md:leading-[30px]'><span>Diverse</span>
              </h6>
              <p className='fgr text-[12px] max-w-[320px] md:text-[16px] leading-[16px] md:leading-[26px]'>  Our team of coaches are licensed therapists who have backgrounds in Counseling, Clinical Psychology, and Social Work, allowing our staff to offer diverse solutions. In addition, we offer a diverse coach staff that can conduct sessions in English, Arabic, and Urdu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrownSection;
