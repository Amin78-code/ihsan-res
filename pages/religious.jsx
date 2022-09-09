import Image from "next/image";
import Layout from "../components/layout/layout";
import Quraan from "../assets/images/services/Quran.svg";
import BrownSection from "../components/religious/brown-section/BrownSection";
import pattern from "../assets/images/pattern.png";

export default function Programs() {
  return (
    <Layout>
      {/* hero section jumbotron */}
      {/* <section className="w-full pt-[40px] md:pt-[70px] pb-[30px] md:pb-[150px] bg-[#F2F2F2] relative overflow-hidden">
        <div className="absolute left-0 right-0 top-0 w-full h-[100%]">
          <div className="scale-[1.2]">
            <Image src={pattern} />
          </div>
        </div>
        <div className="absolute left-0 right-0 top-0 w-full h-[100%] linear-gradient-4"></div>
          <div className="myContainer flex flex-col justify-center relative z-[1]">
            <h1 className="fpr text-[35px] md:text-[60px]  leading-[35px] md:leading-[60px]  mx-auto text-[#0F2E3C] text-center max-w-[1374px] pt-[10px]">
              Religious consulting
            </h1>
            <p className="fgr text-[12px] md:text-[18px] leading-[16px] md:leading-[30px] text-[#555555] text-center max-w-[760px] mx-auto pt-[15px] md:pt-[20px]">
              Our religious consultation services are a simpler way to connect
              and speak directly with an Islamic scholar about any situation
              you’d like to discuss.
            </p>
          </div>
          </section> */}
      <section className="w-full pt-[93px] pb-[93px] md:pt-[130px] md:pb-[120px] bg-[#F2F2F2] relative overflow-hidden">
        <div className="absolute left-0 right-0 top-0 w-full h-[100%]">
          <div className="scale-[1.5]">
            <Image src={pattern} />
          </div>
        </div>
        <div className="absolute left-0 right-0 top-0 w-full h-[100%] linear-gradient-4"></div>
        <div className="myContainer flex flex-col justify-center relative z-[1]">
          <h1 className="fpr text-[35px] md:text-[60px]  leading-[35px] md:leading-[60px]  mx-auto text-[#0F2E3C] text-center max-w-[1374px] pt-[10px]">
            Religious consulting
          </h1>
          <p className="fgr text-[12px] md:text-[18px] leading-[16px] md:leading-[30px] text-[#555555] text-center max-w-[760px] mx-auto pt-[15px] md:pt-[20px]">
            Our religious consultation services are a simpler way to connect and
            speak directly with an Islamic scholar about any situation you’d
            like to discuss.
          </p>
        </div>
      </section>

      {/* We face with -- section */}
      <section className="w-full  pt-[40px] md:pt-[70px]    pb-[30px] md:pb-[93px]   bg-[#fff]">
        <div className="myContainer">
          <div className=" w-full ">
            <p className="  max-w-[1090px] text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] mt-0 md:mt-4 text-[#555555] ">
              When faced with a faith-based issue, it can be hard consulting
              with an Islamic scholar on a whim.
            </p>
            <p className="  max-w-[1090px] text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] mt-4 text-[#555555] ">
              Our religious consultation services are a simpler way to connect
              and speak directly with an Islamic scholar about any situation
              you’d like to discuss. You can schedule a session at your
              convenience and do it anywhere and anytime through our easy-to-use
              online platform that’s safe and confidential.
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
              <div className="md:w-[54%] px-0 pt-5 pb-10 md:px-10 md:py-10 ">
                {/* <h2 className=" font-bold text-[16px] leading-[28px] lg:leading-[32px] lg:text-[26px] 2xl:text-[28px]  text-[#555555]"> */}
                <h2 className="fgb text-[18px] md:text-[20px] leading-[18px] md:leading-[36px] text-[#555555]">
                  Who is this for?
                </h2>

                <p className="text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] mt -4 text-[#555555] pt-[10px] md:pt-[20px]">
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
