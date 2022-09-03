import Link from "next/link";
import Image from "next/image";
import email from "../../../assets/images/icons/email.svg";

const ProfileCard = ({ data }) => {
  return (
    <div
      key={data.profileImg}
      className="w-full md:w-[48%] lg:w-[30.6%] overflow-hidden"
    >
      <div className="w-full img_container">
        <Image src={data.profileImg} alt='profileImg' />
      </div>
      <h3 className="fpr text-[24px] md:text-[32px] leading-[20px] md:leading-[32px] text-[#0F2E3C] mt-[12px] md:mt-[18px] text-ellipsis overflow-hidden whitespace-nowrap">
        {data.name}
      </h3>
      <h4 className="fgr text-[16px] md:text-[20px] leading-[20px] md:leading-[20px] text-[#555555] pt-[5px] pb-0 md:pb-[4px] text-ellipsis overflow-hidden whitespace-nowrap">
        {data.designation}
      </h4>
      <p className="fgr text-[12px] md:text-[16px] leading-[20px] md:leading-[26px] text-[#555555] text-ellipsis overflow-hidden whitespace-nowrap">
        {data.status}
      </p>
      <span className="email fgr text-[12px] md:text-[16px] leading-[26px] text-[#555555] flex items-center">
        <div className="mr-[5px] md:mr-[6px] mt-[5px] min-w-[15px] md:min-w-[22px] w-[15px]  ">
          <Image src={email} alt="email" />
        </div>
        <span className="text-ellipsis overflow-hidden">
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </span>
      </span>
      <Link href={`/profile/${data.slugName}`}>
        <a className="fgr w-[80px ] w-[150px] h-[25px] md:h-[40px] bg-[#AE8B5C] text-[#fff] text-[12px] md:text-[16px] leading-[36px] rounded-[50px] px-[5px] py-[10px] hover:opacity-[.8] cursor-pointer mb-0 md:mb-[20px] flex justify-center items-center mt-0 md:mt-[12px] hover:text-[#AE8B5C] hover:bg-[#fff] border-[1px] border-[#AE8B5C]">
          View profile
        </a>
      </Link>
    </div>
  );
};

export default ProfileCard;
