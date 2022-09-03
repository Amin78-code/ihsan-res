import Link from "next/link";

const HeadingText = () => {
  return (
    <section className="pt-[40px] md:pt-[79px] pb-[43px] md:pb-[85px]">
      <div className="myContainer text-center">
        <h2 className="fpr mb-[17px] md:mb-[49px] text-[25px] sm:text-[32px] md:text-[65px] text-[#0F2E3C]   mx-auto leading-[32px] md:leading-[65px]  ">
          Coaching through the
          <br /> lens of culture
        </h2>
        <p className="fgr text-[#292929] text-[12px] md:text-[16px] lg:text-[18px] leading-[16px] md:leading-[26px] max-w-[865px] mx-auto">
          Being fully open and transparent with a coach or therapist is the only
          way to find the root of your problems. But that takes trust and an
          understanding of your situation in the context of your background and
          culture - which can be especially hard to find for Muslims growing up
          in the West.
        </p>
        <p className="fgr text-[#292929] text-[12px] md:text-[16px] lg:text-[18px] leading-[16px] md:leading-[26px] max-w-[865px] mx-auto mt-[20px]">
          Ihsan Coaching fills the gap within our Islamic communities, providing
          access to licensed therapists that truly understand your background
          and unique perspective. Fully remote and accessible nationwide, our
          culturally competent and religiously-informed coaching staff offers
          individual coaching, premarital coaching, marital coaching, and
          religious consultations through an Islamic lens, respecting the unique
          juxtaposition of your culture and current situation.
        </p>
        <Link href="/contact">
          <a className="fgb block mx-auto w-[100px] md:w-[178px] h-[30px] md:h-[50px] bg-[#AE8B5C] text-[#fff] text-[12px] md:text-[16px] rounded-[50px] px-[18px] md:px-[30px] py-[6px] md:py-[13px] mt-[15px] md:mt-[40px] hover:opacity-[.8] cursor-pointer">
            Get Started
          </a>
        </Link>
      </div>
    </section>
  );
};

export default HeadingText;
