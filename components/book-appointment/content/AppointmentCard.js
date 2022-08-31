import Link from "next/link";
import React from "react";
import Image from "next/image";
import { data } from "autoprefixer";

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row  ">
      <div className="w-full lg:max-w-[410px]">
        <div className="">
          {appointment?.profileImg && (
            <Image
              src={appointment?.profileImg?.src}
              width={appointment?.profileImg?.width}
              height={appointment?.profileImg?.height}
            />
          )} 
        </div>
      </div>

      <div className="w-full pl-0 lg:pl-[30px] mb-[30px] lg:mb-0">
        <h1 className="fpr text-[32px] md:text-[42px] leading-[32px] md:leading-[42px]  text-[#182657]  ">
          {appointment.name}
        </h1>
        <h5 className="fgr text-[22px] md:text-[28px] leading-[22px] md:leading-[36px]  text-[#555555]">
          {appointment.designation}
        </h5>

        <p className="fgr max-w-[756px] text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]  text-[#555555] pt-[5px] md:pt-[10px]">
          {appointment.description}
        </p>
        <Link href="#">
          <a className="fgr font-[600] text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]  text-[#0F2E3C] capitalize pt-[15px] md:pt-[35px]">
            learn more
          </a>
        </Link>

        <div className="w-full  mt-[25px]">
          <h6 className="  fgr font-[600] text-[#292929] text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]  pb-[3px]">
            Available for:
          </h6>
          <div className="flex flex-wrap justify-start max-h-[300px]">
            {appointment.sessionsAvailability.map((sessionAvailability) => {
              return (
                <p
                  key={sessionAvailability}
                  className="w-[36%] fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]  text-[#555555]"
                >
                  {sessionAvailability}
                </p>
              );
            })}
          </div>
          <li className="fgr font-[600] relative top-[-50px] float-right text-[#fff] transition-all duration-300 text-[12px] md:text-[16px] py-[15px] xl:py-[30px]"><a className="bg-[#AE8B5C] text-[#fff] rounded-[50px] px-[25px] py-[10px] hover:opacity-[.8]" href="https://calendly.com/farhan-ahmed/couples-session?month=2022-09"  target="_blank" without rel="noreferrer" >Schedule Now</a></li>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
