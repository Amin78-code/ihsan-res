import Image from "next/image";
import React, { useState } from "react";
import Layout from "../components/layout/layout";
import pattern from "../assets/images/pattern.png";

export default function Consultation() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [DateofBirth, setDateofBirth] = useState("");
  const [Time, setTime] = useState("");
  const [Services, setServices] = useState("");
  const [PartnerName, setPartnerName] = useState("");
  const [ReasonForService, setReasonForService] = useState("");

  const requestConsultation = (e) => {
    e.preventDefault();
    console.log("FirstName", FirstName);
    console.log("LastName", LastName);
    console.log("Email", Email);
    console.log("Phone", Phone);
    console.log("DateofBirth", DateofBirth);
    console.log("Time", Time);
    console.log("Services", Services);
    console.log("PartnerName", PartnerName);
    console.log("ReasonForService", ReasonForService);
  };

  return (
    <Layout>
      
      <section className="relative overflow-hidden py-[40px] sm:[50px] md:py-[90px]">
        <div className='absolute left-0 right-0 top-0 w-full h-[100%]'>
          <div className='scale-[1.1]'><Image src={pattern} /></div>
        </div>
        <div className='absolute left-0 right-0 top-0 w-full h-[100%] linear-gradient-1'></div>
        <div className="myContainer relative z-[1]">
          <div className="  ">
            <div className="lg:w-1/2">
              <h2 className="fpr text-[32px] md:text-[70px]   leading-[32px] md:leading-[60px]   text-[#0F2E3C]">
                Request a<br /> consultation
              </h2>
              <p className="max-w-[560px] mt-5 md:mt-5 text-[#555555] text-[12px] md:text-[16px] fgr ">
                With a unique understanding of the challenges Muslims may face
                in Western society, we’re able to offer tailored programs that
                bridge traditional coaching and Islamic consulting. And unlike
                traditional therapy, goal-oriented coaching is a more direct
                path to well being. To get started, fill out the form below and
                a member of our team will be in touch with you as soon as
                possible.
              </p>
              <p className="max-w-[560px] mt-5 md:mt-5 text-[#555555] text-[12px] sm:text-[16px]   fgr ">
                If this is not your first appointment, please visit our calendly
                portal to book your next appointment.
              </p>
            </div>
            <form
              className=" flex flex-wrap justify-between gap-y-2 md:gap-y-[23px] mt-[50px]"
              // action=""
              onSubmit={(e) => requestConsultation(e)}
            >
              <input
                required
                className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px] "
                type="text"
                placeholder="First Name*"
                id="FirstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={FirstName}
              />
              <input
                required
                className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
                type="text"
                placeholder="Last Name*"
                id="LastName"
                onChange={(e) => setLastName(e.target.value)}
                value={LastName}
              />
              <input
                required
                className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
                type="text"
                placeholder="Email Address*"
                id="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
              />
              <input
                required
                className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
                type="text"
                placeholder="Phone Number*"
                id="Phone"
                onChange={(e) => setPhone(e.target.value)}
                value={Phone}
              />
              <input
                required
                className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
                type="text"
                placeholder="Date of Birth*"
                id="DateofBirth"
                onChange={(e) => setDateofBirth(e.target.value)}
                value={DateofBirth}
              />
              <input
                required
                className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
                type="text"
                placeholder="Best time to contact you?"
                id="Time"
                onChange={(e) => setTime(e.target.value)}
                value={Time}
              />
              <input
                required
                className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
                type="text"
                placeholder="Services you’re interested in*"
                id="Services"
                onChange={(e) => setServices(e.target.value)}
                value={Services}
              />
              <input
                required
                className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
                type="text"
                placeholder="If marital/prematiral, please include name of partner"
                id="PartnerName"
                onChange={(e) => setPartnerName(e.target.value)}
                value={PartnerName}
              />
              <textarea
                rows={4}
                className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
                placeholder="Reason for service?"
                id="ReasonForService"
                onChange={(e) => setReasonForService(e.target.value)}
                value={ReasonForService}
              />
              <div className=" w-full">
                <button
                  type="submit"
                  className="shadow-[0_0_6px_#00000029] rounded-[40px] float-right bg-[#AE8B5C] text-[#fff] text-[12px] md:text-[16px]font-bold px-10 py-3 "
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
