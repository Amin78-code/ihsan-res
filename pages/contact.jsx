import Image from "next/image";
import React, { useState } from "react";
import Layout from "../components/layout/layout";
import pattern from "../assets/images/pattern.png";
import {FaEnvelope, FaPhoneAlt} from 'react-icons/fa'

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
<section className="relative overflow-hidden">
<div className='absolute left-0 right-0 top-0 w-full h-[100%]'>
        <div className='scale-[1.1]'><Image src={pattern} /></div>
      </div>
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] linear-gradient-1'>
      </div>
      <div className="main__container relative z-[1]">
          <div className="bg-[#F2F2F2 ] px-[42px] py-[50px] xl:p-[50px] xl:p-[100px] ">
            <div className="lg:w-1/2" >
              <h2 className="fpr text-[32px] sm:text-[42px] lg:text-[52px] xl:text-[80px] 2xl:text-[100px] leading-[36px] md:leading-[45px] lg:leading-[80px] xl:leading-[100px] text-[#0F2E3C]">Interested in working with us?</h2>
              <div className="flex mt-[20px] ">
                <FaEnvelope color="#0F2E3C" className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[35px]"  />
                <p className="ml-2 text-[#555555] text-[12px] sm:text-[16px] md:text-[20px] lg:text-[28px] fgr "><a href="mailto:info@ihsancoaching.com">info@ihsancoaching.com</a></p>
              </div>
              <div className="flex mt-[20px] ">
                <FaPhoneAlt color="#0F2E3C" className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[35px]"  />
                <p className="ml-2 text-[#555555] text-[12px] sm:text-[16px] md:text-[20px] lg:text-[28px] fgr "><a href="tel:+16305579427">1-630-557-9427</a></p>
              </div>
            </div>
            <form className=" flex flex-wrap justify-between gap-y-2 md:gap-y-[23px] mt-[50px]" 
            // action=""
            onSubmit={(e) => contact(e)}>
                <input className="shadow-[0_0_6px_#00000029] p-2 md:p-4 h-[32px] md:h-[50px] w-full lg:w-[49%] rounded-[7px] md:rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" type="text" placeholder="First Name*" required onChange={(e) => setFirstName(e.target.value)} />
                <input className="shadow-[0_0_6px_#00000029] p-2 md:p-4 h-[32px] md:h-[50px] w-full lg:w-[49%] rounded-[7px] md:rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" type="text" placeholder="Last Name*" required onChange={(e) => setLastName(e.target.value)} />
                <input className="shadow-[0_0_6px_#00000029] p-2 md:p-4 h-[32px] md:h-[50px] w-full lg:w-[49%] rounded-[7px] md:rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" type="text" placeholder="Email Address*" required onChange={(e) => setEmail(e.target.value)} />
                <input className="shadow-[0_0_6px_#00000029] p-2 md:p-4 h-[32px] md:h-[50px] w-full lg:w-[49%] rounded-[7px] md:rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" type="text" placeholder="Phone Number*" required onChange={(e) => setPhone(e.target.value)} />
                <textarea rows={3} className="shadow-[0_0_6px_#00000029] p-2 md:p-4 w-full rounded-[7px] md:rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" placeholder="Message" required onChange={(e) => setMessage(e.target.value)} />
                <div className=" w-full">
                  <button type="submit" className="shadow-[0_0_6px_#00000029] rounded-[40px] float-right bg-[#AE8B5C] text-[#fff] text-[12px] md:text-[20px] lg:text-[24px] font-bold px-10 py-3 ">Send</button>
                </div>
            </form>
          </div>
      </div>
    </section>
    </Layout>
  );
}