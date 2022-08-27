import Image from "next/image";
import Slider from "react-slick";
import profile from '../../../assets/images/profile.jpeg';
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <BsChevronRight onClick={onClick} className='absolute right-[-6%] sm:right-[-4%] sc1350:right-[7%] top-[22%] text-[25px] sm:text-[35px] text-[#9D9D9D] z-[2] cursor-pointer' />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <BsChevronLeft onClick={onClick} className='absolute left-[-6%] sm:left-[-4%] sc1350:left-[7%] top-[22%] text-[25px] sm:text-[35px] text-[#9D9D9D] z-[2] cursor-pointer' />
    );
  }
      
    return (
        <section className="bg-[#fff] pt-[47px] md:pt-[109px] pb-[30px] md:pb-[100px]">
            <div className="myContainer">
                <h1 className='fpr text-[#0F2E3C] text-[24px] md:text-[54px] leading-[24px] md:leading-[68px] text-center max-w-[242px] md:max-w-[100%] mx-auto'>Trusted throughout local communities</h1>
                <div className="max-w-[1350px] bg-[#F2F2F2] mx-auto pt-[23px] md:pt-[69px] pb-[23px] md:pb-[48px] slider-main mt-[22px] md:mt-[61px] px-[26px] sm:px-[40px] lg:px-[50px] xl:px-0">
                    <Slider {...settings}>
                         <p className='fgi leading-[22px] text-center max-w-[1005px] flex-imp flex-col justify-center'>
                            <p className='text-[10px] md:text-[20px] leading-[12px] md:leading-[22px]'>
                                In a time where members of our communities are increasingly facing mental health issues, marital disputes etc, it is imperative to have services which cater to their needs. Alhamdulillah, it is a breath of fresh air that Br. Farhan and his team at Ihsan Coaching have been doing just that. They have stepped up to provide a needed platform for Muslims facing these realistic issues. Their coaches provide a balance of both the Islamic as well as secular perspectives when dealing with their clients. Alhamdulillah, our community has also established a partnership with Ihsan Coaching, so that our members also benefit from their services. I hope many others realize that there is someone to talk to when needing help. Please do not be silent and reach out to them! I highly recommend their organization. May Allah continue to grant them success and the ability to help others.
                            </p>
                            <div className="flex flex-start mt-[15px] md:mt-[37px] mx-auto">
                                <div className='w-[40px] md:w-[75px] h-[40px] md:h-[75px] rounded-[50px] overflow-hidden prof-img mr-[10px]'><Image src={profile} /></div>
                                <div className="flex flex-col">
                                    <h6 className="fgr leading-[12px] md:leading-[36px] font-[600] text-[12px] md:text-[24px] text-[#555555] text-left mt-[7px] md:mt-[5px]">Mufti Asif Umar </h6>
                                    <h5 className='fgr leading-[12px] md:leading-[36px] text-[12px] md:text-[24px] text-[#555555] text-left mt-0 md:mt-[-10px]'>Islamic Wills USA</h5>
                                </div>
                            </div>
                        </p>
                         <p className='fgi leading-[22px] text-center max-w-[1005px] flex-imp flex-col justify-center'>
                            <p className='text-[10px] md:text-[20px] leading-[12px] md:leading-[22px]'>
                                In a time where members of our communities are increasingly facing mental health issues, marital disputes etc, it is imperative to have services which cater to their needs. Alhamdulillah, it is a breath of fresh air that Br. Farhan and his team at Ihsan Coaching have been doing just that. They have stepped up to provide a needed platform for Muslims facing these realistic issues. Their coaches provide a balance of both the Islamic as well as secular perspectives when dealing with their clients. Alhamdulillah, our community has also established a partnership with Ihsan Coaching, so that our members also benefit from their services. I hope many others realize that there is someone to talk to when needing help. Please do not be silent and reach out to them! I highly recommend their organization. May Allah continue to grant them success and the ability to help others.
                            </p>
                            <div className="flex flex-start mt-[15px] md:mt-[37px] mx-auto">
                                <div className='w-[40px] md:w-[75px] h-[40px] md:h-[75px] rounded-[50px] overflow-hidden prof-img mr-[10px]'><Image src={profile} /></div>
                                <div className="flex flex-col">
                                    <h6 className="fgr leading-[12px] md:leading-[36px] font-[600] text-[12px] md:text-[24px] text-[#555555] text-left mt-[7px] md:mt-[5px]">Mufti Asif Umar </h6>
                                    <h5 className='fgr leading-[12px] md:leading-[36px] text-[12px] md:text-[24px] text-[#555555] text-left mt-0 md:mt-[-10px]'>Islamic Wills USA</h5>
                                </div>
                            </div>
                        </p>
                         <p className='fgi leading-[22px] text-center max-w-[1005px] flex-imp flex-col justify-center'>
                            <p className='text-[10px] md:text-[20px] leading-[12px] md:leading-[22px]'>
                                In a time where members of our communities are increasingly facing mental health issues, marital disputes etc, it is imperative to have services which cater to their needs. Alhamdulillah, it is a breath of fresh air that Br. Farhan and his team at Ihsan Coaching have been doing just that. They have stepped up to provide a needed platform for Muslims facing these realistic issues. Their coaches provide a balance of both the Islamic as well as secular perspectives when dealing with their clients. Alhamdulillah, our community has also established a partnership with Ihsan Coaching, so that our members also benefit from their services. I hope many others realize that there is someone to talk to when needing help. Please do not be silent and reach out to them! I highly recommend their organization. May Allah continue to grant them success and the ability to help others.
                            </p>
                            <div className="flex flex-start mt-[15px] md:mt-[37px] mx-auto">
                                <div className='w-[40px] md:w-[75px] h-[40px] md:h-[75px] rounded-[50px] overflow-hidden prof-img mr-[10px]'><Image src={profile} /></div>
                                <div className="flex flex-col">
                                    <h6 className="fgr leading-[12px] md:leading-[36px] font-[600] text-[12px] md:text-[24px] text-[#555555] text-left mt-[7px] md:mt-[5px]">Mufti Asif Umar </h6>
                                    <h5 className='fgr leading-[12px] md:leading-[36px] text-[12px] md:text-[24px] text-[#555555] text-left mt-0 md:mt-[-10px]'>Islamic Wills USA</h5>
                                </div>
                            </div>
                        </p>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
