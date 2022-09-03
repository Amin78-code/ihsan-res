import Link from "next/link";
import React from "react";
import { BsCalendar } from "react-icons/bs";

const ArticleCard = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.slug_title}`}>
      <a>
        <div className=" py-[8px] hover:bg-[#e7e9eb] px-[6px] rounded-[5px]">
          <h4 className="fgr  text-[14px] md:text-[16px] leading-[20px] md:leading-[22px]  text-[#0F2E3C] capitalize whitespace-nowrap overflow-ellipsis overflow-hidden">
            {blog.title}
          </h4>
          <div className="fgr text-[#555] text-[9px] md:text-[11px] md:pt-[3px]">
            <BsCalendar className="text-[11px] inline mt-[-2px]" />
            <span className="pl-[4px]">{blog.posted_date}</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ArticleCard;
