import Link from "next/link";
import Image from "next/image";
import { RiCloseCircleFill } from "react-icons/ri";
import { BsFillCheckCircleFill } from "react-icons/bs";
import bulb from "../../../assets/images/home/bulb.svg";
import ring from "../../../assets/images/home/ring.svg";
import pattern from "../../../assets/images/pattern.png";
import heart from "../../../assets/images/home/heart.svg";
import mosque from "../../../assets/images/home/mosque.svg";
import person from "../../../assets/images/home/person.svg";
import clipboard from "../../../assets/images/home/clipboard.svg";

const DarkSection = () => {
  return (
    <section className="bg-[#0F2E3C] text-[#fff] pt-[44px] md:pt-[94px] pb-[58px] md:pb-[110px] relative overflow-hidden">
      <div className="absolute left-0 right-0 top-0 w-full h-[100%] overlay-img">
        <Image src={pattern} className="scale-[1.2] " />
      </div>
      <div className="absolute left-0 right-0 top-0 w-full h-[100%] bg-[#0F2E3C] opacity-[.94]"></div>

      <div className="myContainer relative z-[2]">
        <div className="px-0 sm:px-[5%] md:px-[0] xl:px-[5%]">
          <div className="flex flex-col lg:flex-row justify-between">
            <h2 className="fpr text-[32px] md:text-[50px] lg:text-[60px] sc1500:text-[70px] text-[#fff] leading-[32px] md:leading-[50px] lg:leading-[65px] sc1500:leading-[70px] min-w-[100%] md:min-w-[420px]">
              What makes <br className="bloc k sm:hidde n" /> us different?
            </h2>
            <p className="fgr max-w-[680px] text-[12px] md:text-[16px] leading-[16px] md:leading-[28px] text-[#fff] pl-0 lg:pl-[1%] pt-[16px] lg:pt-0">
              Coaching is another form of support for people that feel stuck in
              life, but don’t have a clinical illness. And Unlike traditional
              therapy, coaching is a more direct, goal-oriented approach to
              mental health that goes beyond the emotional resolution of past
              pain or trauma. Our licensed therapists serve as coaches to help
              you understand your current life experiences and belief systems.
              By laying the groundwork of where you are now and where you want
              to be, we can get you feeling you again, faster.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between pt-[60px] pb-[50px] md:py-[100px] items-center lg:items-end">
            <div className="flex flex-[100% ] lg:flex-[47% ]">
              <div className="mr-[20px]   sc1440:w-[auto] w-[52px] md:w-[150px] lg:md:w-[140px] xl:w-[150px] h-[53px]  md:mt-[-20px]">
                <Image src={bulb} alt="bulb" />
              </div>
              <div>
                <h6 className="fgr text-[16px] md:text-[28px] leading-[26px] md:leading-[36px] font-[600] text-[#fff]">
                  Modern Coaching
                </h6>
                <ul>
                  <li className="fgr flex text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#fff] py-0 md:py-[3px] leading-[20px] md:leading-[28px]">
                    <BsFillCheckCircleFill className="mt-[2px] sm:mt-[-3px] md:mt-0 text-[13px] md:text-[15px] lg:text-[24px]  text-[#fff] inline pr-[3px] sm:pr-[8px]" />
                    Action and goal-oreinted
                  </li>
                  <li className="fgr flex text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#fff] py-0 md:py-[3px] leading-[20px] md:leading-[28px]">
                    <BsFillCheckCircleFill className="mt-[2px] sm:mt-[-3px] md:mt-0 text-[13px] md:text-[15px] lg:text-[24px]  text-[#fff] inline pr-[3px] sm:pr-[8px]" />
                    Forward looking
                  </li>
                  <li className="fgr flex text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#fff] py-0 md:py-[3px] leading-[20px] md:leading-[28px]">
                    <BsFillCheckCircleFill className="mt-[2px] sm:mt-[-3px] md:mt-0 text-[13px] md:text-[15px] lg:text-[24px]  text-[#fff] inline pr-[3px] sm:pr-[8px]" />
                    Tailored one-on-one approach
                  </li>
                </ul>
              </div>
            </div>
            <p className="flex-[100% ] lg:flex-[6% ] fpr text-[18px] md:text-[24px] text-[#fff] py-[5px] leading-[28px] 
            
            sc1200:pl-[4%] 
            sc1200:pr-[4%] 
            
            sc1440:pl-[0%]
            sc1440:pr-[0%]
            
            mt-0 lg:mt-[-30px]">
              vs
            </p>
            <div className="flex flex-[100% ] lg:flex-[47% ]">
              <div className="mr-[25px] sc1440:w-[165px] w-[34px] md:w-[150px] lg:md:min-w-[60px] xl:w-[150px] h-[69px] md:px-[35px]">
                <Image src={clipboard} alt="clipboard" />
              </div>
              <div>
                <h6 className="fgr text-[16px] md:text-[28px] leading-[26px] md:leading-[36px] font-[600] text-[#fff]">
                  Traditional Therapy
                </h6>

                <ul>
                  <li className="fgr flex text-[12px] md:text-[16px] leading-[16px] md:leading-[20px] text-[#fff] py-0 md:py-[3px] leading-[20px] ">
                    <RiCloseCircleFill className="mt-[2px] sm:mt-[-3px] md:mt- 0 text-[16px] md:text-[18px] lg:text-[25px] text-[#fff] inline pr-[3px] sm:pr-[7px]" />
                    Analytical and introspective
                  </li>
                  <li className="fgr flex text-[12px] md:text-[16px] leading-[16px] md:leading-[20px] text-[#fff] py-0 md:py-[3px] leading-[20px] ">
                    <RiCloseCircleFill className="mt-[2px] sm:mt-[-3px] md:mt- 0 text-[16px] md:text-[18px] lg:text-[25px] text-[#fff] inline pr-[3px] sm:pr-[7px]" />
                    Slow-paced and long-term
                  </li>
                  <li className="fgr flex text-[12px] md:text-[16px] leading-[16px] md:leading-[20px] text-[#fff] py-0 md:py-[3px] leading-[20px] ">
                    <RiCloseCircleFill className="mt-[2px] sm:mt-[-3px] md:mt- 0 text-[16px] md:text-[18px] lg:text-[25px] text-[#fff] inline pr-[3px] sm:pr-[7px]" />
                    Focus more on the past to
                    <br /> resolve current challenges
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="fpr text-[#fff] text-[32px] md:text-[60px] lg:text-[75px] sc1500:text-[90px] text-center pb-[27px] md:pb-[60px]">
            Our services
          </h2>
          <div className="flex flex-wrap justify-between items-center gap-x-[0] md:gap-x-[7%] gap-y-[26px] md:gap-y-[50px]">
            <div className="w-[100%] sm:w-[auto] md:w-[46% ] min-w-[100%] sm:min-w-[450px] flex items-start">
              {/* <div className="min-w-[70px] min-h-[70px] max-h-[70px] bg-pink-600 opacity-[.5] mr-[10px]"></div> */}
              <div className="min-w-[23px] md:min-w-[45px] w-[23px] md:w-[45px] min-h-[23px] md:min-h-[45px] h-[23px] md:h-[45px] md:mt-[-5px] mt-0 sm:mt-[-20px] mr-[7px] sm:mr-[15px]">
                <Image src={person} alt="person" />
              </div>
              <div>
                <h4 className="fgb text-[16px] md:text-[28px] leading-[26px] md:leading-[36px] text-[#fff] pb-[5px]">
                  Individual Coaching
                </h4>
                <p className="fgr max-w-[100%] sm:max-w-[385px] text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#fff]">
                  One-on-one coaching to help build self-confidence, improve
                  relationships, support careers, manage anxiety, and achieve
                  your personal goals.
                  <Link href="/individual">
                    <a className="block underline cursor-pointer">Learn more</a>
                  </Link>
                </p>
              </div>
            </div>

            <div className="w-[100%] sm:w-[auto] md:w-[46% ] min-w-[100%] sm:min-w-[450px] flex items-start">
              {/* <div className="min-w-[70px] min-h-[70px] max-h-[70px] bg-pink-600 opacity-[.5] mr-[10px]"></div> */}
              <div className="min-w-[27px] md:min-w-[45px] w-[27px] md:w-[45px] min-h-[27px] md:min-h-[45px] h-[27px] md:h-[45px] md:mt-[-5px] mt-0 sm:mt-[-20px] mr-[7px] sm:mr-[15px]">
                
                <Image src={ring} alt="image" />
              </div>
              <div>
                <h4 className="fgb text-[16px] md:text-[28px] leading-[26px] md:leading-[36px] text-[#fff] pb-[5px]">
                  Premarital Coaching
                </h4>
                <p className="fgr max-w-[100%] sm:max-w-[360px] text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#fff]">
                  Assess your compatibility and get a better understanding of
                  what constitutes an ideal Islamic marriage.
                  <Link href="/premarital">
                    <a className="block underline cursor-pointer">Learn more</a>
                  </Link>
                </p>
              </div>
            </div>

            <div className="w-[100%] sm:w-[auto] md:w-[46% ] min-w-[100%] sm:min-w-[450px] flex items-start">
              {/* <div className="min-w-[70px] min-h-[70px] max-h-[70px] bg-pink-600 opacity-[.5] mr-[10px]"></div> */}
              <div className="min-w-[27px] md:min-w-[45px] w-[27px] md:w-[45px] min-h-[27px] md:min-h-[45px] h-[27px] md:h-[45px] md:mt-[-7px] mt-0 sm:mt-[-20px] mr-[7px] sm:mr-[15px]">
                <Image src={heart} alt="heart" />
              </div>
              <div>
                <h4 className="fgb text-[16px] md:text-[28px] leading-[26px] md:leading-[36px] text-[#fff] pb-[5px]">
                  Marital Coaching
                </h4>
                <p className="fgr max-w-[100%] sm:max-w-[355px] text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#fff]">
                  By understanding your partner better, the easier it’ll be to
                  find solutions to conflicts. Learn strategies to communicate
                  and resolve conflicts more effectively.
                  <Link href="/marital">
                    <a className="block underline cursor-pointer">Learn more</a>
                  </Link>
                </p>
              </div>
            </div>

            <div className="w-[100%] sm:w-[auto] md:w-[46% ] min-w-[100%] sm:min-w-[450px] flex items-start">
              {/* <div className="min-w-[70px] min-h-[70px] max-h-[70px] bg-pink-600 opacity-[.5] mr-[10px]"></div> */}
              <div className="min-w-[27px] md:min-w-[45px] w-[27px] md:w-[45px] min-h-[27px] md:min-h-[45px] h-[27px] md:h-[45px] md:mt-[-5px] mt-0 sm:mt-[-20px] mr-[7px] sm:mr-[15px]">
                
                <Image src={mosque} alt="mosque" />
              </div>
              <div>
                <h4 className="fgb text-[16px] md:text-[28px] leading-[26px] md:leading-[36px] text-[#fff] pb-[5px]">
                  Religious Consulting
                </h4>
                <p className="fgr max-w-[100%] sm:max-w-[385px] text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#fff]">
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
