import Image from "next/image";
import React, { useState } from "react";
import Layout from "../../../components/layout/layout";
import pattern from "../../../assets/images/pattern.png";

const DonateForm = () => {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Amount, setAmount] = useState("");
  const [CreditCard, setCreditCard] = useState("");
  const [DonationFor, setDonationFor] = useState("");

  const donateForm = (e) => {
    e.preventDefault();
    console.log("FirstName", FirstName);
    console.log("Email", Email);
    console.log("Amount", Amount);
    console.log("CreditCard", CreditCard);
    console.log("DonationFor", DonationFor);
  };
  return (
    <section className="relative overflow-hidden pt-[30px] md:pt-[50px]  pb-[30px] md:pb-[50px]">
      <div className="absolute left-0 right-0 top-0 w-full h-[100%]">
        <div className="scale-[1.1]">
          <Image src={pattern} />
        </div>
      </div>
      <div className="absolute left-0 right-0 top-0 w-full h-[100%] linear-gradient-1"></div>
      <div className="myContainer relative z-[1]">
        <div className="   ">
          <div className="lg:w-1/2">
            <h2 className="fpr text-[32px] md:text-[70px]   leading-[32px] md:leading-[60px]   text-[#0F2E3C]">
              Donate
            </h2>
          </div>
          <form
            className=" flex flex-wrap justify-between gap-y-2 md:gap-y-[23px] mt-[50px]"
            // action=""
            onSubmit={(e) => donateForm(e)}
          >
            <select
              required
              className="shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
              type="text"
              id="DonationFor"
              onChange={(e) => setDonationFor(e.target.value)}
              value={DonationFor}
            >
              <option>Donation For</option>
              <option>Ihsan Coaching1</option>
              <option>Ihsan Coaching2</option>
              <option>Ihsan Coaching3</option>
              <option>Ihsan Coaching4</option>
            </select>
            
            <input
              required
              className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px] "
              type="text"
              placeholder="First Name*"
              id="FullName"
              onChange={(e) => setFullName(e.target.value)}
              value={FullName}
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
              type="number"
              placeholder="Amount"
              id="Amount"
              onChange={(e) => setAmount(e.target.value)}
              value={Amount}
            />

            <input
              required
              className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
              id="ccn"
              type="tel"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              autoComplete="cc-number"
              maxLength="19"
              onChange={(e) => setCreditCard(e.target.value)}
              value={CreditCard}
              placeholder="xxxx xxxx xxxx xxxx"
            />
            <div className=" w-full">
              <button
                type="submit"
                className="shadow-[0_0_6px_#00000029] rounded-[40px] float-right bg-[#AE8B5C] text-[#fff] text-[12px] md:text-[16px]font-bold px-10 py-3 "
              >
                Submit Donation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DonateForm;
