import Image from "next/image";
import React, { useState } from "react";
import Layout from "../components/layout/layout";
import pattern from "../assets/images/pattern.png";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");

  const contact = (e) => {
    e.preventDefault();
    console.log("FirstName", FirstName);
    console.log("LastName", LastName);
    console.log("Email", Email);
    console.log("Phone", Phone);
    console.log("Message", Message);
  };
  return (
    <Layout>
      <section className="relative overflow-hidden py-[40px] sm:[50px] md:py-[90px]">
        <div className="absolute left-0 right-0 top-0 w-full h-[100%]">
          <div className="scale-[1.1]">
            <Image src={pattern} />
          </div>
        </div>
        <div className="absolute left-0 right-0 top-0 w-full h-[100%] linear-gradient-1"></div>
        <div className="myContainer relative z-[1]">
          <div className="  ">
            <div className="lg:w-1/2">
              <h2 className="fpr text-[40px] md:text-[60px]  leading-[40px] md:leading-[60px] text-[#0F2E3C]">
                Interested in <br /> working with us?
              </h2>
              <div className="flex mt-[12px] ">
                <FaEnvelope
                  color="#0F2E3C"
                  className="text-[10px] md:text-[20px] pt-[5px]"
                />
                <p className="ml-1.5 text-[#555555] text-[12px] md:text-[16px] fgr ">
                  <a href="mailto:info@ihsancoaching.com">
                    info@ihsancoaching.com
                  </a>
                </p>
              </div>
              <div className="flex mt-[12px] ">
                <FaPhoneAlt
                  color="#0F2E3C"
                  className="text-[10px] md:text-[20px] pt-[5px]"
                />
                <p className="ml-1.5 text-[#555555] text-[12px] md:text-[16px] fgr ">
                  <a href="tel:+16305579427">1-630-557-9427</a>
                </p>
              </div>
            </div>
            <form
              className=" flex flex-wrap justify-between gap-y-2 md:gap-y-[23px] mt-[50px]"
              // action=""
              onSubmit={(e) => contact(e)}
            >
              <input
                className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
                type="text"
                placeholder="First Name*"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
                type="text"
                placeholder="Last Name*"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
                type="text"
                placeholder="Email Address*"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
                type="text"
                placeholder="Phone Number*"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                rows={3}
                className="shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
                placeholder="Message"
                required
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className=" w-full">
                <button
                  type="submit"
                  className="shadow-[0_0_6px_#00000029] rounded-[40px] float-right bg-[#AE8B5C] text-[#fff] text-[12px] md:text-[16px] font-bold px-10 py-2 "
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
