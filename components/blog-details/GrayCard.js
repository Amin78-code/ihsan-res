import React from "react";
import ArticleCard from "./ArticleCard";

const GrayCard = ({ recentBlogs }) => {
  return (
    <div className="bg-[#F2F4F7] rounded-[15px]  md:rounded-[25px] p-[25px]  mt-[30px] lg:mt-0">
      <h4 className="fgr font-[600] text-[14px] md:text-[18px] leading-[18px] md:leading-[26px]  text-[#0F2E3C] capitalize pb-[10px]">
        Recent Articles
      </h4>
      <div className="max-h-[380px] overflow-y-scroll">
        {recentBlogs.map((blog, index) => {
          return <ArticleCard key={blog.title + index} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default GrayCard;
