import Head from "next/head";
import Image from "next/image";
import arrow from "../../assets/images/icons/arrow.svg";
import logo from "../../assets/images/logo/logo.svg";
import { FiInstagram } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import {TbMenu2} from "react-icons/tb";
import { useRef, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const divisionDropDown = useRef(null);
  var isMenuHide = true;
  var isRotate = false;
  var isOpenDropdown = false;

  function toggleFunction() {
    toggle.classList.toggle("active");
    if (isMenuHide == true) {
      document.getElementById("menu_options").classList.add("show-menu");
      document.querySelector(".mobile-nav").classList.add("fixed");
      document.querySelector(".mobile-nav").classList.remove("absolute");
      document.querySelector(".mobile-nav").classList.contains("bg-black") &&
        document.querySelector(".mobile-nav").classList.remove("bg-black");

      isMenuHide = false;
    } else if (isMenuHide == false) {
      document.getElementById("menu_options").classList.remove("show-menu");
      document.querySelector(".mobile-nav").classList.add("absolute");
      document.querySelector(".mobile-nav").classList.remove("fixed");
      division.current.class;
      isMenuHide = true;
    }
  }
  function openDropdownMenu() {
    divisionDropDown.classList.toggle("show-dropdown");
  }

  function openMobMenu() {
    console.log('openMobMenu')
    console.log('document.getElementById ',document.getElementById('desktop_nav'))
    document.getElementById('desktop_nav').classList.toggle("dblock");
  }
  

  return (
    <div>
      <div className="hidden lg:h-[30px] md:block h-[50px] bg-[#fff]">
        <ul className="myContainer flex justify-end items-center h-[100%]">
          <li className="px-[12px]  text-[15px] fgr font-[600]">
            <Link href="#">Careers</Link>
          </li>
          <li className="px-[12px]  text-[15px] fgr font-[600]">
            <Link href="#">Blog</Link>
          </li>
          <li className="px-[12px]  text-[15px] fgr font-[600]">
            <Link href='/contact'>Contact</Link>
          </li>
          <li className="px-[12px]  text-[15px] fgr font-[600]">
           <Link href="#">Donations</Link>
          </li>
          <li className="px-[0.5%]  text-[15px] fgr font-[600]">
           <Link href="#"><a><FiInstagram /></a></Link>
          </li>
          <li className="px-[0.5%] text-[15px] fgr font-[600]">
          <Link href="#"><a><FaFacebook /></a></Link>
          </li>
        </ul>
      </div>
      <div className="bg-[#0F2E3C] block xl:hidden py-[5px]">
        <div className="myContainer flex justify-between items-center">
             <Link href="/">
              <a>
        <div className="w-[135px] sm:w-[175px] lg:w-[244px] h-[48px] sm:h-[63px] lg:h-[80px] bg-pink-40 0 opacity-[.4 ] pb-[1px]">
              <Image src={logo} alt="Logo" width={1500} height={500} />
          </div>
          </a>
           </Link>
          <TbMenu2 className="text-[18px] sm:text-[40px] text-[#fff]" onClick={()=>openMobMenu()} />
        </div>
      </div>
      <nav id='desktop_nav' className="hidden xl:block bg-[#0F2E3C] z-30 transform brown-light text-[15px] flex justify-between items-center">
        <div className="myContainer flex-col  xl:flex-row flex items-center justify-between">
              <Link href="/">
                 <a>
          <div className="w-[180px] h-[53px] bg-pink-40 0 opacity-[.4 ] pb-[1px] hidden xl:block">
              <Image src={logo} alt="Logo" width={1500} height={500} />
          </div>
             </a>
            </Link>
          <ul className="desktop-nav-menu text-white capitalize flex-col xl:flex-row text-center xl:text-left flex gap-x-8 pb-[40px] xl:pb-0 py-[10%] xl:py-0">
            <li className="fgr font-[600] text-[#fff] transition-all duration-300 text-[14px] md:text-[16px]  py-[15px] xl:py-[30px]">
              <Link href="/about-us">
                <a>About Us</a>
              </Link>
            </li>
            <li className="fgr font-[600] text-[#fff] transition-all duration-300 text-[14px] md:text-[16px]  px-[4px ] 2xl:px-[0 ] py-[15px] xl:py-[30px]">
              <Link href="/about-us/#join_team">
                <a>Our Team</a>
              </Link>
            </li>
            <li className="fgr font-[600] text-[#fff] transition-all duration-300 text-[14px] md:text-[16px]  px-[4px ] 2xl:px-[0 ] py-[15px] xl:py-[30px]">
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <li className="fgr font-[600] text-[#fff] transition-all duration-300 text-[14px] md:text-[16px]  px-[4px ] 2xl:px-[0 ] py-[15px] xl:py-[30px]">
              <Link href="/programs">
                <a>Programs</a>
              </Link>
            </li>
            <li className="fgr font-[600] text-[#fff] transition-all duration-300 text-[14px] md:text-[16px]  px-[4px ] 2xl:px-[0 ] py-[15px] xl:py-[30px]">
              <Link href="/#faq">
                <a >FAQs</a>
              </Link>
            </li>
            <li className="fgr font-[600] text-[#fff] transition-all duration-300 text-[14px] md:text-[16px]  px-[4px ] 2xl:px-[0 ] py-[15px] xl:py-[30px]">
              <Link href="/contact">
                <a className="bg-[#AE8B5C] text-[#fff] rounded-[50px] px-[30px] py-[12px] hover:opacity-[.8]">Get Started</a>
             </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
