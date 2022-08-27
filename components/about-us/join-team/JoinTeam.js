import Image from "next/image";
import React, { useState } from "react";
import pattern from '../../../assets/images/pattern.png';
import vector from '../../../assets/images/about-us/vector.svg';

const JoinTeam = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [FileChoosed, setFileChoosed] = useState(null);

  const joinTeam = (e) => {
    e.preventDefault();
    console.log("FirstName", FirstName);
    console.log("LastName", LastName);
    console.log("Email", Email);
    console.log("Message", Message);
    console.log("FileChoosed", FileChoosed);
  };

  return (
    <section className="w-full py-[40px] md:py-[93px] bg-[#F2F2F2] relative overflow-hidden">
      <div className='absolute left-0 right-0 top-0 w-full h-[100%]'>
      <div className='scale-[1.1]'><Image src={pattern} /></div>
      </div>
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] linear-gradient-3'>
      </div>
      <div className="myContainer flex flex-col-reverse md:flex-row relative z-[1]">

        <div className="w-full md:w-[50%] pt-[5%] sm:pt-0">
          <h1 className="fpr text-[32px] md:text-[70px] 2xl:text-[100px] leading-[32px] md:leading-[70px] 2xl:leading-[100px] text-[#0F2E3C] pb-[15px] md:pb-[30px]">
            Join our team
          </h1>
          <p className="text-[12px] md:text-[24px] text-[#292929] mb-[15px] md:mb-[25px]">
            Whether you already have a private practice or are thinking about opening one, working indepenently can be a lot of work. We understand the unique challenges in building your personal practice without getting overwhelmed.
          </p>
          <p className="text-[12px] md:text-[24px] text-[#292929] mb-[15px] md:mb-[25px]">
            Many of the coaches at Ihsan Coaching have their own independent practice, but also work with us due to our extensive network and consistently-growing source of referral. We also offer mentorship,and other growth opportunities to build your coaching skills.
          </p>
          <p className="text-[12px] md:text-[24px] text-[#292929] mb-[15px] md:mb-[25px]">
            By joining our team, you’ll have the opportunity to coach nationwide, host seminars, and benefit the Muslim community nationwide. At Ihsan Coaching, we invest in our coaches, and help them grow to their potential.
          </p>


          <p className="fgb text-[12px] md:text-[24px] text-[#292929] ">Why work with Ihsan Coaching</p>
          <ul className="list-disc">

            <li className="fgr text-[12px] md:text-[24px] text-[#292929] ml-[20px]">Regular referrals to build your own clientele </li>
            <li className="fgr text-[12px] md:text-[24px] text-[#292929] ml-[20px]">Growth opportunities and building your skillset </li>
            <li className="fgr text-[12px] md:text-[24px] text-[#292929] ml-[20px]">Completely remote and flexible work schedule (ability to choose your own hours)</li>
            <li className="fgr text-[12px] md:text-[24px] text-[#292929] ml-[20px]">Competitive compensation (we offer 10% more than others) </li>
            <li className="fgr text-[12px] md:text-[24px] text-[#292929] ml-[20px]">Inclusion in our website and marketing materials for exposure</li>


          </ul>
          <div className='mt-[50px] block md:hidden'>
            <h5 className='fgb text-[#555555] text-[14px] md:text-[28px] leading-[18px] leading-[36px] pb-[10px]'>Apply Now</h5>
            <form className=" flex flex-wrap justify-between gap-y-2 md:gap-y-[23px] mt-[10px]"
              // action="" 
              onSubmit={(e) => joinTeam(e)}>
              <input className="shadow-[0_0_6px_#00000029] p-2 md:px-[.8rem] md:py-[.5rem] w-full lg:w-[49%] rounded-[7px] md:rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" type="text" placeholder="First Name*" required onChange={(e) => setFirstName(e.target.value)} />
              <input className="shadow-[0_0_6px_#00000029] p-2 md:px-[.8rem] md:py-[.5rem] w-full lg:w-[49%] rounded-[7px] md:rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" type="text" placeholder="Last Name*" required onChange={(e) => setLastName(e.target.value)} />
              <input className="shadow-[0_0_6px_#00000029] p-2 md:px-[.8rem] md:py-[.5rem] w-full lg:w-[100%] rounded-[7px] md:rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" type="text" placeholder="Email Address*" required onChange={(e) => setEmail(e.target.value)} />
              <textarea rows="4" className=" shadow-[0_0_6px_#00000029] p-2 md:px-[.8rem] md:py-[.5rem] w-full rounded-[7px] md:rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" placeholder="Message" required onChange={(e) => setMessage(e.target.value)}>
              </textarea>
              <input className="shadow-[0_0_6px_#00000029] p-2 md:px-[.8rem] md:py-[.5rem] w-full lg:w-[100%] rounded-[7px] md:rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px] bg-[#fff]" type="file" id="myfile" name="myfile" />
              <div className=" w-full">
                <button type="submit" className="shadow-[0_0_6px_#00000029] rounded-[40px] float-right bg-[#AE8B5C] w-[94px] md:w-[auto] h-[31px] md:h-[auto] text-[#fff] text-[12px] md:text-[20px] lg:text-[24px] font-bold px-[11px] md:px-10 py-[7px] md:py-3 ">Send</button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full md:w-[50%] mb-[30px] mb-0 pl-0 md:pl-[3%]">

          <div className="w-full flex justify-center">
            <Image src={vector} className='' />
          </div>
          <div className='mt-[50px] hidden md:block'>
            <h5 className='fgb text-[#555555] text-[14px] md:text-[28px] leading-[18px] leading-[36px] pb-[10px]'>Apply Now</h5>
            <form className=" flex flex-wrap justify-between gap-y-2 md:gap-y-[23px] mt-[10px]"
              // action=""
              onSubmit={(e) => joinTeam(e)}>
              <input className="shadow-[0_0_6px_#00000029] p-2 md:px-[.8rem] md:py-[.5rem] w-full lg:w-[49%] rounded-[7px] md:rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" type="text" placeholder="First Name*" required onChange={(e) => setFirstName(e.target.value)} />
              <input className="shadow-[0_0_6px_#00000029] p-2 md:px-[.8rem] md:py-[.5rem] w-full lg:w-[49%] rounded-[7px] md:rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" type="text" placeholder="Last Name*" required onChange={(e) => setLastName(e.target.value)} />
              <input className="shadow-[0_0_6px_#00000029] p-2 md:px-[.8rem] md:py-[.5rem] w-full lg:w-[100%] rounded-[7px] md:rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" type="text" placeholder="Email Address*" required onChange={(e) => setEmail(e.target.value)} />
              <textarea rows="4" className=" shadow-[0_0_6px_#00000029] p-2 md:px-[.8rem] md:py-[.5rem] w-full rounded-[7px] md:rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" placeholder="Message" required onChange={(e) => setMessage(e.target.value)} />
              <input className="shadow-[0_0_6px_#00000029] p-2 md:px-[.8rem] md:py-[.5rem] w-full lg:w-[100%] rounded-[7px] md:rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px] bg-[#fff]" type="file" id="myfile" name="myfile" onChange={(e) => setFileChoosed(e.target.value)} />
              <div className=" w-full">
                <button type="submit" className="shadow-[0_0_6px_#00000029] rounded-[40px] float-right bg-[#AE8B5C] w-[94px] md:w-[auto] h-[31px] md:h-[auto] text-[#fff] text-[12px] md:text-[20px] lg:text-[24px] font-bold px-[11px] md:px-10 py-[7px] md:py-3 ">Send</button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default JoinTeam;
