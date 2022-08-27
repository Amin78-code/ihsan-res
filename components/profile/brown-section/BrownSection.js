import Link from "next/link";
import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";
import pattern from '../../../assets/images/pattern.png';

const BrownSection = ({id}) => {
 
  return (
    <section className="relative overflow-hidden">
    <div className='absolute left-0 right-0 top-0 w-full h-[100%] overlay-img'>
      <Image src={pattern} className='scale-[1.5] ' />
    </div>
    <div className='absolute left-0 right-0 top-0 w-full h-[100%] bg-[#AE8B5C] opacity-[.99]'></div>
    <div className="main__container relative z-[2]">
        <div className="bg-[#AE8B5C ] p-[50px] xl:p-[100px] text-center">
          <h1 className='fpr text-[35px] md:text-[75px] sc1500:text-[100px] leading-[35px] md:leading-[75px] sc1500:leading-[100px] capitalize text-[#fff] text-center mx-auto'>Shedule your session today!</h1>
          <h2 className="fpr text-[28px] leading-[28px] 2xl:text-[52px] 2xl:leading-[52px] mt-[40px] text-[#fff]">Schedule an online session with one of our experienced coaches. We are here to listen and be with you during every step of your journey.</h2>
            <div className=" w-full">
              <Link href={`/book-appointment/${id}`}>
              <button className="shadow-[0_0_6px_#00000029] rounded-[100px] mx-auto bg-[#0F2E3C] hover:bg-[#fff] text-[#fff] hover:text-[#0F2E3C] text-[12px] md:text-[22px] lg:text-[28px] font-bold px-10 md:px-[5%] md:px-[7%] py-3 md:py-[20px] md:py-[20px] mt-[35px]">Book Appointment</button>
              </Link>
            </div>
        </div>
    </div>
  </section>
  );
};

export default BrownSection;
