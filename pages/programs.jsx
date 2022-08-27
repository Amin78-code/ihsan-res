import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import Hero from "../components/hero/Hero";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout/layout";
import pattern from '../assets/images/pattern.png';
import Image1 from '../assets/images/program/9.jpg'
import Image2 from '../assets/images/program/5.jpg'
import Image3 from '../assets/images/program/7.jpg'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import DarkSection from "../components/dark-section/DarkSection";
import HeadingText from "../components/heading-text/HeadingText";

export default function Programs() {
  const settings = {
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'w-[100%] outline-0 ',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const settings2 = {
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'w-[100%] flex outline-0 '
  };
 
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <BsChevronRight onClick={onClick} className='absolute right-[0.5%] sm:right-[2%] sc1350:right-[3%] top-[38%] text-[25px] sm:text-[35px] text-[#9D9D9D] z-[2] cursor-pointer' />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <BsChevronLeft onClick={onClick} className='absolute left-[0.5%] sm:left-[2%] sc1350:left-[3%] top-[38%] text-[25px] sm:text-[35px] text-[#9D9D9D] z-[2] cursor-pointer' />
  );
}
  return (
    <Layout>
      {/* hero section jumbotron */}
    <section className="w-full py-[93px] bg-[#F2F2F2] relative overflow-hidden">
      <div className='absolute left-0 right-0 top-0 w-full h-[100%]'>
        <div className='scale-[1.5]'><Image src={pattern} /></div>
      </div>
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] linear-gradient-4'></div>
      <div className="myContainer flex">
        <div className=" w-full xl:h-[540px] flex justify-center flex-col text-center relative z-[1]">
          <h1 className="fpr text-[40px] sm:[52px] md:text-[75px] sc1500:text-[100px] leading-[40px] md:leading-[75px] sc1500:leading-[140px] text-[#0F2E3C] ">
            Programs and seminars
          </h1>
          <p className="text-[12px] md:text-[20px] lg:text-[24px] text-[#555555] ">
          We partner with organizations and institution to deliver robust programs and seminars to a wide range <br/> of audiences, both in person and online.
          </p>
        </div>
      </div>
    </section>


    {/* Till Death section */}
    <section className="w-full py-[43px] md:py-[93px] bg-[#fff]">
      <div className="myContainer">
        <div className=" w-full ">
          <h2 className="fpr text-[32px] leading-[35px] lg:leading-[46px] lg:text-[42px] 2xl:text-[52px]  text-[#0F2E3C] ">
            Till Death Do Us Part: Premarital Coaching and How to Choose the Right Spouse
          </h2>
          <p className=" text-[12px] md:text-[20px] lg:text-[24px] mt-4 text-[#555555] ">
            We are often told that prevention is better than the cure. However, we often become reactive rather than proactive. With the rising divorce rate within the Muslim community, we need to adequately prepare our young adults to make sure they are ready for marriage and are choosing the right spouse for them. Most divorces happen within the first three years of marriage. This is due to couples not knowing the correct questions to ask and not discussing any potential issues that may occur. This is why premarital coaching is very important. In this seminar, marriageable adults will learn how to correctly choose a life partner while also making sure to follow the correct teachings of Islam.
          </p>

          <h5 className="font-bold text-[12px] md:text-[20px] lg:text-[24px] mt-[50px] ">Topics covered:</h5>
          <ul className="list-disc list-inside  ">
            <li className="text-[12px] md:text-[20px] lg:text-[24px] text-[#555555] "><p className="inline" > How to Search for a Spouse</p></li>
            <li className="text-[12px] md:text-[20px] lg:text-[24px] text-[#555555]"><p className="inline">What to Look for in a spouse</p></li>
            <li className="text-[12px] md:text-[20px] lg:text-[24px] text-[#555555]"><p className="inline">The Premarital process and what questions to ask</p></li>
            <li className="text-[12px] md:text-[20px] lg:text-[24px] text-[#555555]"><p className="inline">5 main reasons for marital issues</p></li>
            <li className="text-[12px] md:text-[20px] lg:text-[24px] text-[#555555]"><p className="inline">Key Factors to having a successful marriage</p></li>
          </ul>



          <h2 className="fpr text-[32px] lg:text-[42px] leading-[35px] lg:leading-[46px] 2xl:text-[52px] mt-[70px] text-[#0F2E3C] ">
            How to lead a more fulfilling marriage
          </h2>
          <p className="text-[12px] mt-4 md:text-[20px] lg:text-[24px] text-[#555555] lg:leading-[36px] ">
          After the honeymoon phase, the reality of marriage quickly kicks in. With the constant stressors of life, people tend to stop working on their marriages and become content in their relationship. Research shows that it is takes 6 years before a couple even seeks marital help from an expert. However, by this time it is often too late due to resentment built up for another. This is why it is important to constantly work on the marriage to make sure both spouses are fulfilled and getting their needs met. The Prophet SAW said, “Nikkah is half your deen.” We should ensure that we are living a fulfilling marriage and doing what we can to please Allah SWT.
          </p>
          <h5 className="font-bold text-[12px] md:text-[20px] lg:text-[24px] mt-[50px] ">Topics covered:</h5>
          <ul className="list-disc list-inside  ">
            <li className="text-[12px] md:text-[20px] lg:text-[24px] text-[#555555] lg:leading-[36px] "><p className="inline" >Enhancing our relationships</p></li>
            <li className="text-[12px] md:text-[20px] lg:text-[24px] text-[#555555] lg:leading-[36px]"><p className="inline">Conflict resolution</p></li>
            <li className="text-[12px] md:text-[20px] lg:text-[24px] text-[#555555] lg:leading-[36px]"><p className="inline">The Dos and Don’ts of marriage</p></li>
            <li className="text-[12px] md:text-[20px] lg:text-[24px] text-[#555555] lg:leading-[36px]"><p className="inline">The importance of Friendship in a marriage</p></li>
            <li className="text-[12px] md:text-[20px] lg:text-[24px] text-[#555555] lg:leading-[36px]"><p className="inline">Effective communication skills</p></li>
          </ul>



          <h2 className="fpr text-[32px] lg:text-[42px] 2xl:text-[52px] mt-[70px] text-[#0F2E3C] ">
            Proving the existence of the Creator
          </h2>
          <p className="text-[12px] md:text-[20px] lg:text-[24px] text-[#555555] lg:leading-[36px] ">
          Knowledge of Allah’s existence is often taken for granted by believers. The affirmed belief in Allah SWT is not an easy prospect for many people. In today’s day and age, more young Muslims are starting to have doubts about the existence of our creator. The topics of atheism are often explored within the educational system, and is on a rise as young adults may not be receiving the answers they need to build more faith and conviction within their deen. It’s important unpack this issue in a constructive way and discuss the the foundational arguments and proofs of Allah’s existence. In this seminar, we explore what causes people to loose faith, and what evidence is available to help prove the existence of Allah.
          </p>



          
          <div className="feedbacks-wrapper">
            <h2 className="fpr text-[32px] lg:text-[42px] 2xl:text-[52px] text-center mt-[70px] text-[#182657] ">See what previous seminar hosts had to say</h2>
            <div className="feedbacks flex justify-center mt-[50px] w-[100%] ">
              <div className="w-[100%] md:w-[85%] ">
                <Slider {...settings} >
                  <div className=" px-4 md:px-[100px] py-[20px] xl:py-[50px] bg-[#1826570D] border ">
                    <p className="text-[12px] md:text-[20px] lg:text-[24px] text-[#555555] text-center lg:leading-[36px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="flex mt-[20px] items-center max-w-fit mx-auto ">
                      <span className="profile bg-white border border-[#707070] rounded-[50%] w-[75px] h-[75px] "></span>
                      <div className="ml-4">
                        <p className="text-[12px] md:text-[20px] lg:text-[24px] font-bold ">Sheikh Abdullah Halton Mosque</p>
                        <p className="text-[12px] md:text-[20px] lg:text-[24px] ">Halton Mosque</p>
                      </div>
                    </div>
                  </div>

                  <div className=" px-4 md:px-[100px] py-[20px] xl:py-[50px] bg-[#1826570D] border ">
                    <p className="text-[12px] md:text-[20px] lg:text-[24px] text-[#555555] text-center lg:leading-[36px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="flex mt-[20px] max-w-fit mx-auto ">
                      <span className="profile bg-white border border-[#707070] rounded-[50%] w-[75px] h-[75px] "></span>
                      <div className="ml-4">
                        <p className="text-[12px] md:text-[20px] lg:text-[24px] font-bold ">Sheikh Abdullah Halton Mosque</p>
                        <p className="text-[12px] md:text-[20px] lg:text-[24px] ">Halton Mosque</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>

            </div>
          </div>
          


          
        </div>
      </div>
    </section>


    {/* Image gellary  */}
    <section className="my-10 ">
      <div className="main__container  ">
        <div className="images-slider w-[100%] mx- 2 md:mx- 0 flex justify-between gap-x-[2%] md:gap-x-[2%] px-0">
          {/* <Slider {...settings2} > */}
            <div className=" w-[30%] image_container flex justify-center items-center bg-[#1826570D] ">
              <Image className="" src={Image1} alt="Program1"  />
            </div>
            <div className=" w-[35%] image_container flex justify-center items-center bg-[#1826570D] ">
              <Image className="" src={Image2} alt="Program2"  />
            </div>
            <div className=" w-[30%] image_container flex justify-center items-center bg-[#1826570D] ">
              <Image src={Image3} alt="Program3"  />
            </div>
                
           {/* </Slider> */}
        </div>
      </div>
    </section>



    {/* Contact Section */}

    <section className="relative overflow-hidden">
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] overlay-img'>
        <Image src={pattern} className='scale-[1.5] ' />
      </div>
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] bg-[#AE8B5C] opacity-[.99]'></div>
      <div className="main__container relative z-[2]">
          <div className="bg-[#AE8B5C ] p-[50px] xl:p-[100px] ">
            <h2 className="fpr text-[28px] 2xl:text-[52px] mt-[70px] text-[#fff]">Ihsan Coaching is always available to partner with organizations to deliver programs and seminars to local communicates. Contact our team to enquire about programs and seminars.</h2>
            <form className=" flex flex-wrap justify-between gap-y-2 md:gap-y-4 mt-[50px]" action="">
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 h-[50px] w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" type="text" placeholder="First Name*" />
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 h-[50px] w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" type="text" placeholder="Last Name*" />
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 h-[50px] w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" type="text" placeholder="Email Address*" />
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 h-[50px] w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" type="text" placeholder="Phone Number*" />
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 h-[50px] w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" type="text" placeholder="Organization*" />
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 h-[50px] w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]" type="text" placeholder="Topic Requested  " />
                <textarea rows={4} className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 w-full rounded-[18px]  text-[12px] md:text-[20px] lg:text-[24px] " placeholder="Message" />
                <div className=" w-full">
                  <button type="submit" className="shadow-[0_0_30px_#00000029] rounded-[40px] float-right bg-[#0F2E3C] text-[#fff]  text-[12px] md:text-[20px] lg:text-[24px] font-bold px-10 py-3 ">Send</button>
                </div>
            </form>
          </div>
      </div>
    </section>



    </Layout>
  );
}