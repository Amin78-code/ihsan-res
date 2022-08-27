import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";
import pattern from '../../../assets/images/pattern.png';

const BrownSection = () => {
  return (
    <section className="text-[#fff] pt-[50px] md:pt-[94px] pb-[50px] md:pb-[110px] relative overflow-hidden">
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] overlay-img'>
        <Image src={pattern} className='scale-[1.5] ' />
      </div>
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] bg-[#AE8B5C] opacity-[.99]'></div>
      <div className="myContainer relative z-[2]">
        <h1 className='fpr text-[32px] md:text-[75px] sc1500:text-[100px] leading-[32px] md:leading-[75px] sc1500:leading-[100px] text-center'>Our approach</h1>
        <p className='fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] max-w-[1502px] text-center pt-[20px] md:pt-[32px]'>
          With a unique understanding of the challenges Muslims may face in Western society, we’re able to offer tailored programs that bridge traditional coaching and Islamic consulting. And unlike traditional therapy, goal-oriented coaching is a more direct path to well being.
        </p>
        <div className="flex flex-col xl:flex-row flex-wrap gap-x-[0] xl:gap-x-[1.5%] gap-y-[30px] xl:gap-y-0 mt-[30px] md:mt-[107px]">
          <div className='w-full xl:w-[31%] flex'>
            <MdCheckCircle className='text-[#fff] text-[30x] md:text-[55px] mr-[5px] w-[50px] md:w-[auto] min-w-[auto] md:min-w-[65px]' />
            <div>
              <h6 className='fgb text-[14px] md:text-[28px] leading-[16px] md:leading-[36px]'><span> Confidential</span>
              </h6>
              <p className='fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px]'> All of the information you provide is held with the highest level of confidentiality in accordance with HIPPA compliance. Everything shared between you and your coach stays between you.</p>
            </div>
          </div>
          <div className='w-full xl:w-[31%] flex'>
            <MdCheckCircle className='text-[#fff] text-[30x] md:text-[55px] mr-[5px] w-[50px] md:w-[auto] min-w-[auto] md:min-w-[65px]' />
            <div>
              <h6 className='fgb text-[14px] md:text-[28px] leading-[16px] md:leading-[36px]'><span>Safe & affordable</span>
              </h6>
              <p className='fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px]'>  Compared to traditional therapy, professional coaching is generally a more affordable option. Our consultations and sessions are done through a secure online platform, where you can feel comfortable talking in your home or another calming environment.</p>
            </div>
          </div>
          <div className='w-full xl:w-[31%] flex'>
            <MdCheckCircle className='text-[#fff] text-[30x] md:text-[55px] mr-[5px] w-[50px] md:w-[auto] min-w-[auto] md:min-w-[65px]' />
            <div>
              <h6 className='fgb text-[14px] md:text-[28px] leading-[16px] md:leading-[36px]'><span>Diverse</span>
              </h6>
              <p className='fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px]'>  Our team of coaches are licensed therapists who have backgrounds in Counseling, Clinical Psychology, and Social Work, allowing our staff to offer diverse solutions. In addition, we offer a diverse coach staff that can conduct sessions in English, Arabic, and Urdu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrownSection;
