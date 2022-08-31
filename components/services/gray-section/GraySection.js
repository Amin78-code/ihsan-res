import Link from "next/link";

const GraySection = () => {
  return (
    <section className="bg-[#fff] px-0 md:px-[20px] py-[10px] md:pt-[100px]">
      <div className="myContainer">
        <div className="max-w-[1090px] bg-[#F2F2F2] mx-auto pt-[25px] md:pt-[47px] pb-[10px] md:pb-[30px]  slider-mainq  px-[50px]  ">
          <h1 className="fpr text-[#0F2E3C] text-[35px] md:text-[50px] leading-[35px] md:leading-[50px] text-center">
            Programs and seminars
          </h1>
          <p className="fgr max-w-[860px] text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] text-center mx-auto pt-[30px] md:pt-[15px] xl:pt-[30px]">
            In addition to a wide range of personalized coaching programs, Ihsan
            Coaching partners with local organizations to offer robust Programs
            and seminar including a wide range of Islamic lectures such as
            choosing the right partner, raising children, and proving the
            existence of the Creator. Click the link below for a full list of
            available programs and seminars.
          </p>
          <Link href="/contact"> 
            <a className="fgb w-[90px] md:w-[160px] h-[30px] md:h-[45px] bg-[#fff] text-[#182657] text-[12px] md:text-[16px] leading-[16px] md:leading-[26px] rounded-[50px] px-[5px] py-[10px] hover:opacity-[.8] cursor-pointer mb-[20px] flex justify-center items-center mt-[30px] mx-auto">
              Get Started
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GraySection;
