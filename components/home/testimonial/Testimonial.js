import Image from "next/image";
import Slider from "react-slick";
import profile from "../../../assets/images/profile.jpeg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import testiominal1 from "../../../assets/images/home/testimonial2.jpeg";
import testiominal2 from "../../../assets/images/home/testimonial1.jpeg";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <BsChevronRight
        onClick={onClick}
        className="absolute right-[-8%] sm:right-[-4%] md:right-[2%] top-[44%] text-[15px] sm:text-[35px] text-[#9D9D9D] z-[2] cursor-pointer"
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <BsChevronLeft
        onClick={onClick}
        className="absolute left-[-8%] sm:left-[-4%] md:left-[2%] top-[44%] text-[15px] sm:text-[35px] text-[#9D9D9D] z-[2] cursor-pointer"
      />
    );
  }

  return (
    <section className="bg-[#fff] pt-[47px] md:pt-[70px] pb-[30px] md:pb-[70px]">
      <div className="myContainer">
        <h1 className="fpr text-[#0F2E3C] text-[24px] md:text-[40px] leading-[24px] md:leading-[45px] text-center max-w-[242px] md:max-w-[100%] mx-auto">
          Trusted throughout local communities
        </h1>
        <div className="max-w-[930px] bg-[#F2F2F2] mx-auto pt-[23px] md:pt-[45px] pb-[23px] md:pb-[25px] slider-main mt-[22px] md:mt-[35px] px-[26px] md:px-[30px] ">
          <Slider {...settings}>
            <div className="min-h-[240px] fgi leading-[22px] text-center max-w-[850px] flex-imp flex-col justify-center">
              <p className="max-w-[700px] mx-auto text-[10px] md:text-[14px] leading-[12px] md:leading-[16px]">
                Ihsaan Coaching fills a much needed void in muslim communities.
                As an Imam I have personally worked with Ihsaan coaching and
                also have recommended many congregants to use Ihsaan for help
                with marriage, anxiety, and depression and have seen nothing but
                positive results alhamdulilah
              </p>
              <div className="flex flex-start mt-[15px] md:mt-[37px] mx-auto">
                <div className="w-[34px] md:w-[55px] min-w-[34px] h-[34px] md:h-[55px] rounded-[50px] overflow-hidden prof-img mr-[5px] sm:mr-[10px]">
                  <Image src={testiominal1} />
                </div>
                <div className="flex flex-col justify-center">
                  <h6 className="fgr leading-[12px] md:leading-[26px] font-[600] text-[11px] md:text-[16px] text-[#555555] text-left mt-[7px ] md:mt-[5px ]">
                    Shaykh Ilir Aliji
                  </h6>
                  <h5 className="fgr max-w-[180px] leading-[12px] md:leading-[26px] text-[11px] md:text-[16px] text-[#555555] text-left mt-0 md:mt-[-10px]">
                    Imam at Masjid Albani and Instructor at Islamic Institute of
                    Texas
                  </h5>
                </div>
              </div>
            </div>

            <div className="min-h-[240px] fgi leading-[22px] text-center max-w-[850px] flex-imp flex-col justify-center">
              <p className="max-w-[700px] mx-auto text-[10px] md:text-[14px] leading-[12px] md:leading-[16px]">
                Ibn Abbas related that the Messenger of Allah (S) ““There is
                nothing like marriage, for two who love one another.”
                <br />
                Marriage is God’s civilizational sunnah and from the great gifts
                given to humankind and an obligation for able Muslims. Amongst
                the great challenges that our Muslim community is facing in
                America is the facilitation of marriage and in particular
                healthy marriages. Ihsan coaching’s earnest and contextualized
                approach towards marital coaching is critical in our time given
                the predicament we find ourselves in. Ihsaans multi dimensional
                approach includes modern tools and resources, but most
                importantly is rooten in Islamic values and presented a
                spiritual dimension towards marital coaching, something missing
                in our time. We ask Allah to open doors for Farhan and his team,
                and benefit the ummah by them.
              </p>
              <div className=" flex flex-start mt-[15px] md:mt-[37px] mx-auto">
                <div className="w-[34px] md:w-[55px] min-w-[34px] h-[34px] md:h-[55px] rounded-[50px] overflow-hidden prof-img mr-[5px] sm:mr-[10px]">
                  <Image src={testiominal2} />
                </div>
                <div className="flex flex-col justify-center">
                  <h6 className="fgr leading-[12px] md:leading-[26px] font-[600] text-[11px] md:text-[16px] text-[#555555] text-left mt-[7px ] md:mt-[5px ]">
                    Shaykh Umair Haseeb
                  </h6>
                  <h5 className="fgr max-w-[180px] leading-[12px] md:leading-[26px] text-[11px] md:text-[16px] text-[#555555] text-left mt-0 md:mt-[-10px]">
                    Director of Religious Affairs at Taleef
                  </h5>
                </div>
              </div>
            </div>

            <div className="min-h-[240px] fgi leading-[22px] text-center max-w-[850px] flex-imp flex-col justify-center">
              <p className="max-w-[700px] mx-auto text-[10px] md:text-[14px] leading-[12px] md:leading-[16px]">
                In a time where members of our communities are increasingly
                facing mental health issues, marital disputes etc, it is
                imperative to have services which cater to their needs.
                Alhamdulillah, it is a breath of fresh air that Br. Farhan and
                his team at Ihsan Coaching have been doing just that. They have
                stepped up to provide a needed platform for Muslims facing these
                realistic issues. Their coaches provide a balance of both the
                Islamic as well as secular perspectives when dealing with their
                clients. Alhamdulillah, our community has also established a
                partnership with Ihsan Coaching, so that our members also
                benefit from their services. I hope many others realize that
                there is someone to talk to when needing help. Please do not be
                silent and reach out to them! I highly recommend their
                organization. May Allah continue to grant them success and the
                ability to help others.
              </p>
              <div className="flex flex-start mt-[15px] md:mt-[37px] mx-auto">
                <div className="w-[34px] md:w-[55px] min-w-[34px] h-[34px] md:h-[55px] rounded-[50px] overflow-hidden prof-img mr-[5px] sm:mr-[10px]">
                  <Image src={profile} />
                </div>
                <div className="flex flex-col justify-center">
                  <h6 className="fgr leading-[12px] md:leading-[26px] font-[600] text-[11px] md:text-[16px] text-[#555555] text-left mt-[7px ] md:mt-[5px ]">
                    Mufti Asif Umar
                  </h6>
                  <h5 className="fgr max-w-[180px] leading-[12px] md:leading-[26px] text-[11px] md:text-[16px] text-[#555555] text-left mt-0 md:mt-[-10px]">
                    Islamic Wills USA
                  </h5>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
