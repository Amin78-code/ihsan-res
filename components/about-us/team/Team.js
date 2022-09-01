import Link from "next/link";
import Image from "next/image";
import email from "../../../assets/images/icons/email.svg";
import meeting from "../../../assets/images/about-us/meeting.svg";
import Farhan from "../../../assets/images/about-us/person1.svg";
import person2 from "../../../assets/images/about-us/person2.svg";
import Asmaa from "../../../assets/images/about-us/person7.svg";
import Rawand from "../../../assets/images/about-us/person8.svg";
import Rehena from "../../../assets/images/about-us/person5.svg";
import MohammedBemat from "../../../assets/images/about-us/person6.svg";
import person7 from "../../../assets/images/about-us/person4.svg";
import person8 from "../../../assets/images/about-us/person3.svg";
import ProfileCard from "./ProfileCard";

const coaches = [
  {
    profileImg: Farhan,
    name: "Farhan Ahmed",
    slugName: "Farhan_Ahmed",
    designation: "Founder & Coach",
    status: "Masters in Clinical Mental Health Counseling",
    email: "farhan.ahmed@ihsancoaching.com",
  },
  {
    profileImg: Rehena,
    name: "Rehena Rana",
    slugName: "Rehena_Rana",
    designation: "Coach",
    status: "Masters in Clinical Psychology",
    email: "rehena.rana@ihsancoaching.com",
  },
  {
    profileImg: Rawand,
    name: "Rawand Abdelghani",
    slugName: "Rawand_Abdelghani",
    designation: "Coach",
    status: "Masters of Science in Social Work",
    email: "rawand.abdelghani@ihsancoaching.com",
  },
  {
    profileImg: Asmaa,
    name: "Asmaa Mahran",
    slugName: "Asmaa_Mahran",
    designation: "Coach",
    status: "Masters of Science in Psychology",
    email: "asmaa.mahran@ihsancoaching.com",
  },
  
 
  {
    profileImg: MohammedBemat,
    name: "Mohammed Bemat",
    slugName: "Mohammed_Bemat_Coach",
    designation: "Coach",
    status: "Masters in Pastoral Studies",
    email: "mohammed.bemat@ihsancoaching.com",
  },
  
];

const religiousConsultants = [
  {
    profileImg: person7,
    name: "Mufti Zeshan Ahmed",
    slugName: "Mufti_Zeshan_Ahmed",
    designation: " Religious Consultant",
    status: "Resident Scholar at Masjid Uthman",
    email: "zeshan.ahmed@ihsancoaching.com",
  },
  {
    profileImg: person8,
    name: "Imam Azhar Subedar",
    slugName: "Imam_Azhar_Subedar",
    designation: " Religious Consultant",
    status: "Masters in Islamic Sciences",
    email: "azhar.subedar@ihsancoaching.com",
  },
];

const Team = () => {
  return (
    <section id="our_team" className="pb-[20px] md:pb-[50px] ">
      <div className=" myContainer min-h-[auto] md:min-h-[480px] flex items-center relative">
        <div className="absolute z-[-1] top-0 w-full lg:w-[48%] max-w-[830px]">
          <Image src={meeting} alt="meeting" />
        </div>
        <div className="myContainer flex justify-end items-end">
          <div className="w-full lg:w-[50%] pl-0 lg:pl-[3.5%] pr-0 lg:pr-[3%]   pt-[80%] sm:pt-[75%] lg:pt-[0]  ">
            <h2 className="fpr text-[32px] md:text-[63px]   text-[#0F2E3C] leading-[32px] md:leading-[63px]  ">
              Meet the team
            </h2>
            <p className="fgr text-[12px] md:text-[16px] text-[#555] leading-[16px] md:leading-[26px] mt-[10px] md:mt-[26px]">
              Our secret to success is an exceptional and diverse team, all of
              whom come from diverse and unique backgrounds. Our coaches are
              licensed therapists with extensive experience offering culturally
              and spiritually responsive services.
            </p>
          </div>
        </div>
      </div>
      <div className="myContainer pt-[50px] md:pt-[30px]  ">
        <h2 className="fpr text-[28px] md:text-[40px]  text-[#0F2E3C] leading-[24px] md:leading-[40px] ">
          Coaches
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap md:gap-x-[4%] lg:gap-x-[2.5%] gap-y-[50px] mt-[20px] md:mt-[30px] mb-[30px] md:mb-[50px]">
          {coaches.map((value, index) => {
            return <ProfileCard data={value} key={value.profileImg + index} />;
          })}
        </div>
        <h2 className="fpr text-[28px] md:text-[40px]  text-[#0F2E3C] leading-[24px] md:leading-[40px] ">
          <Link href="/religious">Religious Consultants</Link>
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap md:gap-x-[4%] lg:gap-x-[2.5%] gap-y-[50px] mt-[20px] md:mt-[30px] mb-[30px] md:mb-[50px]">
          {religiousConsultants.map((valu, inde) => {
            return <ProfileCard data={valu} key={valu.profileImg + inde} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
