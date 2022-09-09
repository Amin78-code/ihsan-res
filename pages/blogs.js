import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import Content from "../components/blogs/Content";
import blog1 from "../assets/images/blogs/blog1.jpg";
import blog2 from "../assets/images/blogs/blog2.jpg";
import blog3 from "../assets/images/blogs/blog1.jpg";

const appointmentDetails = [
  {
    img: blog1,
    title: "Parenting Techniques and The Impact on Children",
    text: "The truth is that parents are human, and they too will make mistakes. However, those mistakes can come at a significant cost …",
    posted_date: "March 8, 2022",
    slug_title: 'parenting-techniques-and-the-impact-they-can-have-on-children',
  },
  {
    img: blog2,
    title: "Anxiety Management Techniques",
    text: "Fear, uncertainty, risks, and mistakes break us down in many ways. Sometimes the impact is so significant that it takes us a long time …",
    posted_date: "January 6, 2022",
    slug_title: 'anxiety-management-techniques',
  },
//   {
//     img: blog3,
//     title: "Coaching vs Therapy",
//     text: "People often ask what is coaching and how does it differ from therapy? The truth is that a lot of what can be done in therapy can …",
//     posted_date: "July 30, 2021",
//     slug_title: 'anxiety-management-techniques',
//   },
];

export default function Blogs() {
  return (
    <Layout>
      <Content data={appointmentDetails} />
    </Layout>
  );
}
