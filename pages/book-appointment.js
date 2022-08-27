import Layout from "../components/layout/layout";
// import Hero from "../components/book-appointment/hero/Hero";
import Content from "../components/book-appointment/content/Content";
import Hero from "../components/book-appointment/hero/Hero";
// import BrownSection from "../components/book-appointment/brown-section/BrownSection";
import hands from "../assets/images/services/hands.svg";
import engagement from "../assets/images/services/engagement.svg";
import { useEffect, useState } from "react";
import teacher1 from "../assets/images/appointment/Image1.png";
// import teacher2 from "../assets/images/appointment/image2.png";
// import teacher3 from "../assets/images/appointment/image3.png";

const heroContent = {
  title: " Premarital coaching",
  paragraph1:
    "Our one-on-one coaching services can help you build self-confidence, improve your relationships, support your career ambitions, or help you achieve your goals.",
};

const appointmentDetails = [
  {
    id: "Farhan_Ahmed",
    profileImg: teacher1,
    name: "Farhan Ahmed",
    slugName: "Farhan_Ahmed",
    designation: "Founder & Coach",
    status: "Masters in Clinical Mental Health Counseling",
    email: "farhan.ahmed@ihsancoaching.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo LeoLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo Leo. Phasellus pulvinar dolor et porta feugiat. Nunc gravida ligula eros. Quisque ut rutrum risus. Cras lorem nibh, rhoncus nec leo non, imperdiet luctus orci. In pharetra gravida sapien id mollis. Quisque at urna enim. Vestibulum mollis, mi vel volutpat mattis, nisl augue mattis dolor, at condimentum urna lacus rhoncus urna. Nulla vitae quam porta, dictum lacus eu, porttitor mi. Aliquam facilisis nisl eget ultrices dictum. Praesent ullamcorper sed lorem vel… learn more",
    sessionsAvailability: [
      "Individual Sessions",
      "Four individual Sessions",
      " Couples Sessions ",
      "Four couples Sessions",
      "Premarital Coaching",
    ],
  },
  {
    id: "Mohammed_Bemat_Coach",
    profileImg: teacher1,
    name: "Mohammed Bemat Coach",
    slugName: "Mohammed_Bemat_Coach",
    designation: "Coach",
    status: "Master’s in Pastoral Studies",
    email: "mohammed.bemat@ihsancoaching.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo LeoLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo Leo. Phasellus pulvinar dolor et porta feugiat. Nunc gravida ligula eros. Quisque ut rutrum risus. Cras lorem nibh, rhoncus nec leo non, imperdiet luctus orci. In pharetra gravida sapien id mollis. Quisque at urna enim. Vestibulum mollis, mi vel volutpat mattis, nisl augue mattis dolor, at condimentum urna lacus rhoncus urna. Nulla vitae quam porta, dictum lacus eu, porttitor mi. Aliquam facilisis nisl eget ultrices dictum. Praesent ullamcorper sed lorem vel… learn more",
    sessionsAvailability: [
      "Individual Sessions",
      "Four individual Sessions",
      " Couples Sessions ",
      "Four couples Sessions",
      "Premarital Coaching",
    ],
  },
  {
    id: "Farhan_Ahmed",
    profileImg: teacher1,
    name: "Farhan Ahmed",
    slugName: "Farhan_Ahmed",
    designation: "Founder & Coach",
    status: "Masters in Clinical Mental Health Counseling",
    email: "farhan.ahmed@ihsancoaching.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo LeoLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo Leo. Phasellus pulvinar dolor et porta feugiat. Nunc gravida ligula eros. Quisque ut rutrum risus. Cras lorem nibh, rhoncus nec leo non, imperdiet luctus orci. In pharetra gravida sapien id mollis. Quisque at urna enim. Vestibulum mollis, mi vel volutpat mattis, nisl augue mattis dolor, at condimentum urna lacus rhoncus urna. Nulla vitae quam porta, dictum lacus eu, porttitor mi. Aliquam facilisis nisl eget ultrices dictum. Praesent ullamcorper sed lorem vel… learn more",
    sessionsAvailability: [
      "Individual Sessions",
      "Four individual Sessions",
      " Couples Sessions ",
      "Four couples Sessions",
      "Premarital Coaching",
    ],
  },
];

export default function BookAppointment({ id }) {
  return (
    <Layout>
      <Hero data={heroContent} />
      <Content appointments={appointmentDetails} />
    </Layout>
  );
}
