import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";

const DarkSection = () => {
  return (
    <section className="bg-[#0F2E3C] text-[#fff] pt-[94px] pb-[110px]">
      <div className="myContainer">
        {/*  */}
        <div className="flex ">
          <h2 className="fpr text-[70px] text-[#fff] leading-[70px] min-w-[450px]">
            What makes us different?
          </h2>
          <p className="fgr text-[24px] text-[#fff] pl-[5%]">
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
        {/* vs */}

        <div className="flex py-[130px] items-end">
          <div className="flex">
            <div className="w-[183px] h-[185px] bg-pink-400 opacity-[.3] mr-[20px]">
              {/* <Image src={} alt="image" /> */}
            </div>
            <div>
              <h6 className="fgr text-[36px] font-[600] text-[#fff]">
                Modern Coaching
              </h6>
              <ul>
                <li className="fgr text-[24px] text-[#fff] py-[6px] leading-[28px] pl-[25px]">
                  <BsFillCheckCircleFill className="text-[28px] text-[#fff] inline pr-[1px]" /> Action and goal-oreinted
                </li>
                <li className="fgr text-[24px] text-[#fff] py-[6px] leading-[28px] pl-[25px]">
                  <BsFillCheckCircleFill className="text-[28px] text-[#fff] inline pr-[1px]" /> Forward looking
                </li>
                <li className="fgr text-[24px] text-[#fff] py-[6px] leading-[28px] pl-[25px]">
                  <BsFillCheckCircleFill className="text-[28px] text-[#fff] inline pr-[1px]" /> Tailored one-on-one approach
                </li>
              </ul>
            </div>
          </div>
          <p className="fpr text-[24px] text-[#fff] py-[5px] leading-[28px] px-[8%] mt-[-10px]">
            vs
          </p>
          <div className="flex">
            <div className="w-[102px] h-[191px] bg-pink-400 opacity-[.3] mr-[20px]">
              {/* <Image src={} alt="image" /> */}
            </div>
            <div>
              <h6 className="fgr text-[36px] font-[600] text-[#fff]">
                Traditional Therapy
              </h6>

              <ul>
                <li className="fgr text-[24px] text-[#fff] py-[6px] leading-[28px] pl-[25px]">
                  <RiCloseCircleFill className="text-[32px] text-[#fff] inline pr-[2px]" /> Analytical and introspective
                </li>
                <li className="fgr text-[24px] text-[#fff] py-[6px] leading-[28px] pl-[25px]">
                  <RiCloseCircleFill className="text-[32px] text-[#fff] inline pr-[2px]" /> Slow-paced and long-term
                </li>
                <li className="fgr text-[24px] text-[#fff] py-[6px] leading-[28px] pl-[25px]">
                  <RiCloseCircleFill className="text-[32px] text-[#fff] inline pr-[2px]" /> Focus more on the past to
                  <br /> resolve current challenges
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* our services  */}
        <h2 className="fpr text-[#fff] text-[85px] text-center pb-[40px]">
          Our services
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-[5%] gap-y-[50px]">
          <div className="w-[47%] flex">
            <div className="min-w-[70px] min-h-[70px] max-h-[70px] bg-pink-600 opacity-[.5] mr-[10px]"></div>
            <div>
              <h4 className="fgr text-[36px] text-[#fff]">
                Individual Coaching
              </h4>
              <p className="fgr text-[24px] text-[#fff]">
                One-on-one coaching to help build self-confidence, improve
                relationships, support careers, manage anxiety, and achieve your
                personal goals. 
                <a className="block underline">Learn more</a>
              </p>
            </div>
          </div>

          <div className="w-[47%] flex">
            <div className="min-w-[70px] min-h-[70px] max-h-[70px] bg-pink-600 opacity-[.5] mr-[10px]"></div>
            <div>
              <h4 className="fgr text-[36px] text-[#fff]">
                Premarital Coaching
              </h4>
              <p className="fgr text-[24px] text-[#fff]">
                Assess your compatibility and get a better understanding of what
                constitutes an ideal Islamic marriage. 
                <a className="block underline">Learn more</a>
              </p>
            </div>
          </div>

          <div className="w-[47%] flex">
            <div className="min-w-[70px] min-h-[70px] max-h-[70px] bg-pink-600 opacity-[.5] mr-[10px]"></div>
            <div>
              <h4 className="fgr text-[36px] text-[#fff]">Marital Coaching</h4>
              <p className="fgr text-[24px] text-[#fff]">
                By understanding your partner better, the easier it’ll be to
                find solutions to conflicts. Learn strategies to communicate and
                resolve conflicts more effectively. 
                <a className="block underline">Learn more</a>
              </p>
            </div>
          </div>

          <div className="w-[47%] flex">
            <div className="min-w-[70px] min-h-[70px] max-h-[70px] bg-pink-600 opacity-[.5] mr-[10px]"></div>
            <div>
              <h4 className="fgr text-[36px] text-[#fff]">
                Religious Consulting
              </h4>
              <p className="fgr text-[24px] text-[#fff]">
                Designed for either individuals or couples, speak directly to
                Islamic scholars about any faith-based concerns that may be
                troubling you. 
                <a className="block underline">Learn more</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkSection;
