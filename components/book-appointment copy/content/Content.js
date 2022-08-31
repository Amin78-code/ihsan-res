import Image from "next/image";
import pattern from '../../../assets/images/pattern.png';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import hands from '../../../assets/images/services/hands.svg';
import PricingCard from './PricingCard';
 
const Content = ({ data, pb }) => { 
  return (
    <section className={`w-full pt-[40px] md:pt-[70px] pb-[30px] md:pb-[40px] bg-[#fff] relativ e ${pb ? "pb-[300px]" : ""}`}>
      <div className="myContainer">
      <h1 className="fpr mb-[17px] md:mb-[49px] text-[32px] md:text-[60px] sc1500:text-[85px] text-[#0F2E3C] capitalize text-center mx-auto leading-[32px] md:leading-[60px] sc1500:leading-[85px]">book your appointment</h1>
      <h2 className="fpr mb-[17px] md:mb-[49px] text-[18px] md:text-[35px] sc1500:text-[50px] text-[#0F2E3C] capitalize text-center mx-auto leading-[16px] md:leading-[35px] sc1500:leading-[50px]">pricing</h2>
        <div className='flex flex-wrap flex-col lg:flex-row gap-x-0 xl:gap-x-[1.5%] gap-y-[20px] xl:gap-y-[30px] pt-0 pb-[10%] lg:pb-[4%]'>
            {data?.map((value) => {
            return (
              <PricingCard key={value.text} data={value} />
            )
          })}  
        </div>
      </div>
      <div className="myContainer">
      <p className="fgb text-[16px]  italic md:text-[30px] leading-[16px] md:leading-[36px] text-[#555555] pb-[20px] md:pb-[40px]">
        *Note: If you are unable (or find it difficult) to pay the fee, please contact us and we can discuss options.
      </p> 
      </div>
    </section>
  );
};

export default Content;
