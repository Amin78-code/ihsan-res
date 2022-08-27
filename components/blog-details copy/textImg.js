import React, { Fragment } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Hero from "../hero/Hero";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../layout/layout";
import pattern from "../../assets/images/pattern.png";
import Image1 from "../../assets/images/program/9.jpg";
import Image2 from "../../assets/images/program/5.jpg";
import Image3 from "../../assets/images/program/7.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import DarkSection from "../dark-section/DarkSection";
import HeadingText from "../heading-text/HeadingText";

const TextImg = ({ data, title }) => {
  console.log("data", data);
  return (
    <section className="w-full pt-[30px] pb-[43px] md:py-[93px] bg-[#fff]">
      <div className="myContainer">
        <div className=" w-full">
          <h2 className="fpr mb-[15px] md:mb-[30px] text-[32px] md:text-[60px] sc1500:text-[85px] text-[#0F2E3C] leading-[32px] md:leading-[60px] sc1500:leading-[85px]">
            {title}
          </h2>
          {data.map((contentPiece, index) => {
            return (
              <Fragment key={index}>
                {contentPiece.type == "p" ? (
                  <p className="text-[12px] md:text-[14px] lg:text-[16px] mt-4 text-[#555555] pb-2">
                    {contentPiece.text}
                  </p>
                ) : (
                  ""
                )}
                {contentPiece.type == "h-level-1" ? (
                  <h2 className="fpr text-[24px] lg:text-[42px] 2xl:text-[52px] leading-[24px] lg:leading-[42px] 2xl:leading-[52px] capitalize text-[#0F2E3C] mt-[10px] md:mt-[30px]">
                    {contentPiece.text}
                  </h2>
                ) : (
                  ""
                )}
                {contentPiece.type == "h-level-2" ? (
                  <h2 className="fpr text-[20px] lg:text-[28px] 2xl:text-[45px] leading-[20px] lg:leading-[28px] 2xl:leading-[45px] text-[#0F2E3C] mt-[10px] md:mt-[30px]">
                    {contentPiece.text}
                  </h2>
                ) : (
                  ""
                )}
                {contentPiece.type == "h-level-3" ? (
                  <h2 className="fpr text-[18px] lg:text-[35px] 2xl:text-[40px] leading-[18px] lg:leading-[35px] 2xl:leading-[40px] text-[#0F2E3C] mt-[10px] md:mt-[30px]">
                    {contentPiece.text}
                  </h2>
                ) : (
                  ""
                )}
                {contentPiece.type == "h-level-4" ? (
                  <h2 className="fpr text-[16px] lg:text-[28px] 2xl:text-[34px] leading-[16px] lg:leading-[28px] 2xl:leading-[34px] text-[#0F2E3C] mt-[10px] md:mt-[25px]">
                    {contentPiece.text}
                  </h2>
                ) : (
                  ""
                )}
                {contentPiece.type == "image" ? (
                  <div className="mt-[20px]">
                    <Image src={contentPiece.img} alt="blog image" />
                  </div>
                ) : (
                  ""
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TextImg;
