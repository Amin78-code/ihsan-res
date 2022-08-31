import React from "react";
import { BsCalendar } from "react-icons/bs";

const ArticleCard = ({ blog }) => {
  return (
    <div className=" py-[8px]">
      <h4 className="fgr  text-[14px] md:text-[16px] leading-[20px] md:leading-[26px]  text-[#0F2E3C] capitalize pb-[ ] md:pt-[ ]">
        {blog.title}
      </h4>
      <div className="fgr text-[#555] text-[9px] md:text-[11px] md:pt-[5px]">
        <BsCalendar className="text-[11px] inline mt-[-2px]" />
        <span className="pl-[4px]">{blog.posted_date}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
