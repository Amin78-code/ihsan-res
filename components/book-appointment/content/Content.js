import Link from "next/link";
import Image from "next/image";
import pattern from "../../../assets/images/pattern.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import hands from "../../../assets/images/services/hands.svg";
import AppointmentCard from "./AppointmentCard";

const Content = ({ appointments, pb }) => {
  return (
    <section
      className={`w-full pt-[40px] md:pt-[140px] lg:pt-[70px] pb-[30px] md:pb-[70px] bg-[#fff] relativ e ${
        pb ? "pb-[300px]" : ""
      }`}
    >
      <div className="myContainer">
        <h1 className="fpr text-[40px] md:text-[55px] leading-[40px] md:leading-[55px]  text-[#182657] mb-[20px] md:mb-[40px]">
          Available coaches
        </h1>
        <div className=" flex flex-col gap-y-[30px]">
          {appointments.map((appointment) => {
            return (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Content;
