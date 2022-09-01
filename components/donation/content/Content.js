import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { MdLock } from "react-icons/md";
import classRoom from "../../../assets/images/donation/class.jpg";

const Content = ({ data, pb }) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [CreditCard, setCreditCard] = useState("");
  const [Country, setCountry] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [province, setProvince] = useState("");
  const [zipPostalCode, setZipPostalCode] = useState("");
  const [donationAmmount, setDonationAmmount] = useState("00.00");

  const donateForm = (e) => {
    e.preventDefault();
    console.log("FirstName", FirstName);
    console.log("LastName", LastName);
    console.log("Email", Email);
    console.log("Country", Country);
    console.log("Address1", address1);
    console.log("Address2", address2);
    console.log("province", province);
    console.log("zipPostalCode", zipPostalCode);
    console.log("CreditCard", CreditCard);
  };
  const ammount = (value) => {
    setDonationAmmount(value);
  };

  return (
    <section
      className={`w-full pt-[30px] md:pt-[50px] pb-[30px] md:pb-[50px] bg-[#fff] relativ e ${
        pb ? "pb-[300px]" : ""
      }`}
    >
      <form className="myContainer" onSubmit={(e) => donateForm(e)}>
        <div className="relative w-full lg:max-w-[760px] h-[auto] mx-auto bg-[#0F2E3C] border-[#707070] border-[1px] text-center rounded-[15px] md:rounded-[30px] px-[20px] md:px-[42px] py-[20px] md:py-[40px]  overflow-hidden">
          <div className="absolute left-0 right-0 top-0 w-full h-[100%] overlay-im g">
            <Image src={classRoom} className="scale-[1.2 ] w-full" />
          </div>

          <div className="absolute left-0 right-0 top-0 w-full h-[100%] bg-[#0F2E3C] opacity-[.9]"></div>

          <div className="relative z-[2]">
            <h4 className="fpr text-[24px] md:text-[38px]  leading-[24px] md:leading-[38px] text-[#fff] ">
              Canadian Muslim Counselling
              <br />
              Donations
            </h4>

            <div className="w-[100px] h-[4px] rounded-[5px] bg-[#fff] mb-[15px] mt-[20px] mx-auto"></div>

            <p className="fgr max-w-[500px] mx-auto text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] text-[#fff] mt-[2%] md:mt-[2%]">
              Help our organization by donating today! All donations go directly
              to making a difference for our cause.
            </p>

            <span className="fgr w-[160px] md:w-[165px] h-[24px] mx-auto mt-[20px] md:h-[26px] border-[1px] md:border-[3px] border-[#fff] flex justify-between items-center bg-[#fff] text-[12px]  text-[#555555] rounded-[50px] px-[7px] md:px-[10px]">
              <MdLock className="inline text-[#77d006] text-[10px] md:text-[13px]  " />
              100% Secure Donation
            </span>
          </div>
        </div>

        <div className="w-full lg:max-w-[760px] mx-auto py-[15px] md:py-[25px]">
          <span className="fgb text-[14px] md:text-[22px] leading-[16px] md:leading-[24px] text-[#292929] block mb-[15px]">
            How much would you like to donate today?
          </span>
          <hr />
          <p className="fgr mb-2 text-[12px] md:text-[16px] leading-[16px] md:leading-[22px] text-[#292929]  pt-[20px]">
            All donations directly impact our organization and help us further
            our mission.
          </p>

<div className="w-full relative after:w-[50px] after:h-[70px] after:top-[40px] after:md:top-[30px] after:right-[-20px] after:md:right-[0px] after:absolute after:content-['$'] after:text-[18px] after:md:text-[45px]">
<input
            className="shadow-[0_0_6px_#00000029] px-5 py-5 md:px-7 md:py-3 w-full rounded-[7px] md:rounded-[12px] text-[18px] md:text-[45px] mt-[20px] pr-[50px]"
            type="text"
            placeholder="00.00"
            required
            value={`${donationAmmount}`}
            onChange={(e) => setDonationAmmount(e.target.value)}
          />
</div>

          <div className="w-full flex flex-wrap justify-between gap-x-[2%] gap-y-[20px] pt-[30px]">
            <button
              onClick={() => ammount("10.00")}
              id="btn10"
              className="flex justify-center items-start w-[48%] sm:w- [48%] lg:w-[32%] shadow-[0_0_6px_#00000029] rounded-[20px] bg-[#AE8B5C] text-[#fff] text-[18px] md:text-[35px] font-bold px-3 py-2 lg:py-[22px]"
            >
              <div className="flex items-start">
                <div className="flex items-start">
                  <span className="text-[12px] md:text-[20px] mt-[7px]">$</span>
                  <span className="px-[3px]">10</span>
                  <span className="text-[12px] md:text-[20px] mt-[7px]">
                    .00
                  </span>
                </div>
              </div>
            </button>
            <button
              onClick={() => ammount("25.00")}
              type="button"
              id="btn25"
              value="25.00"
              className="flex justify-center items-start w-[48%] sm:w- [48%] lg:w-[32%] shadow-[0_0_6px_#00000029] rounded-[20px] bg-[#AE8B5C] text-[#fff] text-[18px] md:text-[35px] font-bold px-3 py-2 lg:py-[22px]"
            >
              <div className="flex items-start">
                <span className="text-[12px] md:text-[20px] mt-[7px]">$</span>
                <span className="px-[3px]">25</span>
                <span className="text-[12px] md:text-[20px] mt-[7px]">.00</span>
              </div>
            </button>
            <button
              onClick={() => ammount("50.00")}
              id="btn50"
              value="50.00"
              className="flex justify-center items-start w-[48%] sm:w- [48%] lg:w-[32%] shadow-[0_0_6px_#00000029] rounded-[20px] bg-[#AE8B5C] text-[#fff] text-[18px] md:text-[35px] font-bold px-3 py-2 lg:py-[22px]"
            >
              <div className="flex items-start">
                <span className="text-[12px] md:text-[20px] mt-[7px]">$</span>
                <span className="px-[3px]">50</span>
                <span className="text-[12px] md:text-[20px] mt-[7px]">.00</span>
              </div>
            </button>
            <button
              onClick={() => ammount("100.00")}
              id="btn100"
              value="100.00"
              className="flex justify-center items-start w-[48%] sm:w- [48%] lg:w-[32%] shadow-[0_0_6px_#00000029] rounded-[20px] bg-[#AE8B5C] text-[#fff] text-[18px] md:text-[35px] font-bold px-3 py-2 lg:py-[22px]"
            >
              <div className="flex items-start">
                <span className="text-[12px] md:text-[20px] mt-[7px]">$</span>
                <span className="px-[3px]">100</span>
                <span className="text-[12px] md:text-[20px] mt-[7px]">.00</span>
              </div>
            </button>
            <button
              onClick={() => ammount("250.00")}
              id="btn250"
              value="250.00"
              className="flex justify-center items-start w-[48%] sm:w- [48%] lg:w-[32%] shadow-[0_0_6px_#00000029] rounded-[20px] bg-[#AE8B5C] text-[#fff] text-[18px] md:text-[35px] font-bold px-3 py-2 lg:py-[22px]"
            >
              <div className="flex items-start">
                <span className="text-[12px] md:text-[20px] mt-[7px]">$</span>
                <span className="px-[3px]">250</span>
                <span className="text-[12px] md:text-[20px] mt-[7px]">.00</span>
              </div>
            </button>
            <button
              onClick={() => ammount("")}
              id="btn35"
              value="35.00"
              className="flex justify-center items-start w-[48%] sm:w- [48%] lg:w-[32%] shadow-[0_0_6px_#00000029] rounded-[20px] bg-[#AE8B5C] text-[#fff] text-[18px] md:text-[20px] font-bold px-10 py-2 lg:py-[30px]"
            >
              Custom Ammount
            </button>
          </div>
        </div>

        <div className="w-full lg:max-w-[760px] mx-auto py-[15px] md:py-[25px]">
          <span className="fgb text-[14px] md:text-[22px] leading-[16px] md:leading-[24px] text-[#292929] block mb-[15px]">
            How much would you like to donate today?
          </span>
          <hr />
          <p className="fgr mb-2 text-[12px] md:text-[16px] leading-[16px] md:leading-[22px] text-[#292929]  pt-[20px]">
            All donations directly impact our organization and help us further
            our mission.
          </p>

          <div className="w-full flex flex-wrap gap-x-[1.5%] gap-y-[20px] py-[10px]">
            <input
              required
              className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px] "
              type="text"
              placeholder="First Name"
              id="FirstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={FirstName}
            />
            <input
              required
              className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full lg:w-[49%] rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
              type="text"
              placeholder="Last Name"
              id="LastName"
              onChange={(e) => setLastName(e.target.value)}
              value={LastName}
            />
            <input
              required
              className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
              type="text"
              placeholder="Email Address"
              id="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
            />
          </div>
        </div>

        <div className="w-full lg:max-w-[760px] mx-auto py-[15px] md:py-[25px]">
          <span className="fgb text-[14px] md:text-[22px] leading-[16px] md:leading-[24px] text-[#292929] block mb-[15px]">
            Credit Card Info
          </span>
          <hr />
          <p className="fgr mb-2 text-[12px] md:text-[16px] leading-[16px] md:leading-[22px] text-[#292929]  pt-[20px]">
            This is a secure SSL encrypted payment.
          </p>

          <div className="w-full flex flex-wrap gap-x-[1.5%] gap-y-[20px] py-[10px]">
            <input
              required
              className=" shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px]"
              id="ccn"
              type="tel"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              autoComplete="cc-number"
              maxLength="19"
              onChange={(e) => setCreditCard(e.target.value)}
              value={CreditCard}
              placeholder="Card Number"
            />
          </div>
        </div>

        <div className="w-full lg:max-w-[760px] mx-auto py-[15px] md:py-[25px]">
          <span className="fgb text-[14px] md:text-[22px] leading-[16px] md:leading-[24px] text-[#292929] block mb-[15px]">
            Billing Details
          </span>
          <hr />

          <div className="w-full py-[10px]">
            <label className="block text-[14px] md:text-[18px] pb-[6px] pl-0 md:pl-1.5">Country</label>
            <input
              required
              className="shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full  rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px] "
              type="text"
              placeholder="Country"
              id="Country"
              onChange={(e) => setCountry(e.target.value)}
              value={Country}
            />
          </div>

          <div className="w-full py-[10px]">
            <label className="block text-[14px] md:text-[18px] pb-[6px] pl-0 md:pl-1.5">Address 1</label>
            <input
              required
              className="shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full  rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px] "
              type="text"
              placeholder="Address line 1"
              id="address1"
              onChange={(e) => setAddress1(e.target.value)}
              value={address1}
            />
          </div>

          <div className="w-full py-[10px]">
            <label className="block text-[14px] md:text-[18px] pb-[6px] pl-0 md:pl-1.5">Address 2</label>
            <input
              required
              className="shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full  rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px] "
              type="text"
              placeholder="Address line 2"
              id="address2"
              onChange={(e) => setAddress2(e.target.value)}
              value={address2}
            />
          </div>

          <div className="w-full py-[10px]">
            <label className="block text-[14px] md:text-[18px] pb-[6px] pl-0 md:pl-1.5">Province</label>

            <select
              name="card_state"
              id="setProvince"
              className="shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full  rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px] "
              onChange={(e) => setProvince(e.target.value)}
              required
            >
              <option value="sd">Province</option>
              <option value="AB">Alberta</option>
              <option value="BC">British Columbia</option>
              <option value="MB">Manitoba</option>
              <option value="NB">New Brunswick</option>
              <option value="NL">Newfoundland and Labrador</option>
              <option value="NS">Nova Scotia</option>
              <option value="NT">Northwest Territories</option>
              <option value="NU">Nunavut</option>
              <option value="ON">Ontario </option>
              <option value="PE">Prince Edward Island</option>
              <option value="QC">Quebec</option>
              <option value="SK">Saskatchewan</option>
              <option value="YT">Yukon</option>
            </select>
          </div>

          <div className="w-full py-[10px]">
            <label className="block text-[14px] md:text-[18px] pb-[6px] pl-0 md:pl-1.5">Zip/Postal Code</label>
            <input
              required
              className="shadow-[0_0_6px_#00000029] px-2 py-2 md:px-2 md:py-2 w-full  rounded-[7px] md:rounded-[12px] text-[12px] md:text-[16px] "
              type="text"
              placeholder="Zip/Postal Code"
              id="Zip/Postal Code"
              onChange={(e) => setZipPostalCode(e.target.value)}
              value={zipPostalCode}
            />
          </div>

          <div className="my-[60px]">
            <h4 className="fgb text-[14px] md:text-[22px] leading-[16px] md:leading-[24px] text-[#292929] block mb-[15px]">
              Donation Summary
            </h4>
            <table className="w-full ">
              <tbody>
                <tr className="border-l-[0] border-r-[0] border">
                  <td className="py-[10px]">Payment Amount</td>
                  <td className="py-[10px]">$10.00</td>
                </tr>
                <tr className="border-l-[0] border-r-[0] border">
                  <td className="py-[10px]">Giving Frequency</td>
                  <td className="py-[10px]">One Time</td>
                </tr>
                <tr className="border-l-[0] border-r-[0] border">
                  <td className="py-[10px] font-[600]">Donation Total</td>
                  <td className="py-[10px] font-[600]">
                    <span className="py-[5px] px-[10px] bg-[#77d006 ] bg-[#30dc75 ] bg-[#0bb000] text-[#fff] rounded-[30px]">
                      $10.00
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            type="submit"
            className="fgr w-full h-[40px] md:h-[50px] border-[1px] md:border-[3px] border-[#FAF7F2] flex justify-center items-center bg-[#0F2E3C] text-[14px] md:text-[16px] text-[#fff] rounded-[50px] px-[11px] md:px-[30px] py-[7px] md:py-[10px] hover:text-[#555555] hover:bg-[#fff] hover:border-[#0F2E3C] group"
          >
            Donate Now
          </button>

          <span className="fgr w-[160px] md:w-[165px] h-[24px] mx-auto mt-[20px] md:h-[26px] border-[1px] md:border-[3px] border-[#fff] flex justify-between items-center bg-[#0F2E3C] text-[12px]  text-[#fff] rounded-[50px] px-[7px] md:px-[10px]">
            <MdLock className="inline text-[#fff] text-[10px] md:text-[13px]  " />
            100% Secure Donation
          </span>
        </div>
      </form>
    </section>
  );
};

export default Content;
