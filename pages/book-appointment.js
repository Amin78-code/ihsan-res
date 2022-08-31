import Layout from "../components/layout/layout";
import Hero from "../components/book-appointment/hero/Hero";
// import teacher1 from "../assets/images/appointment/Image1.png";
import teacher1 from "../assets/images/about-us/person1.svg";
import teacher2 from "../assets/images/about-us/person2.svg";
import teacher3 from "../assets/images/about-us/person7.svg";
import teacher4 from "../assets/images/about-us/person8.svg";
import teacher5 from "../assets/images/about-us/person5.svg";
import teacher6 from "../assets/images/about-us/person6.svg";
import teacher7 from "../assets/images/about-us/person4.svg";
import teacher8 from "../assets/images/about-us/person3.svg";
import Content from "../components/book-appointment/content/Content";
import GrayDiv from "../components/book-appointment/gray-div/GrayDiv";

const heroContent = {
  title_part1: "Appointment scheduling ",
  title_part2: "and rates",
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
    id: "Rehena_Rana",
    profileImg: teacher3,
    name: "Rehena Rana",
    slugName: "Rehena_Rana",
    designation: "Coach",
    status: "Master’s in Pastoral Studies",
    email: "mohammed.bemat@ihsancoaching.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo LeoLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo Leo. Phasellus pulvinar dolor et porta feugiat. Nunc gravida ligula eros. Quisque ut rutrum risus. Cras lorem nibh, rhoncus nec leo non, imperdiet luctus orci. In pharetra gravida sapien id mollis. Quisque at urna enim. Vestibulum mollis, mi vel volutpat mattis, nisl augue mattis dolor, at condimentum urna lacus rhoncus urna. Nulla vitae quam porta, dictum lacus eu, porttitor mi. Aliquam facilisis nisl eget ultrices dictum. Praesent ullamcorper sed lorem vel",
    sessionsAvailability: [
      "Individual Sessions",
      "Four individual Sessions",
      " Couples Sessions ",
      "Four couples Sessions",
      "Premarital Coaching",
    ],
  },
  {
    id: "Rawand_Abdelghani",
    profileImg: teacher4,
    name: "Rawand Abdelghani",
    slugName: "Rawand_Abdelghani",
    designation: "Founder & Coach",
    status: "Masters in Clinical Mental Health Counseling",
    email: "farhan.ahmed@ihsancoaching.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo LeoLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo Leo. Phasellus pulvinar dolor et porta feugiat. Nunc gravida ligula eros. Quisque ut rutrum risus. Cras lorem nibh, rhoncus nec leo non, imperdiet luctus orci. In pharetra gravida sapien id mollis. Quisque at urna enim. Vestibulum mollis, mi vel volutpat mattis, nisl augue mattis dolor, at condimentum urna lacus rhoncus urna. Nulla vitae quam porta, dictum lacus eu, porttitor mi. Aliquam facilisis nisl eget ultrices dictum. Praesent ullamcorper sed lorem vel",
    sessionsAvailability: [
      "Individual Sessions",
      "Four individual Sessions",
      " Couples Sessions ",
      "Four couples Sessions",
      "Premarital Coaching",
    ],
  },
  {
    id: "Asmaa_Mahran",
    profileImg: teacher5,
    name: "Asmaa Mahran",
    slugName: "Asmaa_Mahran",
    designation: "Founder & Coach",
    status: "Masters in Clinical Mental Health Counseling",
    email: "farhan.ahmed@ihsancoaching.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo LeoLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo Leo. Phasellus pulvinar dolor et porta feugiat. Nunc gravida ligula eros. Quisque ut rutrum risus. Cras lorem nibh, rhoncus nec leo non, imperdiet luctus orci. In pharetra gravida sapien id mollis. Quisque at urna enim. Vestibulum mollis, mi vel volutpat mattis, nisl augue mattis dolor, at condimentum urna lacus rhoncus urna. Nulla vitae quam porta, dictum lacus eu, porttitor mi. Aliquam facilisis nisl eget ultrices dictum. Praesent ullamcorper sed lorem vel",
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
    profileImg: teacher6,
    name: "Mohammed Bemat Coach",
    slugName: "Mohammed_Bemat_Coach",
    designation: "Founder & Coach",
    status: "Masters in Clinical Mental Health Counseling",
    email: "farhan.ahmed@ihsancoaching.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo LeoLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo Leo. Phasellus pulvinar dolor et porta feugiat. Nunc gravida ligula eros. Quisque ut rutrum risus. Cras lorem nibh, rhoncus nec leo non, imperdiet luctus orci. In pharetra gravida sapien id mollis. Quisque at urna enim. Vestibulum mollis, mi vel volutpat mattis, nisl augue mattis dolor, at condimentum urna lacus rhoncus urna. Nulla vitae quam porta, dictum lacus eu, porttitor mi. Aliquam facilisis nisl eget ultrices dictum. Praesent ullamcorper sed lorem vel",
    sessionsAvailability: [
      "Individual Sessions",
      "Four individual Sessions",
      " Couples Sessions ",
      "Four couples Sessions",
      "Premarital Coaching",
    ],
  },
  {
    id: "Mufti_Zeshan_Ahmed",
    profileImg: teacher7,
    name: "Mufti Zeshan Ahmed",
    slugName: "Mufti_Zeshan_Ahmed",
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
    id: "Imam_Azhar_Subedar",
    profileImg: teacher8,
    name: "Imam Azhar Subedar",
    slugName: "Imam_Azhar_Subedar",
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
      <GrayDiv />
    </Layout>
  );
}
