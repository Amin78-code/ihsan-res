import Image from "next/image";
// import heroimg from '../../assets/images/home/hero.jpg'
import pattern from "../../../assets/images/pattern.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import hands from "../../../assets/images/services/hands.svg";

const Content = ({ data, pb }) => {
  return (
    <section
      className={`w-full pt-[40px] md:pt-[70px] pb-[30px] md:pb-[40px] bg-[#fff] relativ e ${
        pb ? "pb-[300px]" : ""
      }`}
    >
      <div className="myContainer  ">
        <p className="fgr max-w-[1099px] text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] pb-[20px] md:pb-[20px]">
          Ihsan Coaching’s premarital coaching services are designed for
          individuals or couples considering or are on the path towards a Nikah.
        </p>
        <p className="fgr max-w-[1099px] text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] pb-[20px] md:pb-[20px]">
          Our premarital coaching program consists of five sessions that assess
          your compatibility, while we explore a wide range of topics and get a
          better grasp of the ideal Islamic marriage. Topics during these
          sessions can include discussions on marital attraction and
          preparation, expectations and assumptions regarding marriage, healthy
          communication skills, conflict resolutions, financial and paternal
          responsibilities, and tools to balance work and life.
        </p>
        <div className="flex flex-wrap flex-col lg:flex-row gap-x-0 md:gap-x-[4%] xl:gap-x-[4%] gap-y-[20px] xl:gap-y-[30px] pt-[4.5%] pb-[10%] lg:pb-[4%]">
          {data.sessions.map((value) => {
            return (
              <div
                key={value.text}
                className="w-full lg:w-[48%] h-[auto]  bg-[#0F2E3C] border-[#707070] border-[1px] rounded-[15px] md:rounded-[30px] px-[20px] md:px-[42px] py-[20px] md:py-[34px]"
              >
                <h4 className="fpr text-[22px] md:text-[30px] text-[#fff] ">
                  {value.title}
                </h4>
                <p className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#fff] mt-[2%] md:mt-[2%]">
                  {value.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="myContainer flex flex-col lg:flex-row justify-end relative pt-[3.7%] pb-[8%] min-h-[500px]">
        <div className="absolute left-0 top-[5%] xl:top-[unset] max-w-[90%]  lg:max-w-[90%] xl:max-w-[500px]">
          <div
            className="max-w-[100%] left-0 after:w-[150px] md:after:w-[337px] relative after:h-[100px] md:after:h-[200px] after:bg-[#0F2E3C] after:rounded-bl-[100px] after:right-[50px] after:bottom-[-25px] after:absolute after:z-[-1] z-[2]
        before:w-[150px] md:before:w-[237px] relative before:h-[100px] md:before:h-[160px] before:bg-[#0F2E3C] before:rounded-tr-[100px] before:left-[0] before:top-[-30px] sm:before:top-[-60px] before:absolute
        "
          >
            <Image src={data.img} />
          </div>
        </div>
        <div className="w-full xl:w-[58%] pt-[92%] sm:pt-[86%] md:pt-[680px] xl:pt-0">
          <h6 className="fgb text-[18px] md:text-[20px] leading-[18px] md:leading-[36px] text-[#555555]">
            {data.title}
          </h6>
          <p className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#555555] pt-[10px] md:pt-[20px]">
            {data.paragraph1}
          </p>
          <p className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#555555] pt-[10px] md:pt-[20px] pb-0md:pb-[35px]">
            {data.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
