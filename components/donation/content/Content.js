import Link from "next/link";
import Image from "next/image";
import donation from "../../../assets/images/donation/cover.jpeg";

const Content = ({ data, pb }) => {
  return (
    <section
      className={`w-full pt-[40px] md:pt-[50px] pb-[30px] md:pb-[110px] bg-[#fff] relativ e ${
        pb ? "pb-[300px]" : ""
      }`}
    >
      <div className="myContainer flex flex-col xl:flex-row justify-end relative">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-[50%] pt-[30px] md:pt-[50px] lg:pt-0">
            <h1 className="fpr text-[32px] md:text-[60px] leading-[32px] md:leading-[70px]  text-[#182657] pt-[10px] md:pt-[40px]">
              Donation is a Great Act of Kindness
            </h1>
            {/* <h5 className="fgr text-[22px] md:text-[26px] leading-[22px] md:leading-[26px]  text-[#555555]">
              designation
            </h5> */}

            <p className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[24px] text-[#555555] pt-[15px] md:pt-[20px]">
              Many Muslims do not seek help from others due to religious,
              cultural, and trust issues (Inayat, 2007). We have been receiving
              requests throughout the United States from individuals who cannot
              afford to seek services. It is reported that 1 out of every 3
              individuals cannot afford to get help (Mental Health Survey,
              2020).
            </p>
            <p className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[24px] text-[#555555] pt-[15px] md:pt-[20px]">
              Therefore, our goal is to help individuals seek the services they
              need without worrying about the financial burden. The funds raised
              will be strictly used to help any individual who genuinely cannot
              afford to use our services. Please help us raise these funds so we
              can fulfill this need within the Muslim community. Please share
              the link and donate generously.
            </p>
          </div>

          <div className="w-full lg:w-[50%] pl-[0] lg:pl-[30px]">
            {/* <div className="rounded-[250px] overflow-hidden ">
            {data?.profileImg &&  <Image src={data?.profileImg?.src} width={data?.profileImg?.width} height={data?.profileImg?.height}/>
           } </div> */}

            <div className="home-hero-img mt-0 lg:mt-[80px] flex justify-center lg:block">
              <div className="img_contain er">
                <span className="inline-block relative z-[3]">
                  <Image
                    src={donation}
                    className=" rounded-[20px] overflow-hidden"
                  />
                  <div className="before:z-[-1] before:w-[58px] md:before:w-[160px] relative before:h-[58px] md:before:h-[160px] before:bg-[#AE8B5C] before:rounded-[100px] before:right-[0] md:before:right-[-5%] lg:before:right-[-35px] before:bottom-0 md:before:bottom-[-50px] before:absolute"></div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
