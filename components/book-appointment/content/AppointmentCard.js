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
        <h1 className="fpr text-[32px] md:text-[42px] leading-[32px] md:leading-[34px]  text-[#0F2E3C]  ">
          {appointment.name}
        </h1>
        <h5 className="fgr text-[16px] md:text-[22px] leading-[18px] md:leading-[36px]  text-[#555555]">
          {appointment.designation}
        </h5>
        <p className="fgr max-w-[756px] text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]  text-[#555555] pt-[5px]">
          {appointment.description}
        </p>
        <Link href="#">
          <a className="fgr font-[600] text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]  text-[#0F2E3C] capitalize pt-[15px] md:pt-[35px] hover:opacity-[.8]">
            learn more
          </a>
        </Link>

        <div className="w-full  mt-[25px]">
         {appointment.sessionsAvailability && <h6 className="  fgr font-[600] text-[#292929] text-[12px] md:text-[17px] leading-[16px] md:leading-[24px]  pb-[5px]">
            Available for:
          </h6>}
          <div className="flex flex-wrap justify-start max-h-[300px]">
            {appointment.sessionsAvailability?.map((sessionAvailability) => {
              return (
                <a
                  target="_blank"
                  rel="noreferrer"
                  key={sessionAvailability?.length >0  && sessionAvailability[0]}
                  href={sessionAvailability?.length >0  && sessionAvailability[1]?sessionAvailability[1]:""}
                  className="w-[36%] text-[#0F2E3C] hover:opacity-[0.8] fgb text-[12px] underline md:text-[18px] leading-[18px] md:leading-[24px] hover:text-[#555555] pt-[3px]"
                  >
                    <strong>{ sessionAvailability?.length >0  && sessionAvailability[0]}</strong>
                  </a> 
              );
            })
            }
          </div>
          {/* <li c/lassName="fgr font-[600] relative top-[-50px] float-right text-[#fff] transition-all duration-300 text-[12px] md:text-[16px] py-[15px] xl:py-[30px]"><a className="bg-[#AE8B5C] text-[#fff] rounded-[50px] px-[25px] py-[10px] hover:opacity-[.8]" href="https://calendly.com/farhan-ahmed/couples-session?month=2022-09"  target="_blank" without rel="noreferrer" >Schedule Now</a></li> */}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
