import Link from "next/link";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Content = ({ data, pb }) => {
  console.log("data?.profileImg", data?.profileImg);
  console.log("data?.profileImg?.src", data?.profileImg?.src);
  return (
    <section
      className={`w-full pt-[40px] md:pt-[50px] pb-[30px] md:pb-[110px] bg-[#fff] relativ e ${
        pb ? "pb-[300px]" : ""
      }`}
    >
      <div className="myContainer flex flex-col xl:flex-row justify-en d relative">
        <div className="w-full flex flex-col-reverse justify-between lg:flex-row">
          <div className="w-full lg:w-[50%] pt-[30px] md:pt-[50px] lg:pt-0">
            <h1 className="fpr text-[32px] md:text-[60px] leading-[32px] md:leading-[70px]  text-[#0F2E3C] pt-[10px] md:pt-[40px]">
              {data.name}
            </h1>
            <h5 className="fgr text-[22px] md:text-[26px] leading-[22px] md:leading-[26px]  text-[#555555]">
              {data.designation}
            </h5>
            <p className="fgr max-w-[552px] text-[12px] md:text-[16px] leading-[16px] md:leading-[24px] text-[#555555] pt-[15px] md:pt-[20px]">
              {data?.paragraph1}
            </p>
            <p className="fgr max-w-[552px] text-[12px] md:text-[16px] leading-[16px] md:leading-[24px] text-[#555555] pt-[15px] md:pt-[20px]">
              {data?.paragraph2}
            </p>
            <p className="fgr max-w-[552px] text-[12px] md:text-[16px] leading-[16px] md:leading-[24px] text-[#555555] pt-[15px] md:pt-[20px]">
              {data?.paragraph3}
            </p>
          </div>

          <div className="w-full lg:w-[50%] pl-[0] lg:pl-[20px] lg:pr-[45px]">
            {/* <div className="rounded-[250px] overflow-hidden ">
            {data?.profileImg &&  <Image src={data?.profileImg?.src} width={data?.profileImg?.width} height={data?.profileImg?.height}/>
           } </div> */}

            <div className="home-hero-img mt-0 lg:mt-[80px] flex justify-center lg:block">
              <div className="img_contain er">
                <span className="inline-block relative z-[3] ">
                  <Image src={data?.profileImg} />
                  <div className="before:z-[-1] before:w-[58px] md:before:w-[160px] relative before:h-[58px] md:before:h-[160px] before:bg-[#AE8B5C] before:rounded-[100px] before:right-[0] md:before:right-[-5%] lg:before:right-[-35px] before:bottom-0 md:before:bottom-[-50px] before:absolute"></div>
                </span>
              </div>
            </div>

            <div className="flex flex-row lg:flex-col sc1350:flex-row     items-center   md:items-start    sc1350:items-center pt-[20px] md:pt-[60px] gap-y-[0] lg:gap-y-[20px] sc1350:gap-y-[0]">
              <div className="w-ful l lg: w-[50%]      md:w-[100%]    sc1350:w-[50%]">
                <h6 className="fgr font-[600] text-[#292929] text-[13px] leading-[13px] md:text-[18px] md:leading-[28px] pb-[7px]">
                  Available for:
                </h6>
                {<p className="fgr text-[12px] md:text-[18px] leading-[16px] md:leading-[26px] text-[#555555]">
                  {data.id=='Imam_Azhar_Subedar' || data.id=='Mufti_Zeshan_Ahmed'? 'Religious Consultation ':'Individual Coaching'}
                </p>
}
                <p className="fgr text-[12px] md:text-[18px] leading-[16px] md:leading-[26px] text-[#555555]">
                {data.id=='Imam_Azhar_Subedar' || data.id=='Mufti_Zeshan_Ahmed'? '':'Couples Coaching'}

                  
                </p>
                <p className="fgr text-[12px] md:text-[18px] leading-[16px] md:leading-[26px] text-[#555555]">
                {data.id=='Imam_Azhar_Subedar'|| data.id=='Mufti_Zeshan_Ahmed'  ?   '':'Premarital Coaching'}

                  
                  
                </p>
              </div>
              <div className="w-ful l lg:  w-[50%]      md:w-[100%]    sc1350:w-[50%] flex justify-end lg:justify-start">
                <Link href="/consultation">
                  <a>
                    <button className="fgr w-[120px] md:w-[210px] h-[28px] md:h-[50px] border-[1px] md:border-[3px] border-[#FAF7F2] flex justify-between items-center bg-[#0F2E3C] text-[12px] md:text-[16px] text-[#fff] rounded-[50px] px-[11px] md:px-[30px] py-[7px] md:py-[10px] hover:text-[#555555] hover:bg-[#fff] group">
                      Get started
                      <BsFillArrowRightCircleFill className="text-[#fff] text-[12px] md:text-[20px] group-hover:text-[#555]" />
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
