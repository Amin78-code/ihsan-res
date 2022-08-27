import Image from "next/image";
import Layout from "../components/layout/layout";
import Quraan from "../assets/images/services/Quran.svg";
import BrownSection from "../components/religious/brown-section/BrownSection";
import pattern from '../assets/images/pattern.png';

export default function Programs() {
  return (
    <Layout>
      {/* hero section jumbotron */}
      <section className="w-full py-[93px] bg-[#F2F2F2] relative overflow-hidden">
      <div className='absolute left-0 right-0 top-0 w-full h-[100%]'>
        <div className='scale-[1.5]'><Image src={pattern} /></div>
      </div>
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] linear-gradient-4'></div>
        <div className="myContainer flex">
        {/* <div className="myContainer flex flex-col justify-center relative z-[1]"> */}
          <div className=" w-full xl:h-[540px] flex justify-center flex-col text-center relative z-[1]">
            <h1 className="fpr text-[35px] sm:[52px] md:text-[75px] sc1500:text-[100px] leading-[35px] md:leading-[75px] sc1500:leading-[140px] text-[#0F2E3C] ">
              Religious consulting
            </h1>
            <p className="text-[12px] md:text-[20px] lg:text-[24px] text-[#555555] pt-[15px] md:pt-[25px] sc1500:pt-[55px]">
              Our religious consultation services are a simpler way to connect
              and speak directly with an Islamic <br /> scholar about any
              situation you’d like to discuss.
            </p>
          </div>
        </div>
      </section>

      {/* We face with -- section */}
      <section className="w-full pt-[40px] md:pt-[60px] lg:pt-[93px] pb-[30px] md:pb-[93px]   bg-[#fff]">
        <div className="myContainer">
          <div className=" w-full ">
            <p className=" text-[12px] md:text-[20px] lg:text-[24px] mt-4 text-[#555555] ">
              When faced with a faith-based issue, it can be hard consulting
              with an Islamic scholar on a whim. <br />
              <br /> Our religious consultation services are a simpler way to
              connect and speak directly with an Islamic scholar about any
              situation you’d like to discuss. You can schedule a session at
              your convenience and do it anywhere and anytime through our
              easy-to-use online platform that’s safe and confidential.
            </p>

            <div className="w-full flex flex-wrap justify-between mt-20">
              <div className="md:w-[44%] ">
                <div className="image-div relative before:content-['']  before:w-[50%] before:h-[40px] before:rounded-tr-[160px] before:absolute before:top-[-40px] before:left-0 before:bg-[#0F2E3C] after:content-[''] after:w-[50%] after:h-[40px] after:rounded-bl-[160px] after:absolute after:bottom-[-32px] after:right-[20px] after:bg-[#0F2E3C] ">
                  <Image
                    className="rounded-tr-[160px] "
                    src={Quraan}
                    alt="AlQuraan"
                  />
                </div>
              </div>
              <div className="md:w-[54%] p-10 ">
                <h2 className=" font-bold text-[16px] leading-[28px] lg:leading-[32px] lg:text-[26px] 2xl:text-[28px]  text-[#555555]">
                  Who is this for?
                </h2>
                <br />
                <p className="text-[12px] md:text-[20px] lg:text-[24px] mt-4 text-[#555555] ">
                  Religious consultations are open to anyone that has a
                  faith-baith concerns, or feels conflicted about finances,
                  divorce, goals, etc., from the perspective of religion and
                  Islam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrownSection />
    </Layout>
  );
}
