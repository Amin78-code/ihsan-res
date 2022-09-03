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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo LeoLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo Leo. Phasellus pulvinar dolor et porta feugiat. Nunc gravida ligula eros. Quisque ut rutrum risus. Cras lorem nibh, rhoncus nec leo non, imperdiet luctus orci. In pharetra gravida sapien id mollis. Quisque at urna enim. Vestibulum mollis, mi vel volutpat mattis, nisl augue mattis dolor, at condimentum urna lacus rhoncus urna. Nulla vitae quam porta, dictum lacus eu, porttitor mi. Aliquam facilisis nisl eget ultrices dictum. Praesent ullamcorper sed lorem vel",
    sessionsAvailability: [
      [
        "Individual Sessions",
        "https://calendly.com/farhan-ahmed/individual-session",
      ],
      [
        "Four individual Sessions",
        "https://calendly.com/farhan-ahmed/couples-session",
      ],
      [
        " Couples Sessions ",
        "https://calendly.com/farhan-ahmed/couples-session",
      ],
      [
        "Four couples Sessions",
        "https://calendly.com/farhan-ahmed/first-couples-session",
      ],
      [
        "Premarital Coaching",
        "https://calendly.com/farhan-ahmed/premarital-coaching",
      ],
    ],
  },
  {
    id: "Asmaa_Mahran",
    profileImg: teacher3,
    name: "Asmaa Mahran",
    slugName: "Asmaa_Mahran",
    designation: "Founder & Coach",
    status: "Masters in Clinical Mental Health Counseling",
    email: "farhan.ahmed@ihsancoaching.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo LeoLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo Leo. Phasellus pulvinar dolor et porta feugiat. Nunc gravida ligula eros. Quisque ut rutrum risus. Cras lorem nibh, rhoncus nec leo non, imperdiet luctus orci. In pharetra gravida sapien id mollis. Quisque at urna enim. Vestibulum mollis, mi vel volutpat mattis, nisl augue mattis dolor, at condimentum urna lacus rhoncus urna. Nulla vitae quam porta, dictum lacus eu, porttitor mi. Aliquam facilisis nisl eget ultrices dictum. Praesent ullamcorper sed lorem vel",
    sessionsAvailability: [
      [
        "Individual Sessions",
        "https://calendly.com/asmaa-mahran/individual-session",
      ],
      [
        "Four individual Sessions",
        "https://calendly.com/asmaa-mahran/first-individual-session",
      ],
      [
        " Couples Sessions ",
        "https://calendly.com/asmaa-mahran/couples-session",
      ],
      [
        "Four couples Sessions",
        "https://calendly.com/asmaa-mahran/first-couples-session",
      ],
    ],
  },
  {
    id: "Rehena_Rana",
    profileImg: teacher5,
    name: "Rehena Rana",
    slugName: "Rehena_Rana",
    designation: "Coach",
    status: "Master’s in Pastoral Studies",
    email: "mohammed.bemat@ihsancoaching.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo LeoLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo Leo. Phasellus pulvinar dolor et porta feugiat. Nunc gravida ligula eros. Quisque ut rutrum risus. Cras lorem nibh, rhoncus nec leo non, imperdiet luctus orci. In pharetra gravida sapien id mollis. Quisque at urna enim. Vestibulum mollis, mi vel volutpat mattis, nisl augue mattis dolor, at condimentum urna lacus rhoncus urna. Nulla vitae quam porta, dictum lacus eu, porttitor mi. Aliquam facilisis nisl eget ultrices dictum. Praesent ullamcorper sed lorem vel",
    sessionsAvailability: [
      [
        "Individual Sessions",
        "https://calendly.com/rehena-rana/individual-session",
      ],
      [
        "Four individual Sessions",
        "https://calendly.com/rehena-rana/first-individual-session",
      ],

      [
        "Premarital Coaching",
        "https://calendly.com/rehena-rana/premarital-coaching",
      ],
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
      [
        "Individual Sessions",
        "https://calendly.com/rawand-abdelghani/individual-session",
      ],
      [
        "Four individual Sessions",
        "https://calendly.com/rawand-abdelghani/first-individual-session",
      ],
    ],
  },

  // {
  //   id: "Mohammed_Bemat",
  //   profileImg: teacher6,
  //   name: "Mohammed Bemat",
  //   slugName: "Mohammed_Bemat",
  //   designation: "Founder & Coach",
  //   status: "Masters in Clinical Mental Health Counseling",
  //   email: "farhan.ahmed@ihsancoaching.com",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo LeoLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo Leo. Phasellus pulvinar dolor et porta feugiat. Nunc gravida ligula eros. Quisque ut rutrum risus. Cras lorem nibh, rhoncus nec leo non, imperdiet luctus orci. In pharetra gravida sapien id mollis. Quisque at urna enim. Vestibulum mollis, mi vel volutpat mattis, nisl augue mattis dolor, at condimentum urna lacus rhoncus urna. Nulla vitae quam porta, dictum lacus eu, porttitor mi. Aliquam facilisis nisl eget ultrices dictum. Praesent ullamcorper sed lorem vel",
  //   sessionsAvailability: [
  //     ["Individual Sessions","https://calendly.com/mohammed-bemat/individual-session"],
  //     ["First individual Session","https://calendly.com/mohammed-bemat/first-individual-session"],
  //    [ " Couples Sessions ","https://calendly.com/mohammed-bemat/couples-session"],
  //    [ "First couples Sessions","https://calendly.com/mohammed-bemat/first-couples-session"]
  //   ],
  // },
];
const appointmentDetails2 = [
  {
    id: "Mufti_Zeshan_Ahmed",
    profileImg: teacher7,
    name: "Mufti Zeshan Ahmed",
    slugName: "Mufti_Zeshan_Ahmed",
    designation: "Founder & Coach",
    status: "Masters in Clinical Mental Health Counseling",
    email: "farhan.ahmed@ihsancoaching.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo LeoLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo Leo. Phasellus pulvinar dolor et porta feugiat. Nunc gravida ligula eros. Quisque ut rutrum risus. Cras lorem nibh, rhoncus nec leo non, imperdiet luctus orci. In pharetra gravida sapien id mollis. Quisque at urna enim. Vestibulum mollis, mi vel volutpat mattis, nisl augue mattis dolor, at condimentum urna lacus rhoncus urna. Nulla vitae quam porta, dictum lacus eu, porttitor mi. Aliquam facilisis nisl eget ultrices dictum. Praesent ullamcorper sed lorem vel",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo LeoLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et justo Leo. Phasellus pulvinar dolor et porta feugiat. Nunc gravida ligula eros. Quisque ut rutrum risus. Cras lorem nibh, rhoncus nec leo non, imperdiet luctus orci. In pharetra gravida sapien id mollis. Quisque at urna enim. Vestibulum mollis, mi vel volutpat mattis, nisl augue mattis dolor, at condimentum urna lacus rhoncus urna. Nulla vitae quam porta, dictum lacus eu, porttitor mi. Aliquam facilisis nisl eget ultrices dictum. Praesent ullamcorper sed lorem vel",
  },
];

export default function BookAppointment({ id }) {
  return (
    <Layout>
      <Hero data={heroContent} />
      <Content
        appointments={appointmentDetails}
        appointments2={appointmentDetails2}
      />
      <GrayDiv />
    </Layout>
  );
}
