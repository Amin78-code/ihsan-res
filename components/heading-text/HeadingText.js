import Link from "next/link";

const HeadingText = () => {
  return (
    <section className="pt-[79px] pb-[85px]">
      <div className="myContainer text-center">
        <h2 className="fpr mb-[49px] text-[85px] max-w-[940px] mx-auto leading-[85px]">Coaching through the lens of culture</h2>
        <p className="fgr text-[#292929] text-[24px] max-w-[1297px] mx-auto">
          Being fully open and transparent with a coach or therapist is the only
          way to find the root of your problems. But that takes trust and an
          understanding of your situation in the context of your background and
          culture - which can be especially hard to find for Muslims growing up
          in the West.
        </p>
        <p className="fgr text-[#292929] text-[24px] max-w-[1297px] mx-auto mt-[20px]">
          Ihsan Coaching fills the gap within our Islamic communities, providing
          access to licensed therapists that truly understand your background
          and unique perspective. Fully remote and accessible nationwide, our
          culturally competent and religiously-informed coaching staff offers
          individual coaching, premarital coaching, marital coaching, and
          religious consultations through an Islamic lens, respecting the unique
          juxtaposition of your culture and current situation.
        </p>
        <a className="fgr block mx-auto w-[202px] h-[61px] bg-[#AE8B5C] text-[#fff] text-[24px] rounded-[50px] px-[30px] py-[13px] mt-[52px] hover:opacity-[.8]">
         
        <Link href="/contact">
             Get Started
           </Link>

        </a>
      </div>
    </section>
  );
};

export default HeadingText;
