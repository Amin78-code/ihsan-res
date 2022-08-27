import Link from "next/link";
import Image from "next/image";
import { RiCloseCircleFill } from "react-icons/ri";
import { BsFillCheckCircleFill } from "react-icons/bs";
import bulb from '../../../assets/images/home/bulb.svg';
import ring from '../../../assets/images/home/ring.svg';
import pattern from '../../../assets/images/pattern.png';
import heart from '../../../assets/images/home/heart.svg';
import mosque from '../../../assets/images/home/mosque.svg';
import person from '../../../assets/images/home/person.svg';
import clipboard from '../../../assets/images/home/clipboard.svg';

const DarkSection = () => {
  return (
    <section className="bg-[#0F2E3C] text-[#fff] pt-[44px] md:pt-[94px] pb-[58px] md:pb-[110px] relative overflow-hidden">

      <div className='absolute left-0 right-0 top-0 w-full h-[100%] overlay-img'>person
        <Image src={pattern} className='scale-[1.5] ' />
      </div>
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] bg-[#0F2E3C] opacity-[.9]'>
      </div>

      <div className="myContainer relative z-[2]">
        <div className="px-0 sm:px-[5%] md:px-[0] xl:px-[5%]">
          <div className="flex flex-col lg:flex-row">
            <h2 className="fpr text-[32px] md:text-[50px] sc1500:text-[70px] text-[#fff] leading-[32px] md:leading-[50px] sc1500:leading-[70px] min-w-[100%] md:min-w-[450px]">
              What makes us different?
            </h2>
            <p className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff] pl-0 lg:pl-[5%] pt-[16px] lg:pt-0">
              Coaching is another form of support for people that feel stuck in
              life, but don’t have a clinical illness. And Unlike traditional
              therapy, coaching is a more direct, goal-oriented approach to mental
              health that goes beyond the emotional resolution of past pain or
              trauma. Our licensed therapists serve as coaches to help you
              understand your current life experiences and belief systems. By
              laying the groundwork of where you are now and where you want to be,
              we can get you feeling you again, faster.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row pt-[60px] pb-[50px] md:py-[130px] items-center lg:items-end">
            <div className="flex flex-[100%] lg:flex-[47%]">
              <div className="mr-[20px]   sc1440:w-[auto] w-[52px] md:w-[150px] lg:md:w-[80px] xl:w-[150px] h-[53px] md:w-[auto]">
                <Image src={bulb} alt="bulb" />
              </div>
              <div>
                <h6 className="fgr text-[16px] md:text-[36px] leading-[26px] md:leading-[36px] font-[600] text-[#fff]">
                  Modern Coaching
                </h6>
                <ul>
                  <li className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff] py-0 md:py-[6px] leading-[20px] md:leading-[28px]">
                    <BsFillCheckCircleFill className="mt-[-3px] md:mt-0 text-[13px] md:text-[28px] lg:text-[18px] xl:text-[28px] text-[#fff] inline pr-[1px]" /> Action and goal-oreinted
                  </li>
                  <li className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff] py-0 md:py-[6px] leading-[20px] md:leading-[28px]">
                    <BsFillCheckCircleFill className="mt-[-3px] md:mt-0 text-[13px] md:text-[28px] lg:text-[18px] xl:text-[28px] text-[#fff] inline pr-[1px]" /> Forward looking
                  </li>
                  <li className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff] py-0 md:py-[6px] leading-[20px] md:leading-[28px]">
                    <BsFillCheckCircleFill className="mt-[-3px] md:mt-0 text-[13px] md:text-[28px] lg:text-[18px] xl:text-[28px] text-[#fff] inline pr-[1px]" /> Tailored one-on-one approach
                  </li>
                </ul>
              </div>
            </div>
            <p className="flex-[100%] lg:flex-[6%] fpr text-[18px] md:text-[24px] text-[#fff] py-[5px] leading-[28px] px-[4%] sc1440:px-[7%] mt-0 lg:mt-[-30px]">
              vs
            </p>
            <div className="flex flex-[100%] lg:flex-[47%]">
              <div className="mr-[20px] sc1440:w-[auto] w-[37px] md:w-[90px] lg:md:w-[60px] xl:w-[90px] h-[69px] md:w-[auto]">
                <Image src={clipboard} alt="clipboard" />
              </div>
              <div>
                <h6 className="fgr text-[16px] md:text-[36px] leading-[26px] md:leading-[36px] font-[600] text-[#fff]">
                  Traditional Therapy
                </h6>

                <ul>
                  <li className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff] py-0 md:py-[6px] leading-[20px] md:leading-[28px]">
                    <RiCloseCircleFill className="mt-[-3px] md:mt-0 text-[16px] md:text-[32px] lg:text-[22px] xl:text-[32px] text-[#fff] inline pr-[2px]" /> Analytical and introspective
                  </li>
                  <li className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff] py-0 md:py-[6px] leading-[20px] md:leading-[28px]">
                    <RiCloseCircleFill className="mt-[-3px] md:mt-0 text-[16px] md:text-[32px] lg:text-[22px] xl:text-[32px] text-[#fff] inline pr-[2px]" /> Slow-paced and long-term
                  </li>
                  <li className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff] py-0 md:py-[6px] leading-[20px] md:leading-[28px]">
                    <RiCloseCircleFill className="mt-[-3px] md:mt-0 text-[16px] md:text-[32px] lg:text-[22px] xl:text-[32px] text-[#fff] inline pr-[2px]" /> Focus more on the past to
                    <br /> resolve current challenges
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="fpr text-[#fff] text-[32px] md:text-[60px] sc1500:text-[85px] text-center pb-[27px] md:pb-[60px]">
            Our services
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-[0] md:gap-x-[5%] gap-y-[26px] md:gap-y-[50px]">
            <div className="w-[100%] md:w-[47%] flex items-start">
              {/* <div className="min-w-[70px] min-h-[70px] max-h-[70px] bg-pink-600 opacity-[.5] mr-[10px]"></div> */}
              <div className='min-w-[27px] md:min-w-[60px] w-[27px] md:w-[60px] min-h-[27px] md:min-h-[60px] h-[27px] md:h-[60px] mt-[10px] mr-[10px]'>              <Image src={person} alt="person" /></div>
              <div>
                <h4 className="fgb text-[16px] md:text-[36px] leading-[16px] md:leading-[36px] text-[#fff]">
                  Individual Coaching
                </h4>
                <p className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff]">
                  One-on-one coaching to help build self-confidence, improve
                  relationships, support careers, manage anxiety, and achieve your
                  personal goals.
                  <Link href="/individual">
                    <a className="block underline cursor-pointer">Learn more</a>
                  </Link>
                </p>
              </div>
            </div>

            <div className="w-[100%] md:w-[47%] flex items-start">
              {/* <div className="min-w-[70px] min-h-[70px] max-h-[70px] bg-pink-600 opacity-[.5] mr-[10px]"></div> */}
              <div className='min-w-[27px] md:min-w-[60px] w-[27px] md:w-[60px] min-h-[27px] md:min-h-[60px] h-[27px] md:h-[60px] mt-[10px] mr-[10px]'>              <Image src={ring} alt="image" /></div>
              <div>
                <h4 className="fgb text-[16px] md:text-[36px] leading-[16px] md:leading-[36px] text-[#fff]">
                  Premarital Coaching
                </h4>
                <p className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff]">
                  Assess your compatibility and get a better understanding of what
                  constitutes an ideal Islamic marriage.
                  <Link href="/premarital">
                    <a className="block underline cursor-pointer">Learn more</a>
                  </Link>
                </p>
              </div>
            </div>

            <div className="w-[100%] md:w-[47%] flex items-start">
              {/* <div className="min-w-[70px] min-h-[70px] max-h-[70px] bg-pink-600 opacity-[.5] mr-[10px]"></div> */}
              <div className='min-w-[27px] md:min-w-[60px] w-[27px] md:w-[60px] min-h-[27px] md:min-h-[60px] h-[27px] md:h-[60px] mt-[10px] mr-[10px]'><Image src={heart} alt="heart" /></div>
              <div>
                <h4 className="fgb text-[16px] md:text-[36px] leading-[16px] md:leading-[36px] text-[#fff]">Marital Coaching</h4>
                <p className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff]">
                  By understanding your partner better, the easier it’ll be to
                  find solutions to conflicts. Learn strategies to communicate and
                  resolve conflicts more effectively.
                   <Link href="/marital">
                  <a className="block underline cursor-pointer">Learn more</a>
                  </Link>
                </p>
              </div>
            </div>

            <div className="w-[100%] md:w-[47%] flex items-start">
              {/* <div className="min-w-[70px] min-h-[70px] max-h-[70px] bg-pink-600 opacity-[.5] mr-[10px]"></div> */}
              <div className='min-w-[27px] md:min-w-[60px] w-[27px] md:w-[60px] min-h-[27px] md:min-h-[60px] h-[27px] md:h-[60px] mt-[10px] mr-[10px]'>              <Image src={mosque} alt="mosque" /></div>
              <div>
                <h4 className="fgb text-[16px] md:text-[36px] leading-[16px] md:leading-[36px] text-[#fff]">
                  Religious Consulting
                </h4>
                <p className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff]">
                  Designed for either individuals or couples, speak directly to
                  Islamic scholars about any faith-based concerns that may be
                  troubling you.
                    <Link href="/religious">
                  <a className="block underline cursor-pointer">Learn more</a>
                    </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkSection;
