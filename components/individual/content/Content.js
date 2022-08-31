import Image from "next/image";
// import heroimg from '../../assets/images/home/hero.jpg'
import pattern from "../../../assets/images/pattern.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import hands from "../../../assets/images/services/hands.svg";

const Content = ({ data, pb }) => {
  return (
    <section
      className={`w-full pt-[40px] md:pt-[70px] pb-[30px] md:pb-[80px] bg-[#fff] relativ e ${
        pb ? "pb-[300px]" : ""
      }`}
    >
      <div className="myContainer">
        <p className="fgr max-w-[1099px] text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] pb-[20px] md:pb-[20px]">
          Whether you need solutions to ongoing problems, need direction in how
          to achieve your personal goals or just aren’t feeling quite like
          yourself, our individual coaching services are tailored to your needs.
        </p>
        <p className="fgr max-w-[1099px] text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] pb-[20px] md:pb-[20px]">
          Everyone’s situation is different, and how we respond and feel is
          different as well. That’s why each coaching session is highly
          personalized, ensuring you get the right support and advice you need
          to overcome challenges or achieve milestones.
        </p>
        <p className="fgr max-w-[1099px] text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] pb-[20px] md:pb-[20px]">
          Each session is goal-oriented, accelerating your journey towards well
          being and a better you.
        </p>
      </div>
      <div className="myContainer flex flex-col lg:flex-row justify-end relative pt-[3.7%] pb-[8%]">
        <div className="absolute left-0 top-[5%] xl:top-[unset] max-w-[90%]  lg:max-w-[90%] xl:max-w-[530px]">
          <div
            className="max-w-[100%] left-0 after:w-[100px] md:after:w-[200px] relative after:h-[100px] md:after:h-[200px] after:bg-[#0F2E3C] after:rounded-[100px] after:right-[-15px] sm:after:right-[-35px] after:bottom-[-15px] sm:after:bottom-[-40px] after:absolute after:z-[-1] z-[2]
        before:w-[150px] md:before:w-[237px] relative before:h-[100px] md:before:h-[160px] before:bg-[#0F2E3C] before:rounded-tr-[100px] before:left-[0] before:top-[-30px] sm:before:top-[-50px] before:absolute
        ">
            <Image src={data.img} />
          </div>
        </div>
        <div className="w-full xl:w-[50%] pt-[98%] sm:pt-[86%] md:pt-[680px] xl:pt-[30px]">
          <h6 className="fgb text-[18px] md:text-[20px] leading-[18px] md:leading-[36px] text-[#555555]">
            Who is this for?
          </h6>
          <p className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#555555] pt-[10px] md:pt-[20px]">
            If you’re experiencing any of these emotions and they’re affecting
            your day-to-day quality of life, consider contacting us about an
            individual coaching plan.
          </p>
          <h6 className="fgb text-[12px] md:text-[20px] leading-[16px] md:leading-[36px] text-[#555555] py-[10px] md:py-[20px]">
            You may need an individual coach if you’re…
          </h6>

          <ul className="flex flex-wrap list-disc">
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0 w-[90%] sm:w-[50%]">
              Feeling lost and confused
            </li>
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0 w-[90%] sm:w-[50%]">
              Not sure what to do in life
            </li>
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0 w-[90%] sm:w-[50%]">
              Having relationship issues
            </li>
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0 w-[90%] sm:w-[50%]">
              Feeling a career change, but have doubts
            </li>
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0 w-[90%] sm:w-[50%]">
              Feeling anxious
            </li>
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0 w-[90%] sm:w-[50%]">
              Feeling stress, and lacking self confidence
            </li>
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0 w-[90%] sm:w-[50%]">
              Full of anger
            </li>
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0 w-[90%] sm:w-[50%]">
              Feeling a change, but need guidance
            </li>
            <li className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-[#555555] ml-[5%] sm:ml-0 w-[90%] sm:w-[50%]">
              Feeling lonely
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Content;
