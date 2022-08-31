import Link from "next/link";
import Image from "next/image";
import pattern from "../../../assets/images/pattern.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import hands from "../../../assets/images/services/hands.svg";

const ImgText = ({ data, pb, flip }) => {
  return (
    <section
      className={`w-full bg-[#fff] ${
        pb
          ? "pt-[55px] md:pt-[120px] pb-[70px] md:pb-[200px]"
          : "pt-[55px] md:pt-[120px] pb-[15px] md:pb-[65px] "
      }`}
    >
      <div
        className={`myContainer flex justify-end flex-col ${
          flip == true ? "xl:flex-row-reverse" : "xl:flex-row"
        } relative`}
      >
        <div
          className={`
        absolute
        
      
        ${flip == true ? "    right-0  " : "   left-0   "} 

        
        top-0 xl:top-[unset] max-w-[85%] sm:max-w-[90%] md:max-w-[100%] xl:max-w-[46%]
        `}
        >
          <div
            className={`
            
            max-w-[100%] xl:max-w-[550px ] sc1350:max-w-[780px ]
            
            
         
          ${
            flip == true
              ? " right-0  after:left-[-15px]       sm:after:right-[-35px]"
              : " left-0  after:right-[-15px]       sm:after:right-[-35px]  "
          } 

          after:w-[100px] md:after:w-[200px] relative after:h-[100px] md:after:h-[200px] after:bg-[#0F2E3C] after:rounded-[100px] 
          after:bottom-[-15px] sm:after:bottom-[-40px] after:absolute after:z-[-1] z-[2]
          
        before:w-[150px] md:before:w-[337px]   before:h-[100px] md:before:h-[160px] before:bg-[#0F2E3C] 
        
      

        ${
          flip == true
            ? "  before:right-[0] before:rounded-tl-[100px] "
            : " before:left-[0]  before:rounded-tr-[100px] "
        } 

        before:top-[-30px] sm:before:top-[-50px] before:absolute

        `}
          >
            <Image
              src={data.img}
              className={`  ${flip == true ? "   scale-x-[-1]	  " : "       "} `}
            />
          </div>
        </div>
        <div className="w-full xl:w-[50%] pt-[85%] md:pt-[650px] xl:pt-0">
          <h1 className="fpr text-[32px] md:text-[45px] leading-[32px] md:leading-[50px]  text-[#0F2E3C] pt-[10px] md:pt-[40px]">
            {data.title}
          </h1>
          <p className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#555555] pt-[15px] pb-[10px] md:pb-[20px]">
            {data.paragraph1}
          </p>
          <p className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#555555]">
            {data.paragraph2}
          </p>
          <Link href={`/${data.link}`}>
            <a className="fgr w-[150px] h-[40px] bg-[#AE8B5C] text-[#fff] text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] rounded-[50px] px-[5px] py-[13px] hover:opacity-[.8] cursor-pointer mb-[20px] flex justify-center items-center mt-[30px]">
              Learn more
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImgText;
