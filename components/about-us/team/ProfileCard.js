import Link from "next/link";
import Image from "next/image";
import email from "../../../assets/images/icons/email.svg";

const ProfileCard = ({ data }) => {
  return (
    <div
      key={data.profileImg}
      className="w-full md:w-[48%] lg:w-[31.5%] overflow-hidden"
    >
      <div className="w-full img_container">
        <Image src={data.profileImg} />
      </div>
      <h3 className="fpr text-[24px] md:text-[42px] leading-[20px] md:leading-[36px] text-[#182657] mt-[14px] md:mt-[24px] text-ellipsis overflow-hidden whitespace-nowrap">
        {data.name}
      </h3>
      <h4 className="fgr text-[16px] md:text-[28px] leading-[20px] md:leading-[36px] text-[#555555] pt-[5px] pb-0 md:pb-[4px] text-ellipsis overflow-hidden whitespace-nowrap">
        {data.designation}
      </h4>
      <p className="fgr text-[12px] md:text-[24px] leading-[20px] md:leading-[36px] text-[#555555] text-ellipsis overflow-hidden whitespace-nowrap">
        {data.status}
      </p>
      <p className="email fgr text-[12px] md:text-[24px] leading-[36px] text-[#555555] flex items-center">
        <div className="mr-[5px] md:mr-[10px] mt-[5px] min-w-[20px] md:min-w-[32px] w-[20px] md:w-[auto]">
          <Image src={email} />
        </div>
        <span className="text-ellipsis overflow-hidden">
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </span>
      </p>
      <Link href={`profile/${data.slugName}`}>
        <a className="fgr w-[94px] w-[181px] h-[31px] md:h-[50px] bg-[#AE8B5C] text-[#fff] text-[12px] md:text-[24px] leading-[36px] rounded-[50px] px-[5px] py-[10px] hover:opacity-[.8] cursor-pointer mb-0 md:mb-[20px] flex justify-center items-center mt-0 md:mt-[25px]">
          View profile
        </a>
      </Link>
    </div>
  );
};

export default ProfileCard;
