import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className={`bg-[#0F2E3C] pt-[42px] md:pt-[97px]`}>
        <div className="pb-0">
          <div className="myContainer-footer">
            <h1 className="fpr text-[32px] md:text-[55px]  text-[#fff] leading-[32px] md:leading-[55px]   max-w-[800px] mx-auto text-center">
              Get started with <br /> Ihsan Coaching today
            </h1>
            <p className="fgr text-[12px] md:text-[16px] leading-[16px] md:leading-[22px] text-[#fff] pt-[21px] md:pt-[30px] pb-[21px] md:pb-[46px] max-w-[690px] mx-auto text-center">
              Let’s take the first step towards better health and well-being,
              together. Get in touch to learn more about coaches or services, or
              to set up an initial session that fits your schedule.
            </p>
            <div className="flex justify-center items-center gap-x-[20px]">
              <Link href="/contact">
                <a>
                  <button className="fgr w-[120px] md:w-[210px] h-[28px] md:h-[50px] border-[1px] md:border-[3px] border-[#fff] flex justify-between items-center bg-[#fff] text-[12px] md:text-[16px] text-[#555555] rounded-[50px] px-[11px] md:px-[30px] py-[7px] md:py-[10px] hover:border-[#FAF7F2 ] hover:bg-[#AE8B5C] hover:text-[#fff] hover:border-[#AE8B5C] group">
                    Get started
                    <BsFillArrowRightCircleFill className="text-[#555] text-[12px] md:text-[20px] group-hover:text-[#fff]" />
                  </button>
                </a>
              </Link>
              <Link href="/about-us/#our_team">
                <a>
                  <button className="fgr w-[120px] md:w-[210px] h-[28px] md:h-[50px] border-[1px] md:border-[3px] border-[#FAF7F2] flex justify-between items-center bg-[#0F2E3C] text-[12px] md:text-[16px] text-[#fff] rounded-[50px] px-[11px] md:px-[30px] py-[7px] md:py-[10px] hover:text-[#fff] hover:bg-[#AE8B5C] hover:border-[#AE8B5C] group">
                    Meet the team
                    <BsFillArrowRightCircleFill className="text-[#fff] text-[12px] md:text-[20px] group-hover:text-[#fff]" />
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="myContainer-footer px-[10px] pt-[35px] md:pt-[60px] pb-0 md:pb-[30px] flex flex-col md:flex-row justify-between">
            <div className="pb-[23px] md:pb-0">
              <h6 className="fpr text-[#fff] text-[18px] md:text-[42px] capitalize">
                Services
              </h6>
              <ul>
                <li className="fgr text-[#fff] text-[12px] md:text-[16px] leading-[22px] md:leading-[30px] hover:opacity-[.8] cursor-pointer">
                  <Link href="/individual">Individual Coaching</Link>
                </li>
                <li className="fgr text-[#fff] text-[12px] md:text-[16px] leading-[22px] md:leading-[30px] hover:opacity-[.8] cursor-pointer">
                  <Link href="/premarital">Premarital Coaching</Link>
                </li>
                <li className="fgr text-[#fff] text-[12px] md:text-[16px] leading-[22px] md:leading-[30px] hover:opacity-[.8] cursor-pointer">
                  <Link href="/marital">Marital Coaching</Link>
                </li>
                <li className="fgr text-[#fff] text-[12px] md:text-[16px] leading-[22px] md:leading-[30px] hover:opacity-[.8] cursor-pointer">
                  <Link href="/religious">Religious Coaching</Link>
                </li>
              </ul>
            </div>
            <div className="pb-[23px] md:pb-0">
              <h6 className="fpr text-[#fff] text-[18px] md:text-[42px] capitalize">
                About
              </h6>
              <ul>
                <li className="fgr text-[#fff] text-[12px] md:text-[16px] leading-[22px] md:leading-[30px] hover:opacity-[.8] cursor-pointer">
                  <Link href="/">Home </Link>
                </li>
                <li className="fgr text-[#fff] text-[12px] md:text-[16px] leading-[22px] md:leading-[30px] hover:opacity-[.8] cursor-pointer">
                  <Link href="/about-us">About Us</Link>
                </li>
                <li className="fgr text-[#fff] text-[12px] md:text-[16px] leading-[22px] md:leading-[30px] hover:opacity-[.8] cursor-pointer">
                  <Link href="/about-us/#our_team">Team </Link>
                </li>
                <li className="fgr text-[#fff] text-[12px] md:text-[16px] leading-[22px] md:leading-[30px] hover:opacity-[.8] cursor-pointer">
                  <Link href="/about-us/#our_team">Careers </Link>
                </li>
                <li className="fgr text-[#fff] text-[12px] md:text-[16px] leading-[22px] md:leading-[30px] hover:opacity-[.8] cursor-pointer">
                  <Link href="/programs">Programs </Link>
                </li>
                <li className="fgr text-[#fff] text-[12px] md:text-[16px] leading-[22px] md:leading-[30px] hover:opacity-[.8] cursor-pointer">
                  <Link href="/contact">Contact </Link>
                </li>
              </ul>
            </div>
            <div className="pb-[13px] md:pb-0 md:pr-[10%]">
              <h6 className="fpr text-[#fff] text-[18px] md:text-[42px] capitalize">
                Contact
              </h6>
              <ul>
                <li className="fgr text-[#fff] text-[12px] md:text-[16px] leading-[22px] md:leading-[30px] hover:opacity-[.8] cursor-pointer">
                  <a href="mailto:info@ihsancoaching.ca">
                    info@ihsancoaching.ca
                  </a>
                </li>
                <li className="fgr text-[#fff] text-[12px] md:text-[16px] leading-[22px] md:leading-[30px] hover:opacity-[.8] cursor-pointer">
                  <a href="tel:+16305579427">1-630-557-9427</a>
                </li>
                <li className="fgr text-[#fff] text-[12px] md:text-[16px] leading-[22px] md:leading-[30px] flex gap-x-[5px] pt-[6px]">
                  <Link href="https://www.instagram.com/ihsan_coaching/">
                    <a>
                      <FiInstagram className="hover:opacity-[.8]" />
                    </a>
                  </Link>
                  <Link href="https://www.facebook.com/IhsanCoaching/">
                    <a>
                      <FaFacebook className="hover:opacity-[.8]" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="myContainer-footer pb-0 pt-[10px] md:pb-[20px]">
          <h6 className="fgr text-[#fff] text-[12px] md:text-[16px] leading-[22px] md:leading-[30px] font-[600]">
            Waivers
          </h6>
          <p className="fgr text-[#fff] text-[12px] md:text-[16px] leading-[22px] md:leading-[30px]">
            18+ Waiver | Under 18 Waiver
          </p>
          <p className="fgr text-[#fff] text-[12px] md:text-[16px] leading-[22px] md:leading-[30px] pt-[10px] md:pt-[20px] pb-[50px]">
            <Link href="#">
              <a className="cursor-pointer hover:opacity-[.8]">
                Privacy Policy
              </a>
            </Link>
            &nbsp;|&nbsp;
            <Link href="#">
              <a className="cursor-pointer hover:opacity-[.8]">
                Terms &#38; Conditions
              </a>
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
