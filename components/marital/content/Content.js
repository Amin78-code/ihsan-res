import Image from "next/image";
// import heroimg from '../../assets/images/home/hero.jpg'
import pattern from "../../../assets/images/pattern.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import hands from "../../../assets/images/services/hands.svg";

const Content = ({ data, pb }) => {
  return (
    <section
      className={`w-full pt-[40px] md:pt-[70px] pb-[30px] md:pb-[50px] bg-[#fff] relativ e ${
        pb ? "pb-[300px]" : ""
      }`}
    >
      <div className="myContainer  pb-[30px]">
        <p className="fgr max-w-[1099px] text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] pb-[20px] md:pb-[20px]">
          Maintaining a healthy marriage takes consistent work. You’ll face new
          challenges to overcome every day, which can add stress and weight to a
          marriage. And if that becomes overwhelming, you’ll need new tools and
          techniques to keep your relationship going strong.
        </p>
        <p className="fgr max-w-[1099px] text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] pb-[20px] md:pb-[20px]">
          Marital coaching focuses on helping you and your partner truly
          understand one another, how to effectively communicate, and resolving
          conflicts in a way you’re both comfortable with. By addressing
          unresolved conflict, couples often feel relieved and more fulfilled
          after their coaching sessions.
        </p>
      </div>
      <div className="myContainer flex flex-col lg:flex-row justify-end relative pt-[3.7%] pb-[8%]">
        <div className="absolute left-0 top-[5%] xl:top-[unset] max-w-[90%]  lg:max-w-[90%] xl:max-w-[550px]">
          <div
            className="max-w-[100%] left-0 after:w-[150px] md:after:w-[337px] relative after:h-[100px] md:after:h-[200px] after:bg-[#0F2E3C] after:rounded-bl-[100px] after:right-[50px] after:bottom-[-25px] after:absolute after:z-[-1] z-[2]
        before:w-[150px] md:before:w-[337px] relative before:h-[100px] md:before:h-[200px] before:bg-[#0F2E3C] before:rounded-tr-[100px] before:left-[0] before:top-[-30px] sm:before:top-[-60px] before:absolute
        "
          >
            <Image src={data.img} />
          </div>
        </div>
        <div className="w-full xl:w-[50%] pt-[92%] sm:pt-[86%] md:pt-[680px] xl:pt-0">
          <h6 className="fgb text-[18px] md:text-[20px] leading-[18px] md:leading-[36px] text-[#555555]">
            Who is this for?
          </h6>
          <p className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#555555] pt-[10px] md:pt-[20px]">
            You could be 10 days or 10 years into your marriage. All that
            matters is if you think you or your partner can be happier together.
          </p>
          <p className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#555555] pt-[35px] pb-[35px]">
            It could be a good idea to seek marital coaching if:
          </p>
          <ul className="fle x flex-wra p list-disc">
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0">
              {" "}
              There is little to no communication between you and your spouse{" "}
            </li>
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0">
              You’ve become indifferent to each other{" "}
            </li>
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0">
              You and/or your spouse withhold affection{" "}
            </li>
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0">
              There are constant misunderstandings between you and your spouse{" "}
            </li>
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0">
              Any communication leads to arguments and negativity{" "}
            </li>
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0">
              You keep secrets from one another and lie{" "}
            </li>
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0">
              Either one of you is unfaithful, whether physically or emotionally{" "}
            </li>
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0">
              You’re having the same arguments over and over{" "}
            </li>
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0">
              You’re living separate lives
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Content;
