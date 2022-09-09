import React from "react";

const GrayDiv = () => {
  return (
    <section id="rate" className="w-full pb-[70px] lg:pb-[120px]">
      <div className="myContainer">
        <div className=" bg-[#F2F2F2] flex flex-col lg:flex-row justify-center gap-y-[20px] lg:gap-y-[0] px-[30px] md:px-[50px] py-[40px] md:py-[75px]">
          <div className="w-full lg:w-[60%] pr-[60px]">
            <h1 className="fpr text-[25px] md:text-[40px]  leading-[25px] md:leading-[40px]   text-[#0F2E3C] pb-0 lg:pb-[20px]">
              Rates
            </h1>
            <p className="fgr text-[12px] md:text-[18px] leading-[16px] md:leading-[25px] text-[#555555]">
              The duration of standard sessions is 1 hour long. Fees are paid at
              the end of each session directly through our online booking
              system. Ihsan Coaching has a limited capacity of slides scale rate
              for individuals who may be facing financial difficulties. In order
              to apply for our sliding scale, please contact us prior to booking
              your appointment.
            </p>
          </div>

          <div className="w-full lg:w-[40%] lg:border-[#707070] border-0 lg:border-l-[1px] border-l-0 pl-0 lg:pl-[60px]     border-t-[#707070] lg:border-t-[0] border-t-[1px] pt-[20px] lg:pt-0">
            <p className="fgr text-[12px] md:text-[18px] leading-[16px] md:leading-[25px] text-[#555555]">
              Individual Coaching session - $99.00 USD
            </p>
            <p className="fgr text-[12px] md:text-[18px] leading-[16px] md:leading-[25px] text-[#555555]">
              Couples coaching session - $125.00 USD
            </p>
            <p className="fgr text-[12px] md:text-[18px] leading-[16px] md:leading-[25px] text-[#555555]">
              Premarital coaching (5 sessions) - $500 USD
            </p>
            <p className="fgr text-[12px] md:text-[18px] leading-[16px] md:leading-[25px] text-[#555555]">
              Religious consultation session - $99 USD
            </p>

            <p className="fgr font-[600] text-[12px] md:text-[18px] leading-[16px] md:leading-[25px] text-[#555555] pt-[20px] md:pt-[30px]">
              Packages:
            </p>
            <p className="fgr text-[12px] md:text-[18px] leading-[16px] md:leading-[25px] text-[#555555]">
              Four individual coaching sessions - $350 USD
            </p>
            <p className="fgr text-[12px] md:text-[18px] leading-[16px] md:leading-[25px] text-[#555555]">
              Four couples coaching sessions - $450 USD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrayDiv;
